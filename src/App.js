import React from 'react';
import {Formulario, Label, GrupoInput, Input, colores} from './elementos/Formularios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
        <main>
            <Formulario action="">
              <div>
            
                   <Label htmlFor="">Usuario</Label>
                  <GrupoInput>
                    <Input type="text" placeholder="usuario"/>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                  </GrupoInput>
              
              </div>
          </Formulario>
        </main>
    );
}

export default App;