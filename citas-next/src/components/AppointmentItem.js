import styles from '../styles/AppointmentItem.module.css'
const AppointmentItem = ({ index, appointment, deleteAppointment }) => {
  return (
    <div className="appointment-item">
      <p><strong>Mascota:</strong> {appointment.mascota}</p>
      <p><strong>Dueño:</strong> {appointment.dueño}</p>
      <p><strong>Fecha:</strong> {appointment.fecha}</p>
      <p><strong>Hora:</strong> {appointment.hora}</p>
      <p><strong>Síntomas:</strong> {appointment.sintomas}</p>
      <button onClick={() => deleteAppointment(index)} className="btn-delete">Eliminar</button>
    </div>
  )
}

export default AppointmentItem
