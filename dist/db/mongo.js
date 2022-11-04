"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbLink = process.env.ATLAS_MONGO_URL;
// mongodb+srv://ozzy:ozzy@ozzy-cluster.llaahyp.mongodb.net/green?retryWrites=true&w=majority
exports.mongoLocal = () => {
    mongoose_1.default.connect(dbLink).then(() => {
        console.log(`Atlas DB CONNECTED`);
    }).catch((err) => {
        console.log(err);
        console.log(`Atlas DB NOT CONNECTED`);
    });
};
//# sourceMappingURL=mongo.js.map