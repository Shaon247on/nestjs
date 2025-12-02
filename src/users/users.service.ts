import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Aminul Rahman',
      email: 'aminul.rahman@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Tasnim Hossain',
      email: 'tasnim.hossain@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Farhan Kabir',
      email: 'farhan.kabir@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Nishat Akter',
      email: 'nishat.akter@example.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Shahed Mahmud',
      email: 'shahed.mahmud@example.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'Rafa Islam',
      email: 'rafa.islam@example.com',
      role: 'INTERN',
    },
    {
      id: 7,
      name: 'Arman Chowdhury',
      email: 'arman.chowdhury@example.com',
      role: 'ADMIN',
    },
    {
      id: 8,
      name: 'Jarin Sultana',
      email: 'jarin.sultana@example.com',
      role: 'ENGINEER',
    },
    {
      id: 9,
      name: 'Imran Siddique',
      email: 'imran.siddique@example.com',
      role: 'ADMIN',
    },
    {
      id: 10,
      name: 'Mim Rahman',
      email: 'mim.rahman@example.com',
      role: 'ENGINEER',
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
