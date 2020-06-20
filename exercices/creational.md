
## 1

Nosso pedaço de software é uma classe de configuração para acesso de banco de dados (host, porta, usuário, senha, nome do banco de dados). Temos diferentes tipos de fontes para essa configuração (variáveis de ambiente, arquivo usando uma convenção de nome, mensageria para se atualizar em tempo real com servidores de configuração ). Sua missão é criar essa estrutura de leitura e configuração. A parte de leitura de mensageria de uma fila pode ser mockada, mas o processamento da mensagem não a mensagem deve ser uma string que será processada e interpretada para gerar a configuração.
OBS: o resultado dessa configuração é um POJO / JSON / Record / struct com os dados de (host, porta, usuário, senha, nome do banco de dados).

## 2 

Garanta que a configuração que você fez no exercício anterior seja uma única instância para que não seja necessário ficar recriando e lendo a configuração a cada chamada.

## 3

A criação de uma conexão com banco de dados depende de três passos na devida ordem: uma configuração (advinda de diferentes fontes), um teste de conexão (ping no host), e da conexão em si. Crie uma estrutura que possibilite essas chamadas mockando o ping e a conexão de em si. A conexão deve ser um objeto que possua um método/ funcao chamado `execute` que receba uma string SQL e retorne uma lista de objetos / mapas / records.
Além disso, criar conexão com um banco de dados é uma tarefa custosa, então precisamos criar um pedaço de software que possa reutilizar uma conexão assim que ela não for mais necessária.
