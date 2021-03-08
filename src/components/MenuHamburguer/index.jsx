import React from 'react';

import { Container } from './styles';

function MenuHamburguer({ colors, menuIsActive, setMenuIsActive }) {
	return (
		<Container
			className="icon-menu-hamburguer"
			colors={colors}
			menuIsActive={menuIsActive}
			onClick={() => setMenuIsActive(!menuIsActive)}
		>
			<div />
			<div />
			<div />
		</Container>
	);
}

export default MenuHamburguer;
