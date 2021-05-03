import React from 'react';
import {Formulario, Label, GrupoInput, Input, LeyendaError, IconoValidacion, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
        <main>
            <Formulario action=" nombre">
              <div>
                   <Label htmlFor="">Usuario</Label>
                  <GrupoInput>
                      <Input type="text" placeholder="usuario" id="nombre"/>
                      <IconoValidacion icon={faCheckCircle}/>
                  </GrupoInput>

                  <LeyendaError>la leyenda error del input </LeyendaError>
              </div>


              <ContenedorTerminos>
                  <Label>
                      <input type="checkbox" name="terminos" id="terminos"/>
                        Acepto los Terminos y Condiciones
                  </Label>
              </ContenedorTerminos>

              <MensajeError>
                  <p>
                    <FontAwesomeIcon icon= {faExclamationTriangle}/>
                    <b> Error: </b> Por favor rellene el formulario correctamente.
                  </p> 
              </MensajeError>

              <ContenedorBotonCentrado> 
                  <Boton type="submit"> Enviar </Boton>
                  <MensajeExito>Formulario se envio Exitosamente!</MensajeExito>
              </ContenedorBotonCentrado>


          </Formulario>
        </main>
    );
}

export default App;