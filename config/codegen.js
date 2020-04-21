module.exports = {
    "schema": [
        {
            "http://localhost:3000/graphql": {}
        }
    ],
    "documents": [
        "./src/schema/*.graphql",
        "./src/**/*.tsx",
        "./src/**/*.ts"
    ],
    "overwrite": true,
    "generates": {
        "./src/generated/schema.tsx": {
            "plugins": [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            "config": {
                "skipTypename": false,
                "withHooks": true,
                "withHOC": false,
                "withComponent": false,
                "typesPrefix": "I"
            }
        },
        // "./graphql.schema.json": {
        //     "plugins": [
        //         "introspection"
        //     ]
        // }
    }
};