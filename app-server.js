const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')


app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img','logo.svg')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/bookmarks', require('./routes/api/bookmarks'))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
