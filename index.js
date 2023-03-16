//Importação das bibliotecas:
import http from 'http';
import chalk from 'chalk';

//Tratativa de Erro:
function trataError(erro){
    throw new Error(chalk.red(erro.code, 'A conexão não pôde ser efetuada com sucesso.'));
}

//Async com Try Catch:
async function webServer(){
    try{
        const hostname = '127.0.0.1';
        const port = 45;

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');

        });

        server.listen(port, hostname, ()=>{
            console.log(`Server rodando em http://${hostname}:${port}/`);
        });
    }catch(erro){
        trataError(erro);
    }
}

//Execução:
webServer();


