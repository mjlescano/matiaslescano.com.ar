const spawn = require('child_process').spawn

const SITE = 'matiaslescano.com.ar'

const build = spawn('npm', ['run', 'build'])

console.log(`· Running tests for ${SITE}`)

console.log('  * App should build.')

build.stderr.on('data', (data) => {
  console.error(data.toString())
})

build.on('close', (code) => {
  if (code !== 0) {
    console.log('  - There was an error building the App.')
    process.exit(code) // eslint-disable-line no-process-exit
  }

  console.log('  + App builded correctly :)')
  console.log(`· All tests finished for ${SITE}`)
  process.exit(code) // eslint-disable-line no-process-exit
})
