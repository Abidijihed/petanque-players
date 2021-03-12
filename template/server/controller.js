const {connection} = require('../database-mysql/index.js')
const crypto = require('crypto')

module.exports ={
    createUsers: (req,res)=>{
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
        res.send(result)
      }
    
    })
  }),
  createPost:((req,res)=>{
    const query=`INSERT INTO postes(title,namee,imageUrl,createdAt,body) VALUES("${req.body.title}","${req.body.namee}","${req.body.imageUrl}","12/03/2021","${req.body.body}")`
    connection.query(query,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  }),
  createUser:((req,res)=>{
    console.log(req.body.password)
    var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
    console.log(passwordHashed)
    const query=`INSERT INTO adminuser (password,email) VALUES("${passwordHashed}","${req.body.email}")`
    connection.query(query,(err,results)=>{
      if(err){
        console.log(err)
        res.send(err)
      }else{
        console.log(results)
        res.send(results)
      }
    })
  }),
  getUser :((req,res)=>{
    var passwordHashed = crypto.createHash('sha256').update(req.body.password, 'utf8').digest('hex')
    const query=`SELECT * from adminuser where email="${req.body.email}"`
    connection.query(query,(err,results)=>{
      if(err){
        console.log(err)
      }else if(results.length>0 && results[0].password===passwordHashed){
          res.status(200).send('success')
        }else{
          res.status(500).send('wrong password or email')
          
        }
    })
  }),
  delete:((req,res)=>{
    const query=`DELETE FROM register WHERE id=${req.params.id}`
    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).send(err)
      }else{
        res.status(200).send('deleted')
      }
    })
  })
}
