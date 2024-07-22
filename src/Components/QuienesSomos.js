import React from 'react'
import '../Quienessomos.css'; 

export const QuienesSomos = () => {
  return (
    <div className="quienes-somos">
      <header className="header-seccion">
        <h1>¿Quiénes Somos?</h1>
        <p>
          Yedark es una empresa con 20 años de experiencia en el sector, especializada en ofrecer soluciones integrales para procesos de maquinado y soldadura. Nos enorgullece brindar soporte experto y personalizado para satisfacer las necesidades específicas de su empresa o negocio. Estamos aquí para ayudarle a optimizar sus procesos y garantizar resultados excepcionales.
        </p>
      </header>

      <section className="ofrecemos">
        <h2>¿Qué ofrecemos?</h2>
        <div className="servicios-contenido">
          <div className="servicio-item">
            <h3>Transformación de Piezas Metálicas</h3>
            <p>Desde ajustes menores hasta modificaciones complejas, garantizamos que cada pieza cumpla con los estándares más altos.</p>
          </div>
          <div className="servicio-item">
            <h3>Máquinas Especializadas</h3>
            <p>Utilizamos una variedad de tornos y fresadoras para trabajar con diferentes tamaños y especificaciones.</p>
          </div>
          <div className="servicio-item">
            <h3>Atención Personalizada</h3>
            <p>Nuestro equipo de expertos está aquí para entender tus requerimientos y ofrecer soluciones que optimicen tus procesos y resultados.</p>
          </div>
        </div>
      </section>

      <section className="beneficios">
        <h2>Beneficios Clave:</h2>
        <div className="beneficios-contenido">
          <div className="beneficio-item">
            <h3>Precisión y Calidad</h3>
            <p>Cada pieza es fabricada con precisión milimétrica para asegurar un rendimiento excepcional.</p>
          </div>
          <div className="beneficio-item">
            <h3>Experiencia y Profesionalismo</h3>
            <p>Con décadas de experiencia, sabemos cómo entregar resultados que superen tus expectativas.</p>
          </div>
          <div className="beneficio-item">
            <h3>Soluciones Adaptadas a Ti</h3>
            <p>Trabajamos estrechamente contigo para entender y satisfacer tus necesidades específicas.</p>
          </div>
        </div>
      </section>

      <section className="contacto">
        <p>Descubre cómo nuestros servicios pueden llevar tus proyectos al siguiente nivel. ¡Contáctanos hoy y hablemos sobre cómo podemos ayudarte!</p>
      </section>
    </div>
  );
}
