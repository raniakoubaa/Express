const student=require('../Student')
const express=require('express')
const router=express.Router()
router.get('/list',(req,res) =>{
    res.json(student)
})
router.get('/list/:id', (req,res) =>{
    let students=student.filter(stud=>stud.id===parseInt(req.params.id))
    if(students.lenght === 0) {  
    res.json({msg: "not exist ID =" + req.params.id})
     } else{
        res.json(students)
     }
     
    })
    module.exports=router