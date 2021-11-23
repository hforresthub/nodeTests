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

const { Server } = require('http')

const express = require('express')
const app = express()

require('dotenv').config()

const userID = process.env.USER_ID
const userKey = process.env.USER_KEY

app.get('/', (req, res) => {
	res.send('Hi ' + userID)
})

app.listen(3000, () => console.log('server read by ' + userID))

console.log('\x1b[33m%s\x1b[0m', 'hi!')

const chalk = require('chalk')
console.log(chalk.blue('hello!'))

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 20 })
const timer = setInterval(() => {
	bar.tick()
	if (bar.complete) {
		clearInterval(timer)
	}
}, 100)

const getInput = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

getInput.question(`Where is up?`, direction => {
	console.log(`Hi, is ${direction} also up?`);
	if (direction === "esc") {
		process.kill(process.pid, 'SIGTERM')
	}
	getInput.close()
})


process.on('SIGTERM', () => {
	Server.close(() => {
		console.log('Process terminated');
	})
})

process.argv.slice(2).forEach((element, index) => {
	const [key, val] = element.split('=')
	console.log(`${key}: ${val}`);
})

setTimeout(() => {
	console.log('This process is your pid ' + process.pid);
	process.kill(process.pid, 'SIGTERM')
}, 15000)
