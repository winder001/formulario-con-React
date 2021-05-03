import React from 'react';
import {Formulario, Label, GrupoInput, Input, LeyendaError, IconoValidacion} from './elementos/Formularios.js';
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

              <div>
                  <Label>
                      <input type="checkbox" name="terminos" id="terminos"/>
                        Acepto los Terminos y Condiciones
                  </Label>
              </div>

              <div>
                  <p>
                    <FontAwesomeIcon icon= {faExclamationTriangle}/>
                    <b> Error: </b> Por favor rellene el formulario correctamente.
                  </p> 
              </div>
          </Formulario>
        </main>
    );
}

export default App;