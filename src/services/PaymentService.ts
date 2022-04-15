import { Payment, payments } from "../interfaces/Payments";



class PaymentService {

    createPayment = async (payment:Payment) => {
        payments.push(payment);
        return payment;
    }

    getAllPayments = async () => {
        return payments;
    }
    
    getSinglePayment = async (paymentId:number) => {
        //  return doctors.filter((d) => d.id === doctorId)
        return;
    }
    
    updatePayment = async (paymentId:Partial<Payment>) => {}
    
    deletePayment = async (paymentId:number) => {}
}
export default new PaymentService();
