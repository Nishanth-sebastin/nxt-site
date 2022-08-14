const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/components'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/components/home.html')

})

app.listen(8080, () => {
    console.log("running")
})