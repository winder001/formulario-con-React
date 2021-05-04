import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/input';

const App = () => {

    const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [password, cambiarPassword] = useState({campo: '', valido: null});
    const [password2, cambiarPassword2] = useState({campo: '', valido: null});
    const [correo, cambiarCorreo] = useState({campo: '', valido: null});
    const [telefono, cambiarTelefono] = useState({campo: '', valido: null});

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,20}$/, //letras, numeros, guion y guion bajos.
        nombre: /^[a-zA-zÁ-ÿ\s]{1,40}$/, //letras y espacios pueden llevar acentos
        password: /^.{4,20}$/, //4 a 12 digitos
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
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
                leyendaError=" el nombre solo puede contener letras y espacio."
                expresionRegular={expresiones.nombre}
             />

             <Input
                estado= {password}
                cambiarEstado={cambiarPassword}
                tipo="password"
                label="Contraseña"
                name="password1"
                leyendaError=" La Contrasseña tiene que de 4 a 20 digitos"
                expresionRegular={expresiones.password}
             />

             <Input
                estado= {password2}
                cambiarEstado={cambiarPassword2}
                tipo="password"
                label="Repetir Contraseña"
                name="password2"
                leyendaError="Ambas contraseñas deben ser iguales"
             />

             <Input
                estado= {correo}
                cambiarEstado={cambiarCorreo}
                tipo="email"
                label="Correo Electronoco"
                placeholder="correo@correo.com"
                name="correo"
                leyendaError="El correo solo debe contener letras, numeros,punto,guion y guion bajo."
                expresionRegular={expresiones.correo}
             />

             <Input
                estado= {telefono}
                cambiarEstado={cambiarTelefono}
                tipo="text"
                label="Telefono"
                placeholder="2234543436"
                name="telefono"
                leyendaError="El telefono solo debe contener numeros y maximo 14 digitos."
                expresionRegular={expresiones.telefono}
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