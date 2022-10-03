import {AddAccountRepository} from "../../../../data/protocols/add-account-repository";
import {AddAccountModel} from "../../../../domain/usecases/add-account";
import {AccountModel} from "../../../../domain/models/account";
import {map} from "./account-mapper";

export class AccountMongoRepository implements AddAccountRepository {
    async add (accountData: AddAccountModel): Promise<AccountModel> {
        return map(accountData)
    }
}
