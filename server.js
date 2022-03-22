const express=require('express')
const app=express()
const path=require('path')
// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname,'public','index.html')
// )
// })

const sayHi=(req,res,next)=>{
    console.log('Hello middelware')
    next()
}
app.use(sayHi)
app.use("/api",require('./routes/Students'))

app.use(express.static(path.join(__dirname, 'public')))
app.listen(5000, (err) => {
    if(err){
        throw err
    }
    else{
        console.log('SERVER IS u AND running ...');
    }
})

