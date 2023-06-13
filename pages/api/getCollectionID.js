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

    const DATABASE_ID = '64876d13af9dbde9fe5b';

    const promise = databases.getCollection(DATABASE_ID, userID);

    let attr = [
        ["adult", "boolean"],
        ["backdrop_path", "string"],
        ["genre_ids", "object"],
        ["id", "number"],
        ["original_language", "string"],
        ["original_title", "string"],
        ["overview", "string"],
        ["popularity", "number"],
        ["poster_path", "string"],
        ["release_date", "string"],
        ["title", "string"],
        ["video", "boolean"],
        ["vote_average", "number"],
        ["vote_count", "number"],
    ];

    promise.then(
        function (response) {
            res.status(200).json({
                collectionID: userID,
            });
        },
        function (error) {
            const promise = databases.createCollection(
                DATABASE_ID,
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

                    for(let i of attr){
                        if(i[1] === 'string'){
                            databases.createStringAttribute(DATABASE_ID, userID, i[0], 1028, true);
                        } else if(i[1] === 'number'){
                            databases.createFloatAttribute(DATABASE_ID, userID, i[0], true);
                        } else if(i[1] === 'boolean'){
                            databases.createBooleanAttribute(DATABASE_ID, userID, i[0], true);
                        }
                    }

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
