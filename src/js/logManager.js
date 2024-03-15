import chalk from 'chalk'

class Logger {
  constructor() {
    this.showTimeGlobally = false
    this.logLevels = {
      info: { color: chalk.bold.cyanBright, prefix: 'Info: ' },
      warn: { color: chalk.bold.yellow, prefix: 'Warning: ' },
      error: { color: chalk.bold.red, prefix: 'Error: ' },
      success: { color: chalk.bold.green, prefix: 'Success: ' }
    }
  }

  log(level, message, showTime = null) {
    const { color, prefix } = this.logLevels[level] || {}
    const timestamp = (showTime !== null ? showTime : this.showTimeGlobally)
      ? chalk.blueBright(`(${new Date().toLocaleString()})`)
      : ''

    const logMessage = `${color ? color(prefix) : prefix} ${message} ${timestamp}`

    // const stack = new Error().stack.split('\n')
    // const match = stack[2].trim().match(/([^/\\]+):(\d+)/)
    // const callerInfo = match ? `${match[1]}:${match[2]}` : 'Unknown file:line'

    if (console[level] && typeof console[level] === 'function') {
      console[level](`${logMessage}`)
    } else {
      console.log(`${logMessage}`)
    }
  }

  toggleTimeDisplayGlobally(showTime) {
    this.showTimeGlobally = showTime
  }

  success(message, showTime) {
    this.log('success', message, showTime)
  }
}

export default new Logger()