import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
    it('should enable COR', async() => {
        app.get('/test_cors', (req, resp) => {
            resp.send()
        })
        await request(app)
            .get('/test_body_parser')
            .expect('access-control-allow-origin', '*')
            .expect('access-control-allow-methods', '*')
            .expect('access-control-allow-headers', '*')
    })
})
