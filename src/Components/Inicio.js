import React from 'react'
import { ListadoServicios } from './ListadoServicios'

export const Inicio = () => {
  return (
    <div className='home'>
       <section className="home-information">
        <h2>En Yedark, transformamos tus ideas en realidad con nuestros servicios de maquinado convencional y centros de maquinado. Con más de 20 años de experiencia, ofrecemos soluciones precisas y personalizadas para adaptar piezas metálicas a tus necesidades específicas.</h2>
      </section>

      <section className='type-services'>
        <h2>Conoce nuestros servicios</h2>
        <ListadoServicios />
      </section>
        

      <section className=''>
        <h3>¿Por qué elegir nuestros servicios?</h3>
        <p>
          Con nuestra experiencia y equipo especializado, ofrecemos soluciones personalizadas que cumplen con los más altos estándares de calidad. Trabajamos para asegurar que cada pieza que fabricamos sea precisa y de la mejor calidad posible, ayudando a que tus proyectos sean exitosos.
        </p>
      </section>
    </div>
  )
}
