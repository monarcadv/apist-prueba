const express = require('express')
// 
const raute = express.Router()
const {dataUser} =require('../datauser')
raute.use(express.json())
// 
raute.get('/',(rep ,res)=>{
    res.send(dataUser)
});
// 
raute.get('/:id',(rep ,res)=>{
    const id = rep.params.id
    const resl = dataUser.filter(use => use.id == id)
    return res.send(resl)
});

raute.post('/',(rep,res)=>{
    let newuser = rep.body
    dataUser.push(newuser)
    res.send(JSON.stringify(dataUser))
})

raute.put('/:id',(rep,res)=>{
    const updatacurso = rep.body
    const ids = rep.params.id

    const indexs = dataUser.findIndex(user => user.id == ids)
    if(indexs >= 0){
        dataUser[indexs] = updatacurso
    }
    res.send(JSON.stringify(dataUser))


})

raute.patch('/:id',(rep,res)=>{
    const updatacurso = rep.body
    const ids = rep.params.id

    const indexs = dataUser.findIndex(user => user.id == ids)
    if(indexs >= 0){
        let modificado = dataUser[indexs]
        Object.assign(modificado,updatacurso)
    }
    res.send(JSON.stringify(dataUser))


})

raute.delete('/:id',(rep,res)=>{
    const ids = rep.params.id

    const indexs = dataUser.findIndex(user => user.id == ids)
    if(indexs >= 0){
        dataUser.splice(indexs,1)
    }
    res.send(JSON.stringify(dataUser))


})


module.exports = raute