import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from './../elementos/Formularios';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const ComponenteInput = () => {
	return (
        <div>
	        <Label htmlFor="">Usuario</Label>
	            <GrupoInput>
	                <Input type="text" placeholder="usuario" id="nombre"/>
	                <IconoValidacion icon={faCheckCircle}/>
	            </GrupoInput>

	              <LeyendaError>la leyenda error del input </LeyendaError>
	    </div>

		);
}

export default ComponenteInput;