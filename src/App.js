import React from 'react';
import {Formulario} from './elementos/Formularios.js';

const App = () => {
  return (
        <main>
            <Formulario action="">
              <div>
            
                  <label htmlFor="">Usuario</label>
                  <input type="text" placeholder="usuario"/>
              </div>
          </Formulario>
        </main>
    );
}

export default App;