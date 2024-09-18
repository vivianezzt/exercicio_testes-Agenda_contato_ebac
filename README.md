**No exercício você deverá:**

1) Criar um projeto de testes utilizando o Cypress;
2) No script de testes você deverá testar as funcionalidades da aplicação disponível no link https://agenda-contatos-react.vercel.app/;
3) Testar as funcionalidades:
inclusão;
alteração;
remoção de um contato;
4) No repositório do curso, criar uma branch chamada exercicio_cypress;
5) Armazenar nessa branch o conteúdo do projeto de teste;
6) Enviar o link do repositório através da plataforma.

**Configurando o cypress no projeto**

instalação 
```
npm init -y 
npm install --save-dev cypress@12.6.0

// no package.json adicionar o comando do cypress
"cypress": "cypress"

```
Para abrir o cypress

``` 
npm run cypress open

```
**Criando os testes**


