// 2. Explain what middleware is in Express and write an example middleware function that logs the HTTP method and URL of incoming requests.

// Answer: Middleware is a function in nodejs that will have all access for requesting an object , responding an object and moving to next middle function in the application request-response cycle.

// example:
const express=require('express')
const app=express()
app.listen(5000,()=>{
    console.log("server started")
})


const middlewareFunction= (req,res,next)=>{
    console.log(`method: ${req.method}, url:${req.url}`)
    next();
}
app.use(middlewareFunction)

app.get('/',(req,res)=>{
    res.send("Hello")
})