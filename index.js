require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)
const app = require('express')()

app.get('/', (req, res) => {
    res.send({ message: "Hello World" })
})

app.get('/sendMessage', (req, res) => {
    sendMessage()
    setTimeout(() => {
        res.send({ message: "Message sent successFully" })
    }, 3000)
})

function sendMessage() {
    client.messages
        .create({
            body: "This is a test message 2",
            from: "+15053081832",
            to: "+919811073783"
        }).then((message) => console.log(message))
        .catch((err) => console.log(err))
}

app.listen(process.env.PORT, () => console.log(`Server is Running on port ${process.env.PORT}`))
