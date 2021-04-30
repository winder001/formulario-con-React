import styled from 'styled-components';

const colores = {
	border: "#0075ff"
}


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

const GrupoInput = styled.div` 
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 4px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3 solid transparent;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.border};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	
`;

export {Formulario, Label, GrupoInput, Input, colores}
