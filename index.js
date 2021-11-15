#!/usr/bin/env node

const http = require('http')

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('I am the only thing here')
})

server.listen(7000)

const open = require('open')
open('http://127.0.0.1:7000')