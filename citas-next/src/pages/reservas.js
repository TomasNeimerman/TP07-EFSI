import { useState } from 'react'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentList from '../components/AppointmentList'
import styles from '../styles/Reservas.module.css'

const Reservas = () => {
  const [appointments, setAppointments] = useState([])

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment])
  }

  const deleteAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index))
  }

  return (

      <div className={styles.container}>
        <h1>Reservar Cita</h1>
        <AppointmentForm onAddAppointment={addAppointment} />
        <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} />
      </div>
  )
}

export default Reservas
