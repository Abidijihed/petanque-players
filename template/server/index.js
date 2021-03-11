const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-mysql');


const app = express();
const PORT = 3000;
const { router }=require('./router')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


 app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/team',router)
app.use('/team', router)

 

app.put('/api/phrases/:id',(req,res)=>{
 

})



app.listen(PORT, () => {
  console.log(`listening on  http://localhost:${PORT}`);
});
