## 1

Precisamos construir uma solução de transformação de objetos em tags HTML. Lembre-se que todas as tags HTML são consideradas elementos e que todo elemento pode possuir um conteúdo ou uma lista de outros elementos. Nosso desafio é conseguir organizar esses elementos em objetos.

Por exemplo, conseguir criar um `span` com `negrito` e `itálico` com uma chamada do tipo:
`negrito(italico(span(“meu texto estiloso!”)))`

Ou `negrito().addElement(italico.addElement(span().addContent(“meu texto estiloso!”)))`

E que a chamada `negrito(italico(span(“meu texto estiloso!”))).toHTML()` nos retorne a String:
`<b><i><span>meu texto estiloso!</span></i></b>`

Considere que atributos em HTML possuem sempre o conteúdo em formato String. Por exemplo:
`negrito(italico(span(“meu texto estiloso!”).addAttribute(“class”, “banana”))).toHTML()` nos retorne a String:
`<b><i><span class=”banana”>meu texto estiloso!</span></i></b>`

Que padrões de projeto vocês conseguem usar aqui?

Limite-se aos elementos: `a`, `p`, `span`, `italico`, `negrito`. 
Comecem por fazer os exemplos funcionares, depois tentem criar o `a` e `p` para 
avaliar o quanto é dificil adicionar coisas na arquitetura de vocês.
