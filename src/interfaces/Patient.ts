import format from 'date-fns/format'

export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    email: string;
    gender: string;
    address: string;
    photo?: string;
    dateOfBirth: string;
    lastVisit: string;
    status: string;
}

export const patients:Patient[] =[
    {
        id: 1,
        firstName: 'Jasper',
        lastName: 'Kumeh',
        age: 20,
        phone: '0778554422',
        email: 'j.kumeh@gmail.com',
        gender: 'male',
        address: 'St. Paul Bridge, Monrovia, Liberia',
        dateOfBirth: format(new Date('2001-05-10'), 'MM/dd/yyyy'),
        lastVisit: format(new Date('2022-04-04'), 'MM/dd/yyyy'),
        status: 'Pending'
    },
    {
        id: 2,
        firstName: 'Daniel',
        lastName: 'Kumeh',
        age: 26,
        phone: '0778557755',
        email: 'j.kumeh@gmail.com',
        gender: 'male',
        address: 'St. Paul Bridge, Monrovia, Liberia',
        dateOfBirth: format(new Date('1996-05-10'), 'MM/dd/yyyy'),
        lastVisit: format(new Date('2022-04-04'), 'MM/dd/yyyy'),
        status: 'Cancelled'
    },
    {
        id: 3,
        firstName: 'Jon',
        lastName: 'Snow',
        age: 30,
        phone: '0880112233',
        email: 'j.snow@the-north.com',
        gender: 'male',
        address: 'North of the Wall',
        dateOfBirth: format(new Date('1992-05-10'), 'MM/dd/yyyy'),
        lastVisit: format(new Date('2022-04-04'), 'MM/dd/yyyy'),
        status: 'Completed'
    },
    {
        id: 4,
        firstName: 'Sanza',
        lastName: 'Stark',
        age: 25,
        phone: '0880112233',
        email: 's.stark@the-north.com',
        gender: 'female',
        address: 'Kings Landing',
        dateOfBirth: format(new Date('1997-05-10'), 'MM/dd/yyyy'),
        lastVisit: format(new Date('2022-04-04'), 'MM/dd/yyyy'),
        status: 'Completed'
    },
]