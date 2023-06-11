import { Client, Account, ID } from "appwrite";

export const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6485b9cf57b685c9231e");

const account = new Account(client);

export async function signUp(email, password) {
    const promise = account.create(ID.unique(), email, password);

    return await promise.then(
        function (response) {
            return response;
        },
        function (error) {
            return error;
        }
    );
}

export async function logIn(email, password) {
    const promise = account.createEmailSession(email, password);

    return await promise.then(
        function (response) {
            return response;
        },
        function (error) {
            return error;
        }
    );
}

export function getSession() {
    return account.get();
}

export async function logOut() {
    return account.deleteSessions();
}
