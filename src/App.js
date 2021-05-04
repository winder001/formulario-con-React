import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/input';

const App = () => {

    const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
    const [nombre, cambiarNombre]   = useState({campo: '', valido: null});

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,20}$/, //letras, numeros, guion y guion bajos.
        nombre: /^[a-zA-zÁ-ÿ\s]{4,40}/, //letras y espacios pueden llevar acentos
    }

  return (
        <main>
            <Formulario action="">
             <Input
                estado= {usuario}
                cambiarEstado={cambiarUsuario}
                tipo="text"
                label="Usuario"
                placeholder="juan123"
                name="usuario"
                leyendaError=" el usuario tiene que ser de 4 a 20 digitos y solo puede contener letras, numero, guion y guion bajo. "
                expresionRegular={expresiones.usuario}
             />

             <Input
                estado= {nombre}
                cambiarEstado={cambiarNombre}
                tipo="text"
                label="Nombre"
                placeholder="juan carlos"
                name="usuario"
                leyendaError=" el nombre solo puede contener letras y espacios, y minomo 4 letras en adelante"
                expresionRegular={expresiones.nombre}
             />

              <ContenedorTerminos>
                  <Label>
                      <input type="checkbox" name="terminos" id="terminos"/>
                        Acepto los Terminos y Condiciones
                  </Label>
              </ContenedorTerminos>

             {false && <MensajeError>
                  <p>
                    <FontAwesomeIcon icon= {faExclamationTriangle}/>
                    <b> Error: </b> Por favor rellene el formulario correctamente.
                  </p> 
              </MensajeError>}

              <ContenedorBotonCentrado> 
                  <Boton type="submit"> Enviar </Boton>
                  <MensajeExito>Formulario se envio Exitosamente!</MensajeExito>
              </ContenedorBotonCentrado>


          </Formulario>
        </main>
    );
}

export default App;