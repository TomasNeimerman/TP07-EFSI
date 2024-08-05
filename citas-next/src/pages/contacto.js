import { useState } from 'react'

import styles from '../styles/Contacto.module.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes manejar el envío del formulario
    alert('Formulario enviado')
  }

  return (

      <div className={styles.container}>
        <h1>Contacto</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className={styles.buttonSubmit}>Enviar</button>
        </form>
      </div>

  )
}

export default Contacto
