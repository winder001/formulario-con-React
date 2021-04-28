import styled from 'styled-components';


const Formulario = styled.form` 
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label` 
	display: block;
	font-weigth:700;
	padding: 10px;
	min-heigth: 40px;
	cursor: pointer;

`;

export {Formulario, Label};
