const users = require('../samples/users.json')

// prop(field)(obj) <---- item
const prop = field => {
  return obj => {
    return obj[field]
  }
}

const getField = prop

const equals = expectedValue => {
  return value => {
    return value === expectedValue
  }
}

const propEq = (field, expectedValue) => {
  return obj => {
    return obj[field] === expectedValue
  }
}

const fieldEquals = propEq

const composeReducer = (acc, fn) => {
  return fn(acc)
}

// compose, pipe
// [fn, fn, fn, fn](arg)
const compose = funs => {
  return arg => funs.reduce(composeReducer, arg)
}

// v1
const extractState = compose([
  getField('address'),
  getField('state'),
])

const reducer = (acc, actual) => {
  acc.add(actual)
  return acc
}

// v1
// const extractStates = items => items.map(item => item.address) // one liner
//   .map(addr => addr.state)
//   .reduce(reducer, new Set([]))

// v2
// const extractStates = items => items.map(getField('address')) // one liner
//   .map(getField('state'))
//   .reduce(reducer, new Set([]))

// v3
const extractStates = items => items.map(extractState)
  .reduce(reducer, new Set([]))

// v3
// state -> (user -> address -> state -> state === Oregon -> bollean)
const stateUsers = state => compose([
  extractState,
  equals(state),
])

describe.only('fp', () => {
  it('map reduce to extract states', () => {
    // const states = new Set([])
    // for (i = 0; i < users.length; i++) {
    //   const addr = users[i].address
    //   const state = addr.state
    //   states.add(state)
    // }
    // console.log(states)
    // users.map(f).map(g) =~ users.map( g(f) )

    // const states = users.map(user => user.address.state)
    // users.forEach // <- sincrono users.reduce

    const states = extractStates(users)

    console.log([...states])
  })
  it('filter to list from states', () => {
    // const foundUsers = []
    // for (i = 0; i < users.length; i++) {
    //   if (users[i].address.state === 'Oregon') {
    //     foundUsers.push(users[i])
    //   }
    // }

    // const address = prop('address')(user) // user --> address
    // propEq('state', 'Oregon')(address) // address --> boolean

    // propEq('state', 'Oregon')(prop('address')(user)) // user --> boolean
    // doesnt work without `flip`
    // users[i].address.state + fieldEquals
    // lamda functions => -> // one liner
    const state = 'Oregon'
    // {
    //   parent's context
    // }

    // const foundUsers = users.filter(user => user.address.state === state) //one liner

    // v2
    // user -> address -> state -> state === Oregon -> bollean
    // const oregonUsers = compose([
    //   getField('address'),
    //   getField('state'),
    //   equals('Oregon'),
    // ])
    // const foundUsers = users.filter(oregonUsers) //one liner

    // v3
    // state -> (user -> address -> state -> state === Oregon -> bollean)
    // const stateUsers = state => compose([
    //   extractState,
    //   equals(state),
    // ])

    const foundUsers = users.filter(stateUsers('Oregon')) //one liner
    console.log([...foundUsers])
  })
  it('compose functions', () => {
    const user = users[0]
    // const addr = user.address
    // const state = addr.state
    //    const state = (user.address).state
    const state = extractState(user)
    console.log(state)
  })
  it('curry functions', () => {
    // const addr = user.address
    // const state = addr.state
    //    const state = (user.address).state
    // user -> address -> state -> state === 'Oregon'

    const pathEquals = lvl1 => {
      return lvl2 => {
        return expectedValue => {
          return item => {
            return item[lvl1][lvl2] === expectedValue
          }
        }
      }
    }
    const user = users[0]
    const isMassachusettsUser = pathEquals('address')('state')('Massachusetts')
    console.log(isMassachusettsUser(user))

    // map(pathEquals('address')('state')('Massachusetts'))
    // filter({  })
    // find({  })

    // connection
    // const query => connection => clazz => sql => connection.sqlQuery(sql).map(clazz)
    // const dbQuery = query(postgres)
    // const userQuery = dbQuery(User)
    // const activeUsersQuery = () => userQuery('selet * from users where active = true')
    // const activeUsers = activeUsersQuery()

    // const oregonUsers = userQuery(`select`)
  })
})
