import TestResolver from "./test.resolver";
import UserResolver from "./user.resolver";
import ProductResolver from "./product.resolver";
import CategoryResolver from "./category.resolver";

export const resolvers = [TestResolver,UserResolver,ProductResolver,CategoryResolver] as const;