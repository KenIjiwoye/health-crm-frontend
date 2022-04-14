
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
}

interface PaymentService {
    id: number;
    serviceName: string;
    cost: number;
}

interface PaymentModel {
    discount: number;
    advancePayment: number;
    paymentType: string;
    paymentDetails: string;

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
            }
        ],
        payment: {
            discount: 0,
            advancePayment: 0,
            paymentType: 'Cash',
            paymentDetails: 'none'
        },
        status: 'Pending'
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
            paymentDetails: 'none'
        },
        status: 'Completed'
    },
]