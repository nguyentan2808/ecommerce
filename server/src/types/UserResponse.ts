import { FieldError } from './FieldError';
import { User } from './../entities/User';
import { Field, ObjectType } from 'type-graphql';
import { IMutationResponse } from './MutationResponse';

@ObjectType({ implements: IMutationResponse })
export class UserMutationResponse implements IMutationResponse {
    code: number;
    message: string;

    @Field()
    user?: User;

    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];
}
