export default function handler(req, res) {
    let { userID, userName } = JSON.parse(req.body);

    const sdk = require("node-appwrite");

    // Init SDK
    const client = new sdk.Client();

    const databases = new sdk.Databases(client);

    client
        .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
        .setProject("6485b9cf57b685c9231e") // Your project ID
        .setKey(process.env.APPWRITE_SECRET_KEY); // Your secret API key

    const promise = databases.getCollection("64876d13af9dbde9fe5b", userID);

    promise.then(
        function (response) {
            res.status(200).json({
                collectionID: userID,
            });
        },
        function (error) {
            const promise = databases.createCollection(
                "64876d13af9dbde9fe5b",
                userID,
                userName,
                [
                    sdk.Permission.read(sdk.Role.user(userID)),
                    sdk.Permission.update(sdk.Role.user(userID)),
                    sdk.Permission.delete(sdk.Role.user(userID)),
                    sdk.Permission.write(sdk.Role.user(userID)),
                    sdk.Permission.create(sdk.Role.user(userID)),
                ]
            );

            promise.then(
                function (response) {
                    res.status(200).json({
                        collectionID: userID,
                    });
                },
                function (error) {
                    console.log(error);
                }
            );
        }
    );
}
