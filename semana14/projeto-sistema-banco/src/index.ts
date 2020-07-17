// Criaçao de conta
import * as fs from 'fs'
import * as moment from 'moment'

const name = process.argv[2]
const cpf = process.argv[3]
const date = process.argv[4]


type extractItem = {
    description: string,
    value: number,
    date: string
}


type user = {
    name: string,
    cpf: string,
    dateOfBirth: string,
    balance: number
    extract: extractItem[]
}

const createAccount = (name: string, cpf: string, date: string): void => {
    const dateValidation = moment(date, "DD/MM/YYYY")
    const today = moment()
    const age = today.diff(dateValidation, "years")

    if(age < 18){
        console.log("É necessario ter mais de 18 anos. :(")
        return;
    }

    const filePathUsers = "C:/Users/felip/OneDrive/Área de Trabalho/Felipe-Oliveira/semana14/projeto-sistema-banco/src/user.json"
    const useFileData: Buffer = fs.readFileSync(filePathUsers)
    const useString: string = useFileData.toString()
    const users: user[] = JSON.parse(useString)
    
    const foundCpf =users.find((user:user) => {
        return user.cpf === cpf
    })
    if(foundCpf !== undefined){
        console.log("Já existe um usuario com o mesmo CPF. :(")
    }
    
    
    users.push({
        name: name,
        cpf: cpf,
        dateOfBirth: date,
        balance: 0,
        extract: []
    })

    const useStringFied = JSON.stringify(users, null, 2)

    fs.writeFileSync(filePathUsers, useStringFied)
}

createAccount(name, cpf, date)