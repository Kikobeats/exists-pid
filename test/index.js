'use strict'

const { fork } = require('child_process')
const test = require('ava')

const existsPID = require('..')

let proc
test.before(() => (proc = fork('', { detached: true })))
test.after.always(() => process.kill(proc.pid, 'SIGKILL'))

test('true', t => {
  t.true(existsPID(proc.pid))
})

test('false', t => {
  t.false(existsPID(1337))
})
