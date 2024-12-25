import express from 'express'
import {systemEnv} from "./config.ts";
import {ernieInstance} from "./src/models/index.js";
import {IRawMessage} from "node_modules/@clients/public/index.ts";
import {getMessageAnswer} from "./src/service/Ernie.js";

const app = express()
app.get('/', (req, res) => {
  ernieInstance.getMessageAnswer("你好！")
})

// post 请求，
// 请求体： {message: "你好！",modelType: "Ernie"}
// 返回：{message: "你好！", answer: "你好！"}
app.post('/message', (req, res) => {
  // 流式传输
  res.setHeader('Transfer-Encoding', 'chunked')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  const message:IRawMessage = req.body.message
  const answer = getMessageAnswer(message)

})

app.listen(systemEnv.PORT, () => {
  console.log(`Example app listening at http://localhost:${systemEnv.PORT}`)
})
