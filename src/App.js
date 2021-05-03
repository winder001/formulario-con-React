import React from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/input';

const App = () => {
  return (
        <main>
            <Formulario action=" nombre">
             <Input
                tipo="text"
                label="usuario"
                placeholder="juan123"

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