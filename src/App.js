import React from 'react';
import {Formulario, Label, GrupoInput, Input, LeyendaError, IconoValidacion} from './elementos/Formularios.js';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
        <main>
            <Formulario action="">
              <div>
            
                   <Label htmlFor="">Usuario</Label>
                  <GrupoInput>
                      <Input type="text" placeholder="usuario"/>
                      <IconoValidacion icon={faCheckCircle}/>
                  </GrupoInput>

                  <LeyendaError>la leyenda error del input </LeyendaError>
              
              </div>
          </Formulario>
        </main>
    );
}

export default App;