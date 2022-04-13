
export interface Appointment {
    id: number;
    patientId: number;
    doctorName: string;
    problem: string;
    status: string;
    department: string;
    appointmentDate: string;
    appointmentTime: string;

}

export const appointments:Appointment[] = [
    {
        id: 1,
        patientId: 1,
        doctorName: 'Dr. Dre',
        problem: 'Tone Deaf',
        status: 'pending',
        department: 'Music',
        appointmentDate: '2022-04-10',
        appointmentTime: '1PM-2PM'
    },
    {
        id: 2,
        patientId: 2,
        doctorName: 'Dr. Phil',
        problem: 'Feeling Depressed',
        status: 'Active',
        department: 'Psych',
        appointmentDate: '2022-04-10',
        appointmentTime: '2PM-3PM'
    },
]