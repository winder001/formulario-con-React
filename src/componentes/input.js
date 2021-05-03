import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from './../elementos/Formularios';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const ComponenteInput = ({label, placeholder}) => {
	return (
        <div>
	        <Label htmlFor="">{label}</Label>
	            <GrupoInput>
	                <Input type="text" placeholder={placeholder} id="nombre"/>
	                <IconoValidacion icon={faCheckCircle}/>
	            </GrupoInput>

	              <LeyendaError>la leyenda error del input </LeyendaError>
	    </div>
		);
}

export default ComponenteInput;