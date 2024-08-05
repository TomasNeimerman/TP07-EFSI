import React, { useState } from 'react'
import styles from '../styles/AppointmentForm.module.css'

const AppointmentForm = ({ onAddAppointment }) => {
  const [mascota, setMascota] = useState('')
  const [dueño, setDueño] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddAppointment({ mascota, dueño, fecha, hora, sintomas })
    setMascota('')
    setDueño('')
    setFecha('')
    setHora('')
    setSintomas('')
  }

  return (
    <div className={styles.formContainer}>
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota" 
          value={mascota} 
          onChange={(e) => setMascota(e.target.value)} 
          required 
        />
        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="dueño" 
          value={dueño} 
          onChange={(e) => setDueño(e.target.value)} 
          required 
        />
        <label>Fecha</label>
        <input 
          type="date" 
          name="fecha" 
          value={fecha} 
          onChange={(e) => setFecha(e.target.value)} 
          required 
        />
        <label>Hora</label>
        <input 
          type="time" 
          name="hora" 
          value={hora} 
          onChange={(e) => setHora(e.target.value)} 
          required 
        />
        <label>Sintomas</label>
        <textarea 
          name="sintomas" 
          value={sintomas} 
          onChange={(e) => setSintomas(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  )
}

export default AppointmentForm
