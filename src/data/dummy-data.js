import Registry from '../models/registry';
import User from '../models/user';

export const USUARIOS = [
    new User(
        'a1',
        'Camilla Veloni', 
        'cristina@gmail.com',
        '12345678',
        'Colaborador'
    ),
    new User(
        'a2',
        'João Paulo', 
        'paulo@gmail.com',
        '012408402',
        'Colaborador'
    )
];

export const REGISTEREDTIME = [
    new Registry(
        'c1',
        'a1',
        '10:00'
    ),
    new Registry(
        'c2',
        'a1',
        '19:00'
    )
];
