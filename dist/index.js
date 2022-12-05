"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const express_graphql_1 = require("express-graphql");
const allResolvers_1 = require("./resolvers/allResolvers");
const { mongoLocal } = require('./db/mongo');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const main = async () => {
    app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: allResolvers_1.resolvers
        }),
        graphiql: true,
    }));
    mongoLocal();
    app.get("/", (_req, res) => res.send("Server is working"));
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
};
try {
    main();
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=index.js.map