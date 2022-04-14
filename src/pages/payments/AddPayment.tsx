import React from 'react'
import PageHeader from '../../components/PageHeader'
import PaymentsForm from '../../components/payments/PaymentsForm'

export default function AddPayment() {
  return (
    <>
    <PageHeader title='Add Payment' items={['Payments', 'Add Payment']} />
    <div className="container">
        <div className="row">
        <PaymentsForm />
        </div>
    </div>
    </>
  )
}
