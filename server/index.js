const express = require('express')
const router = require('./router/index.js')
require('dotenv').config({ path: '.env' })
const connectDB = require('./config/connectDB.js')

const app = express()

// middleware
app.use(express.json())
app.use('/api',router)
app.set("view engine", "ejs") //화면 엔진을 ejs로 설정한다. (기본폴더는 /views이다)

app.get("/", (req,res)=>{
    res.send("<h1>나의 웹서버에 오신것을 환영합니다.</h1>")
})

connectDB().then(()=>{
    console.log(`와우 내가만든 몽공DB랑 연결 성공했어요.`)   
})

app.listen(8080, ()=> {
    console.log(`웹서버가 실행되었습니다.`)
})
