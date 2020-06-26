import * as fs from 'fs'

const nomeDaListaDetarefas:string = process.argv[2]
const novatarefa:string = process.argv[3]

function adicionaTarefa():void{
fs.appendFileSync(nomeDaListaDetarefas,novatarefa )
 console.log("Tarefa adicionada com sucesso")
}

adicionaTarefa()