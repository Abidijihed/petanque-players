const express = require('express');
const bodyParser = require('body-parser');
const { router }=require('./router')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/team',router)
app.use('/team', router)
app.use('/post',router)
app.use('/new',router)
app.listen(PORT, () => {
  console.log(`listening on  http://localhost:${PORT}`);
});
