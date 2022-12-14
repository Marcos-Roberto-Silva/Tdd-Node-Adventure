import {Controller, HttpRequest, HttpResponse} from "../../presentation/protocols";
import {LogControllerDecorator} from "./log";

describe("LogController Decorator", () => {
    it("should call controller handle", async () => {
        class ControllerStub implements Controller {
            async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
                const httpResponse = {
                    statusCode: 200,
                    body: {
                        name: 'Marcos Silva',
                        email: 'marcos@email.com',
                        password: 123,
                        passwordConfirmation: 123
                    }
                }
                return new Promise((resolve) => resolve(httpResponse));
            }
        }
        const controllerStub = new ControllerStub();
        const handleSpy = jest.spyOn(controllerStub, "handle")
        const sut = new LogControllerDecorator(controllerStub)
        const httpRequest = {
            body: {
                email: "any_email@email.com",
                name: "any_name",
                password: "any_password",
                passwordConfirmation: "any_password",
            }
        }
        await sut.handle(httpRequest)
        expect(handleSpy).toHaveBeenCalledWith(httpRequest)
    })
})
