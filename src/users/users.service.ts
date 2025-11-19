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
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN')
}
