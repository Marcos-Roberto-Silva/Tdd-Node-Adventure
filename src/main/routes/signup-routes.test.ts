import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from "../../infra/db/mongodb/helpers/mongo-helper";

describe('SignUp Routes', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL as string, )
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach( async () => {
        const accountCollections = await MongoHelper.getCollection('accounts')
        await accountCollections.deleteMany({})
    })

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
