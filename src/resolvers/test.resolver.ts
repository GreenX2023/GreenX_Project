import { Resolver,Query} from "type-graphql";

@Resolver()
export default class TestResolver {
    @Query(()=>String)
    hello(): string {
        return "Hello Ozzy"
    }
}