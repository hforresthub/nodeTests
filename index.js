#!/usr/bin/env node

// const http = require('http')

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-Type': 'text/plain'})
// 	res.end('I am the only thing here')
// })

// server.listen(7000)

// const open = require('open')
// open('http://127.0.0.1:7000')

// setTimeout(() => {

// 	// process.exit()
// }, 2000)

// process.exitCode = 1

const express = require('express')
const { Server } = require('http')
const app = express()

app.get('/', (req, res) => {
	res.send('Hi!')
})

app.listen(3000, () => console.log('server read'))

process.on('SIGTERM', () => {
	Server.close(() => {
		console.log('Process terminated');
	})
})


setTimeout(() => {
	console.log('This process is your pid ' + process.pid);
	process.kill(process.pid, 'SIGTERM')
}, 3000)
