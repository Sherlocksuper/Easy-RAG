import express from 'express'
import dotenv from 'dotenv'
import {systemEnv} from "./config.ts";
import ernie from "./src/models/Ernie.js";
import {ernieInstance} from "./src/models/index.js";



const app = express()
app.get('/', (req, res) => {
  res.send('Hello World!')
  ernieInstance.getMessageAnswer("你好！")
})

app.listen(systemEnv.PORT, () => {
  console.log(`Example app listening at http://localhost:${systemEnv.PORT}`)
})
