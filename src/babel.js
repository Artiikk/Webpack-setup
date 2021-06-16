export default async function start() {
  return await Promise.resolve('async works well')
}

start().then(console.log)

class Util {
  static id = Date.now()
}

console.log('Util Id:', Util.id)