const express = require('express')
const app = express();
// 
const raute = require('./datauser/user.js')
app.use('/api/use',raute)
// 


app.get("/", (rep, res) => {
  res.send("hola");
});


//
const porst = process.env.PORT || 3000;
app.listen(porst, () => {
  console.log(`http://localhost:${porst}`);
});
