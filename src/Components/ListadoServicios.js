import React from 'react'
import { typeServices } from './data/typeServices'
import { Link, useNavigate } from 'react-router-dom'

export const ListadoServicios = ({limit}) => {

  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    if (id === 'convecional') {
      navigate('/servicios/convecional');
    }
  };
  return (
    <div>
    <section className='services'>
      {
        typeServices.slice(0, limit).map(service => (
          <article key={service.id} className='work-item'>
            <h2>
              <Link 
                to={`/servicios/${service.id}`} 
                onClick={() => handleServiceClick(service.id)}
              >
                {service.name}
              </Link>
            </h2>
            <br/>
            <Link 
              to={`/servicios/${service.id}`} 
              className='image-link' 
              onClick={() => handleServiceClick(service.id)}
            >
              <div className='mask'>
                <img src={`/images/${service.id}.png`} alt={service.nombre} />
              </div>
            </Link>
            <h2>
              <Link 
                to={`/servicios/${service.id}`} 
                onClick={() => handleServiceClick(service.id)}
              >
                {service.name}
              </Link>
            </h2>
            <h3>tipo: {service.type}</h3>
          </article>
        ))
      }
    </section>
  </div>
  )
}
