import React, { useState } from 'react';
import { servicioConvencional } from '../data/Convencional';
import { controlNumerico } from '../data/ControlNumerico'; 
import '../../Products.css'; 
import { Link } from 'react-router-dom';
import Modal from '../Modal';

const renderSpecs = (specs) => {
  return (
    <ul>
      {Object.entries(specs).map(([key, value], idx) => (
        <li key={idx}>
          {key}: {typeof value === 'object' ? Object.entries(value).map(([subKey, subValue]) => `${subKey}: ${subValue}`).join(', ') : value}
        </li>
      ))}
    </ul>
  );
};

export const ListadoProductos = ({ type }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Elegir los datos basados en el tipo pasado como prop
  const data = type === 'convencional' ? servicioConvencional : controlNumerico;
  const dataId = type === 'convencional' ? 'convencional' : 'control-numerico';

  // Verifica si data es una matriz y tiene al menos un elemento
  const header = data.length > 0 ? `${data[0].name} ${data[0].type}` : 'Servicios de Maquinado';

  const handleMoreInfoClick = (machine) => {
    setModalContent(
      <>
        <h2>Máquina: {machine.name}</h2>
        <h3>Especificaciones:</h3>
        {renderSpecs(machine.specs)}
        <h3>Descripción: {machine.description}</h3>
        {machine.products && (
          <div>
            <h3>Productos:</h3>
            <ul>
              {machine.products.map((product, idx) => (
                <li key={idx}>{product}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
    setModalImage(`/images/${dataId}/${machine.name.replace(/\s+/g, '-').toLowerCase()}.png`);
    setShowModal(true);
  };

  return (
    <div>
      <header className='page-header'>
        <h1>{header}</h1>
        <Link to="/servicios" className='back-link'>
          Volver a Servicios
        </Link>
      </header>

      <section className='services'>
        {
          data[0].machinery.map((machine, index) => (
            <article key={index} className='work-item'>
              <h2>Máquina: {machine.name}</h2>
              <div className='mask'>
                <img src={`/images/${dataId}/${machine.name.replace(/\s+/g, '-').toLowerCase()}.png`} alt={machine.name} onClick={() => handleMoreInfoClick(machine)}/>
              </div>
              <h3>Descripción: {machine.description}</h3>
              <button  className='more-information' onClick={() => handleMoreInfoClick(machine)}>Más información</button>
            </article>
          ))
        }
      </section>

      <div className='page-return'>
        <Link to="/servicios" className='back-link'>
          Volver a Servicios
        </Link>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} imageUrl={modalImage}>
        {modalContent}
      </Modal>
    </div>
  );
};

/**
 * 
 *  {machine.products && (
                <div>
                  <h3>Productos:</h3>
                  <ul>
                    {machine.products.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                </div>
              )}

               <img src={`/images/${machine.name}.png`} alt={machine.nombre} />
 */