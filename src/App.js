import React from 'react';
import {Formulario, Label} from './elementos/Formularios.js';

const App = () => {
  return (
        <main>
            <Formulario action="">
              <div>
            
                  <Label htmlFor="">Usuario</Label>
                  <input type="text" placeholder="usuario"/>
              </div>
          </Formulario>
        </main>
    );
}

export default App;