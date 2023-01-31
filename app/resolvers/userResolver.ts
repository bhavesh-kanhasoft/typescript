import { ApolloError } from "apollo-server";
import { Resolver, Query, Arg, Mutation, Ctx} from "type-graphql";
import { UserType } from "type/index";
import { User } from "schema/index";


@Resolver()
export class UserResolver{
    
    @Query(() => [UserType])
    async users() {
        return await User.find();
    }
    
    @Mutation(returns => UserType)
    async addUser(@Ctx() {req,parent},
        @Arg('email', {nullable: true}) email: string,
        @Arg('firstName', {nullable:false}) firstName: string,       
        @Arg('lastName', {nullable:false}) lastName: string
    ){
        return new Promise(async (resolve,reject) => {
            try {  
                const userData = new User({
                    'email': email,
                    'first_name': firstName,
                    'last_name': lastName
                });
                
                const result = userData.save();
                return resolve(result);
            } catch(err){    
                console.log("try catch error while add user detail ==>> ", err);
                reject(err)
            }
        }).catch((error) => {
            console.log("error when add user detail: ", error);
            throw new ApolloError(error, 'New user not added');
        })
    }

}