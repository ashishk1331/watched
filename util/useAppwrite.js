import { Client, Account, ID, Databases, Permission, Role } from "appwrite";
import { useStore } from "./useStore";

export const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6485b9cf57b685c9231e");

const DATABASE_ID = "64876d13af9dbde9fe5b";

const databases = new Databases(client);

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

export function createDoc(data) {
    const COLLECTION_ID = useStore.getState().user['$id'];

    const promise = databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        data
    );

    promise.then(
        function (response) {
            console.log(response); // Success
        },
        function (error) {
            console.log(error); // Failure
        }
    );
}

export function listDoc() {
    const COLLECTION_ID = useStore.getState().user['$id'];

    const promise = databases.listDocuments(DATABASE_ID, COLLECTION_ID);

    promise.then(
        function (response) {
            console.log(response); // Success
        },
        function (error) {
            console.log(error); // Failure
        }
    );
}
