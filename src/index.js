'use strict'

module.exports = pid => {
  try {
    return process.kill(pid, 0)
  } catch (error) {
    if (error && error.code && error.code === 'ESRCH') return false
    throw error
  }
}
