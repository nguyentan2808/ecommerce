import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { email, username, password } = createUserDto;

    const user = await this.userRepository.findOne({ where: { email, username } });
    if (user) {
      throw new ConflictException('User already exists');
    }

    const hashPassword = await argon2.hash(password);
    const newUser = this.userRepository.create({ ...createUserDto, password: hashPassword });
    await this.userRepository.save(newUser);

    return newUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      username,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
