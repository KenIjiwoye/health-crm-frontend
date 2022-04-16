import React from 'react'
import DoctorForm from '../../components/doctors/DoctorForm'
import PageHeader from '../../components/PageHeader'
import {useMutation} from 'react-query'
import { Doctor } from '../../interfaces/Doctors'
import DoctorsController from '../../controllers/DoctorsController'

export default function NewDoctor() {
    const mutation = useMutation((newDoctor: Doctor) => DoctorsController.addDoctor(newDoctor))
    return (
        <>
        <PageHeader title='Add Doctor' items={['Doctors', 'Add Doctor']} />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="widget-area-2 proclinic-box-shadow">
                        <h3 className="widget-title">Add Doctor</h3>
                        <DoctorForm mutation={mutation} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
