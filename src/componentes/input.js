import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from './../elementos/Formularios';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular}) => {
	
	const onChange = (e) => {
			cambiarEstado({...estado, campo: e.target.value})
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				console.log('Input correcto');
			} else {
				console.log('Input incorrecto');

			}
		}

	}

	return (
        <div>
	        <Label htmlFor={name}>{label}</Label>
	            <GrupoInput>
	                <Input 
	                	type={tipo} 
	                	placeholder={placeholder} 
	                	id={name}
	                	value={estado.campo}
	                	onChange={onChange}
	                	onKeyUp={validacion}
	                	onBlur={validacion}
	                	/>
	                <IconoValidacion icon={faCheckCircle}/>
	            </GrupoInput>

	              <LeyendaError>{leyendaError}</LeyendaError>
	    </div>
		);
}

export default ComponenteInput;