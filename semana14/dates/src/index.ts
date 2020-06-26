import * as moment from 'moment'
moment.locale("pt-br")

type event = {
    name:string,
    description:string,
    startDate:moment.Moment,
    finishDate:moment.Moment
}

const allEvents:event[] = [
    {
        name:"Fazer Bolo",
        description:"fazer bolo pro aniversario do goli",
        startDate:moment("15/08/2021 19:00", "DD/MM/YYYY HH:mm"),
        finishDate:moment("15/08/2021 23:00", "DD/MM/YYYY HH:mm")
    },

    {
        name:"fazer exercicios",
        description:"me dediicar aos exercicios passados",
        startDate:moment("24/06/2020 13:00", "DD/MM/YYYY HH:mm"),
        finishDate:moment("24/06/2020 17:00", "DD/MM/YYYY HH:mm")
    }
]

const printEvents = (events:event[]):void => {
    events.forEach((item:event) => {
        const duration = item.finishDate.diff(item.startDate, "minutes")
        
        const today = moment()
        const  daysUntilEvent = item.startDate.diff(today, "days")

        console.log(` Nome: ${item.name}
        Horario de Inicio:${item.startDate.format("dddd, DD de MMMM de YYYY, HH:mm")}
        Horario de fim:${item.finishDate.format("dddd, DD de MMMM de YYYY, HH:mm")}
        descrição:${item.description}
        Duração:${duration} minutos
        Dias até o evento:${daysUntilEvent}
        `)
    });
}

const createEvent=(
    name:string,
    description:string,
    startDate:moment.Moment,
    finishDate:moment.Moment
    ):void =>{
        if(!name || !description || !startDate || !finishDate){
            console.log("Input Invalido")
            return
        }

        const diffStartDateAndToday =startDate.diff(moment(), "seconds")
        const diffFinishDateAtAndToday = finishDate.diff(moment(), "seconds")

        if(diffStartDateAndToday < 0 && diffFinishDateAtAndToday < 0){
            console.log("datas incorrentas, por favor corrigi-las")
        }

        allEvents.push({
            name,
            description,
            startDate,
            finishDate
        })
}

console.log(createEvent("teste", "testando", moment("24/09/2020 13:00", "DD/MM/YYYY HH:mm"), 
moment("24/10/2020 22:00", "DD/MM/YYYY HH:mm")))
console.log(printEvents(allEvents))