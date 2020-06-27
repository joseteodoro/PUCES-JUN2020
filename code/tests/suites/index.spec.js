const faker = require('faker')
const R = require('ramda')

const build = size => [...new Array(size)]

const reducer = (acc, next) => {
  acc[next.id] = next
  return acc
}

describe('Simple test', () => {
  it('i', () => {
    const data = require('../samples/data.json')
    console.log('indexed: ', JSON.stringify(
      data.reduce(reducer, {})
    ))
  })
  it.skip('looks how it works', () => {
    const full = build(300)
      .map(() => faker.helpers.createCard())
      .map(u => {
        const id = faker.finance.account()
        return {
          ...u,
          id,
          account: {
            id,
            amout: faker.finance.amount(),
            iban: faker.finance.iban(),
          },
        }
      })
      .map(R.omit(['posts']))

    console.log('users: ', JSON.stringify(full.map(R.omit(['company', 'accountHistory', 'account']))))
    console.log('\n\n\n\n\n')
    console.log('data: ', JSON.stringify(full.map(R.pick(['id', 'company', 'accountHistory', 'account']))))
    expect(true).to.be.true
  })
})
