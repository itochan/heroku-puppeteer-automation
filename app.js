const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()
const port = process.env.PORT || 3000

const user = process.env.USER
const password = process.env.PASSWORD

if (user && password) {
  app.use(basicAuth(user, password))
}

app.get('/run/:task', (req, res) => {
  let { task } = req.params

  try {
    // task
  } catch (e) {
    res.send(e)
    return
  }
  res.send(`Success: ${task}`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
