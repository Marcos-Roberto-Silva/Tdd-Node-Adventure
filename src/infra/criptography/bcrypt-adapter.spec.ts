import bcrypt, { hash } from "bcrypt";
import { BcryptAdapter } from "./bcrypt-adapter";

jest.mock('bcrypt', () => ({
    async hash (): Promise<string> {
        return new Promise(resolve => resolve('hash'))
    }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
    return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
    it('should call bcrypt with correct values', async () => {
        const salt = 12
        const sut = makeSut()
        const hashSpy = jest.spyOn(bcrypt, 'hash')
        await sut.encrypt('any_value')
        expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
    })

    it('should return a hash on success', async () => {
        const salt = 12
        const sut = makeSut()
        const hash = await sut.encrypt('any_value')
        expect(hash).toBe('hash')
    })

    it('should throw if bcrypt throws', async () => {
        const sut = makeSut()
        // @ts-ignore
        jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise((_resolve, reject) => reject(new Error())))
        const promise = sut.encrypt('any_value')
        await expect(promise).rejects.toThrow()
    })
})
