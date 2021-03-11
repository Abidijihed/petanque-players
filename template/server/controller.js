const {connection} = require('../database-mysql/index.js')
module.exports ={
    createUser: (req,res)=>{
      console.log('==>',req.body)
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
  })
}