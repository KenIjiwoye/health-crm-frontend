import { Payment, PaymentsControllerInterface } from "../interfaces/Payments";
import PaymentService from "../services/PaymentService";


class PaymentsController {

    ps = PaymentService;

    addPayment: PaymentsControllerInterface["addPayment"] = async (payment:Payment) => {
        let res = await this.ps.createPayment(payment)
        return res;
    }

    getPayments: PaymentsControllerInterface["getPayments"] = async () => {
        let res = await this.ps.getAllPayments();
        return res;
    }
    
    getPayment: PaymentsControllerInterface["getPayment"] = async (paymentId:number) => {
        let res = await this.ps.getSinglePayment(paymentId);
        return res;
    }
    
    updatePayment: PaymentsControllerInterface["updatePayment"] = async (paymentId:number) => {}
    
    deletePayment: PaymentsControllerInterface["deletePayment"] = async (paymentId:number) => {}

}

export default new PaymentsController();