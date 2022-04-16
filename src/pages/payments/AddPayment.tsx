import React from 'react'
import PageHeader from '../../components/PageHeader'
import PaymentsForm from '../../components/payments/PaymentsForm'
import {useMutation} from 'react-query'
import { Payment } from '../../interfaces/Payments'
import PaymentsController from '../../controllers/PaymentsController'

export default function AddPayment() {
  const mutation = useMutation((newPayment: Payment) => PaymentsController.addPayment(newPayment))
  return (
    <>
    <PageHeader title='Add Payment' items={['Payments', 'Add Payment']} />
    <div className="container">
        <div className="row">
        <PaymentsForm mutation={mutation} />
        </div>
    </div>
    </>
  )
}
