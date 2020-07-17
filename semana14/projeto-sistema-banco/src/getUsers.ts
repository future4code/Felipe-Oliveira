import * as fs from 'fs'

const getUsers = process.argv[3]

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


function getAllUsers(){
    const filePathUsers = "C:/Users/felip/OneDrive/Área de Trabalho/Felipe-Oliveira/semana14/projeto-sistema-banco/src/user.json"
    const useFileData: Buffer = fs.readFileSync(filePathUsers)
    const useString: string = useFileData.toString()
    const users: user[] = JSON.parse(useString)

    const useStringFied = JSON.stringify(users, null, 2)

    fs.writeFileSync(filePathUsers, useStringFied)
    
    console.log(useStringFied)
}

getAllUsers()