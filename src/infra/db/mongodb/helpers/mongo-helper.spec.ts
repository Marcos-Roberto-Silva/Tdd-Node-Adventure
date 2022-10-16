import { MongoHelper as sut } from './mongo-helper'

describe("Mongo Helper", () => {
    beforeAll(async () => {
        await sut.connect('mongodb://localhost:27017');
    })

    afterAll(async () => {
        await sut.disconnect();
    })

    it("Should reconnect if mongoDb is down", async () => {
       let accountCollection = await sut.getCollection('accounts')
       expect(accountCollection).toBeTruthy()
       await sut.disconnect();
       accountCollection = await sut.getCollection('accounts')
       expect(accountCollection).toBeTruthy()
    })
})
