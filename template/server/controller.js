const {connection} = require('../database-mysql/index.js')

module.exports ={
    createUser: (req,res)=>{
    const query = `INSERT INTO register(firstName,lastName,email,numberPhone) VALUES("${req.body.firstName}","${req.body.lastName}","${req.body.email}",${req.body.numberPhone})`
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  getAll: ((req,res)=>{
    const query ='select * from register'
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    
    })
  }),
getAllpost: ((req,res)=>{
    const query ='SELECT * FROM postes'
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.json(result)
      }
    
    })
  }),
  createPost:((req,res)=>{
    const query=`INSERT INTO postes(title,namee,imageUrl,createdAt,body) VALUES("${req.body.title}","${req.body.namee}","${req.body.imageUrl}","12/03/2021","${req.body.body}")`
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        console.log(result)
      }
    })
  })
}
