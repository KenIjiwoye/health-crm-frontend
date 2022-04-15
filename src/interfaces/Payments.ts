
export interface Payment {
    id: number;
    patientId: number;
    patientName: string;
    department: string;
    doctorName: string;
    admissionDate: string;
    dischargeDate: string;
    services: PaymentService[];
    payment: PaymentModel;
    status: string;
    paidInFullDate: string;
}

export type PaymentService = {
    id: number;
    serviceName: string;
    cost: number;
}

export interface PaymentModel {
    discount: number;
    advancePayment: number;
    paymentType: string;
    paymentDetails: string;
    amount: number;

}

export interface PaymentsControllerInterface {
    addPayment: (payment:Payment) => Promise<Payment>
    getPayments: () => Promise<Payment[]>
    getPayment: (paymentId:number) => Promise<void>
    updatePayment: (paymentId:number,payment:Payment) => Promise<void>
    deletePayment: (paymentId:number) => Promise<void>
}

export const payments: Payment[] = [
    {
        id: 1,
        patientId: 1,
        patientName: 'Jasper Kumeh',
        department: 'Ortho',
        doctorName: 'Dr. Dre',
        admissionDate: '2022-04-01',
        dischargeDate: '2022-04-05',
        services: [
            {
                id: 1,
                serviceName: 'X-ray',
                cost: 25
            },
            {
                id: 2,
                serviceName: 'Malaria test',
                cost: 20
            },
        ],
        payment: {
            discount: 0,
            advancePayment: 0,
            paymentType: 'Cash',
            paymentDetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur id illo incidunt, iste libero quisquam? A aut cumque fuga fugit iusto libero officia optio quasi, quisquam saepe voluptate voluptatibus voluptatum.',
            amount: 45
        },
        status: 'Pending',
        paidInFullDate: '2022-04-05'
    },
    {
        id: 2,
        patientId: 1,
        patientName: 'Daniel Kumeh',
        department: 'Ortho',
        doctorName: 'Dr. Dre',
        admissionDate: '2022-04-05',
        dischargeDate: '2022-04-10',
        services: [
            {
                id: 1,
                serviceName: 'Malaria Test',
                cost: 20
            }
        ],
        payment: {
            discount: 0,
            advancePayment: 0,
            paymentType: 'Cash',
            paymentDetails: 'none',
            amount: 20
        },
        status: 'Completed',
        paidInFullDate: '2022-04-10'
    },
]