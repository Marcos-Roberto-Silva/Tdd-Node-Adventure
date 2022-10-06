import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
    it('should returns an account on success', async() => {
        await request(app)
            .post('/api/signup')
            .send({
                name:'Marcos Silva',
                email: 'test@example.com',
                password: '123',
                passwordConfirmation: '123'
            })
            .expect(200)
    })
})
