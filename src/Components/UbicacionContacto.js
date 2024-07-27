import React, { useState } from 'react'
import '../UbicacionContacto.css'; 
import { Link } from 'react-router-dom';

export const UbicacionContacto = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      apellidos: '',
      email: '',
      mensaje: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { nombre, apellidos, email, mensaje } = formData;
      const subject = encodeURIComponent('Nuevo mensaje de contacto');
      const body = encodeURIComponent(
        `Buen dia\n\n`+

        `Nombre: ${nombre}\n` +
        `Apellidos: ${apellidos}\n` +
        `Email: ${email}\n\n` +
        ` ${mensaje}`
      );
      const mailtoLink = `mailto:maquiyedar@yahoo.com.mx?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    };
  
    return (
      <div className='ubicacion-contacto'>
        <div className='contact-form'>
          <h1 className='heading'>Contacto</h1>
          <p className='contact-info'>
            <strong>¡No olvides que somos la mejor opción!</strong><br />
            <strong>Nuestro equipo está listo para atenderte y brindarte el mejor servicio.</strong>
          </p>
          <form className='contact' onSubmit={handleSubmit}>
            <input
              type='text'
              name='nombre'
              placeholder='Nombre'
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='apellidos'
              placeholder='Apellidos'
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='mensaje'
              placeholder='Motivos de contacto'
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            <input type='submit' value="Enviar" />
          </form>
        
          <Link 
            to="https://www.facebook.com/groups/189578683091175" 
            target="_blank" 
            class="facebook-button" 
            aria-label="Visita nuestro grupo de Facebook"
          >
           <div className="icon-container">
              <img src="/images/facebook.png" alt="Facebook" className="facebook-icon" />
           </div>
            
          </Link>

          <span class="button-text">Consulta nuestro Grupo de Facebook</span>

        </div>
  
        <div className='map-qr'>
          <h1 className='heading'>Ubicación</h1>
          <p className='address' >
            Estamos ubicados en: Av. Morelos 210, Huicalco, Tizayuca, C.P. 43800
          </p>
         <div className='map-container'>
            <iframe
              title="Ubicación en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.049964578148!2d-99.11873408469128!3d19.644075586527257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842ad2a2c29b70eb%3A0x1cfefb570cf46280!2sAv.%20Morelos%20210%2C%20Huicalco%2C%20Tizayuca%2C%20C.P.%2043800!5e0!3m2!1ses-419!2smx!4v1687010408750!5m2!1ses-419!2smx"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>*
          <div className='qr-container'>
            <p><strong>Puedes escanear el código QR para enviarnos un WhatsApp: </strong></p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=whatsapp://send?phone=5533176234"
              alt="QR Code para WhatsApp"
            />
          </div>
          
        </div>
            <section className='contact-info'>
            <h3>¿Por qué elegir nuestros servicios?</h3>
            <p>
            Con nuestra experiencia y equipo especializado, ofrecemos soluciones personalizadas que cumplen con los más altos estándares de calidad. Trabajamos para asegurar que cada pieza que fabricamos sea precisa y de la mejor calidad posible, ayudando a que tus proyectos sean exitosos.
            </p>
            </section>
      </div>
    );
  };