//install localtunnel

const axios = require('axios');
const Slack = require('./slack.js')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()


// sets port 8080 to default or unless otherwise specified in the environment (5000)
app.set('port', process.env.PORT || 5000);

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


const http = require('http')
const server = http.createServer(app).listen(5000, '0.0.0.0', () => console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env))


app.post('/slack', (req, res) => {
    
    console.log("New Message from slack")
    //response.status(200).end() --> to say ok
    //challenge is for the event subscription for slack bot
    //slack api will send a "challenge" to us (URL) and the status(200) is the reply to say ok
    res.send(req.body.challenge).status(200).end()
    Slack.formatMessage(req)
  })

