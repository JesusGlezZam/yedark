import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { HeaderNav } from './HeaderNav'
import { Inicio } from '../Components/Inicio'
import { Servicios } from '../Components/Servicios'
import { UbicacionContacto } from '../Components/UbicacionContacto'
import { QuienesSomos } from '../Components/QuienesSomos'
import { ListadoProductos } from '../Components/Helper/ListadoProductos';


export const YedarkRutas = () => {
  return (
   <BrowserRouter>
         {/**Header y navegacion */}
         <HeaderNav />

          {/**Contenido central */}
        <section className='content'>
          <Routes>
              {/**Poner una ruta inicial cuando cargue la pagina   <Route path="/" element={<Inicio/>} /> */}
              <Route path="/" element={<Navigate to='/inicio'/>} />
              <Route path="/inicio" element={<Inicio/>} />
              <Route path="/quienes-somos" element={<QuienesSomos/>} />
              <Route path="/servicios" element={<Servicios/>} />
              <Route path="/contacto" element={<UbicacionContacto/>} />



               {/**ruta con parametro dentro de la url 
                 <Route path="/proyecto/:id" element={<Proyecto/>} />
               */}
               <Route path="/servicios/convencional" element={<ListadoProductos type="convencional" />} />
               <Route path="/servicios/control-numerico" element={<ListadoProductos type="controlNumerico" />} />
              
             
          </Routes>
        </section>

   </BrowserRouter>
  )
}
