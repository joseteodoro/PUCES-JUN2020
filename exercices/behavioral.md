# 1

Cliente/servidor P2P: recebemos comandos de busca, lista vizinhos, upload e execução de scripts através de mensagens. Criem esse ponto de entrada que recebe uma mensagem e decide o que fazer baseado no corpo da mensagem. Exemplo de mensagens (não vale usar REST porque estamos falando de conexões RPC conectadas diretamente usando sockets entre os clientes):

`{ command: ‘search’, keywords: ‘music mp3’, destination: ‘100.22.11.25:8888’ }`

`{ command: ‘upload’, filename: ‘music.mp3’, content: [byte array] }`

`{ command: ‘execute’, script: ‘music.sh’}`

`{ command: ‘neighbors’, depth: 2, destination: ‘90.12.50.21:8975’}`

Cada cliente/servidor P2P tem uma lista de vizinhos conhecidos, quando recebe esse comando de `neighbors` ele lista os seus vizinhos e devolve como resultado do comando. O atributo `depth` nos diz com que profundidade precisamos listar nossos vizinhos. Por exemplo, para depth: 1, somente nosso nó lista os vizinhos. Contudo, se temos depth: 2 nós vamos listar nossos vizinhos e nossos vizinhos vão listar seus respectivos vizinhos. E assim por diante.

Precisamos ainda de um mecanismo de auditoria para logar quando, quais, de onde vieram e o conteúdo da mensagem desses comandos.
