import AppointmentItem from './AppointmentItem'

const AppointmentList = ({ appointments, deleteAppointment }) => {
  return (
    <div>
      <h2>Listado de Citas</h2>
      {appointments.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        appointments.map((appointment, index) => (
          <AppointmentItem
            key={index}
            index={index}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
          />
        ))
      )}
    </div>
  )
}

export default AppointmentList
