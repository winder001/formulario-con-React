import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from './../elementos/Formularios';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const ComponenteInput = ({ tipo, label, placeholder, name, leyendaError}) => {
	return (
        <div>
	        <Label htmlFor={name}>{label}</Label>
	            <GrupoInput>
	                <Input type={tipo} placeholder={placeholder} id={name}/>
	                <IconoValidacion icon={faCheckCircle}/>
	            </GrupoInput>

	              <LeyendaError>{leyendaError}</LeyendaError>
	    </div>
		);
}

export default ComponenteInput;