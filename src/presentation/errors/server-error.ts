export class ServerError extends Error {
  constructor () {
    super('Internor server error')
    this.name = 'ServerError'
  }
}
