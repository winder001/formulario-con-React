import React from 'react';
import {Formulario, Label, GrupoInput, Input, LeyendaError, IconoValidacion} from './elementos/Formularios.js';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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
          </Formulario>
        </main>
    );
}

export default App;