import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
    it('should parser body as json', async() => {
        app.post('/test_body_parser', (request, response) => {
            response.send(request.body)
        })
        await request(app)
            .post('/test_body_parser')
            .send({name: 'Marcos'})
            .expect({name: 'Marcos'})
    })
})
