import { Field, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class IMutationResponse {
    @Field()
    code: number;

    @Field({ nullable: true })
    message: string;
}
