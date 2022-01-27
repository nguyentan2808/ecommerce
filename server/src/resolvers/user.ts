import { UserMutationResponse } from './../types/UserResponse';
import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { User } from './../entities/User';
import argon2 from 'argon2';

@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return 'Hello World!';
    }

    @Mutation(() => User, { nullable: true })
    async register(
        @Arg('username') username: string,
        @Arg('email') email: string,
        @Arg('password') password: string
    ): Promise<User | null> {
        const existingUser = await User.findOne({ where: [{ username, email }] });

        if (existingUser) return null;

        const hashedPassword = await argon2.hash(password);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        }).save();

        return newUser;
    }

    @Mutation(() => UserMutationResponse, { nullable: true })
    async login(
        @Arg('username') username: string,
        @Arg('password') password: string
    ): Promise<UserMutationResponse | null> {
        const user = await User.findOne({ where: [{ username }, { email: username }] });

        if (!user) return null;

        const valid = await argon2.verify(user.password, password);

        if (!valid) return null;

        return {
            code: 200,
            message: '',
            user: user,
        };
    }
}
