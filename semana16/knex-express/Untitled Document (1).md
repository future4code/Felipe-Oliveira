### exercicio 01
A) usando o raw, teremos como resposta muitas informaões desnecessarias como metadados, o raw não cosegue tratar a resposta do banco de forma automatica.
B)
````
const getActorByName = async (name: string): Promise <any> => {
  const result =  await connection.raw(`
  SELECT * FROM Actor WHERE name = ${name}`
  )
  return result [0] [0]
}
````
C)
````
const getActorByGender = async (gender: string): Promise <any> => {
  const result =  await connection.raw(`
  COUNT (*) FROM Actor WHERE gender = ${gender}`
  )
  const result = result [0] [0].count;
  return result
}
````

### exercicio 02
A)
````
const updateSalary = async (id:string, newSalary:number ): Promise<any> => {
  await connection
  .update({
      salary: newSalary,
  })
  .where({
    "id":id
  })
}
````
B)
````
const deleteActor = async (id:string): Promise <any> => {
  await connection ("Actor")
  .delete()
  .from("Actor")
  .where("id", id)
}
````
C)
````
const averageWage = async (gender:string): Promise <any> => {
  const result = await connection ("Actor")
  .avg("salary as gender")
  .where("gender", gender)
  return result[0].average;
}
````

### exercicio 03
A) por que ele é passado como paranmetro da URL, por isso é necessario colocar ele como um req.params
B) Eles são responsaveis por mostrar as memsagens de erro, e as mensagens de sucesso
C)
````
app.get("/Actor", async (req: Request, res: Response) => {
  try{
    const count = await countActors(req: query.gender as string);
    res.status(200).send({
      quantity:count,
    })
  } catch (err) {
    res.status(400).send({
      massege: err.massege
    })
  }
})
````

### exercicio 04 
A)
````
app.post("/Actor", async (req: Request, res: Response) => {
  try{
    await UpdateSalary(
      req.body.id,
      req.body.salary
    )
    res.status(200).send()
  } catch (err){
    res.status(400).send({
      massege: err.massege
    })
  }
})
````
B)
````
app.delete("/Actor/:id", async(req:Request, res: Response) => {
  try{
    await deleteActor(req.params.id)

  } catch (err){
    res.status(400).send({
      massege: err.massege
    })
  }
})
````

### exercicio 05
A)
````
const createMovie = async (
  newId:string,
  newTitle:string,
  newSymopsis:string,
  newReleaseDate:Date,
  newPlayingLimitDate:Date
) => {
  await connection
  .insert({
    id:newId,
    title:newTitle,
    synopsis: newSymopsis,
    realeaseDate: newReleaseDate,
    playingLimitDate: newPlayingLimitDate
  })
  .into("Movie")
}


app.post("/Movie", async (req: Request, res:Response) => {
  try{
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.playingLimitDate
    )
    res.status(200).send({
      massege: "sucesso"
    })
  } catch (err) {
    res.status(400).send({
      massage: err.massege
    })
  }
})
````
### exercicio 06
`````
const getAllMovies = async ():Promise <any> =>{
  const allMovies = await connection.raw(`
  SELECT * FROM Movie LIMIT 15`)
  return allMovies [0]
}

app.get("/Movie/all", async(req: Request, res: Response) => {
  try{
    getAllMovies()

    res.status(200).send({
      movies: movies
    })
  } catch(err) {
    res.status(400).send({
      massege: err.massege
    })
  }
});````

### exercicio 07 
````
app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
````


