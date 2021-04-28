import styled from 'styled-components';


const Formulario = styled.form` 
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

export {Formulario};
