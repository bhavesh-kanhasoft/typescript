import { ObjectType, Field, ID, Float } from "type-graphql";
import { ObjectId } from "mongoose";
import { USER_TYPE, STATUS } from "constant/enum";


@ObjectType()
export class UserType{
    @Field(() => ID)
    _id: ObjectId;

    @Field() 
    email: string;

    @Field()
    first_name: string;

    //@Field(() => Float)
    @Field()
    last_name: string;

    //@Field(() => Int)
    @Field()
    created_at: Date

    @Field()
    updated_at: Date

}