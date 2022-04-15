
export interface Doctor {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    dateOfBirth: string;
    experience: number;
    phone: string;
    gender: string;
    address: string;
    specialization: string;
    details?: string;
    photo?: string;
    status: string;
}

export interface DoctorsControllerInterface {
    addDoctor: (doctor:Doctor) => Promise<Doctor>
    getDoctors: () => Promise<Doctor[]>
    getDoctor: (doctorId:number) => Promise<void>
    updateDoctor: (doctorId:number,doctor:Doctor) => Promise<void>
    deleteDoctor: (doctorId:number) => Promise<void>
}

export const doctors:Doctor[] = [
    {
        id: 1,
        firstName: 'Dr. Dre',
        lastName: 'Beatz',
        age: 50,
        email: 'beatzbydre@gmail.com',
        dateOfBirth: '1970-01-01',
        experience: 30,
        phone: '0880552211',
        gender: 'male',
        address: 'California',
        specialization: 'Music Therapy',
        status: 'Available'
    },
    {
        id: 2,
        firstName: 'Dr. Drew',
        lastName: 'TV',
        age: 60,
        email: 'drdrew@gmail.com',
        dateOfBirth: '1970-01-01',
        experience: 40,
        phone: '0880552211',
        gender: 'male',
        address: 'New York',
        specialization: 'Psychology',
        status: 'Not Available'
    },
    {
        id: 3,
        firstName: 'Dr. Phil',
        lastName: 'TV',
        age: 70,
        email: 'drdrew@gmail.com',
        dateOfBirth: '1970-01-01',
        experience: 50,
        phone: '0880552211',
        gender: 'male',
        address: 'New York',
        specialization: 'Drama',
        status: 'On Leave'
    },
]