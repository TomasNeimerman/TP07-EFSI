import styles from '../styles/AppointmentItem.module.css'
const AppointmentItem = ({ index, appointment, deleteAppointment }) => {
  return (
    <div className={styles.appointmentItem}>
      <p><strong>Mascota:</strong> {appointment.mascota}</p>
      <p><strong>Dueño:</strong> {appointment.dueño}</p>
      <p><strong>Fecha:</strong> {appointment.fecha}</p>
      <p><strong>Hora:</strong> {appointment.hora}</p>
      <p><strong>Síntomas:</strong> {appointment.sintomas}</p>
      <div >
      <button  onClick={() => deleteAppointment(index)} className={styles.btnDelete}>Eliminar</button></div>
    </div>
  )
}

export default AppointmentItem
