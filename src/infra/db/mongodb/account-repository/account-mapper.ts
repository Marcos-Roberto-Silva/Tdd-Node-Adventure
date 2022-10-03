import { AccountModel } from "../../../../domain/models/account";
import { MongoHelper } from "../helpers/mongo-helper";

export const map = async (accountData: any): Promise<AccountModel> => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne({...accountData})
    return {...accountData, id: result.insertedId.toString()}
}
