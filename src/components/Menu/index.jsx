import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MenuHamburguer from '../MenuHamburguer';
import { Container, Nav, ListItems, Item } from './styles';

const defaultColors = {
	primary: '#d3d3d3',
	secondary: '#282C37',
	third: '#18B0CC'
};

const defaultRoutes = [
	{
		path: '/',
		label: 'Home'
	},
];

function Menu({ colors = defaultColors, routes = defaultRoutes, imageBrandIcon = false }) {
	const history = useHistory();

	const url = window.location.pathname;
	const [ menuIsActive, setMenuIsActive ] = useState(false);
	const [ routeActive, setRouteActive ] = useState('');

	history.listen((location, action) => {
		setRouteActive(location.pathname);
	});

	useEffect(() => {
		setRouteActive(url);
	}, []);

	return (
		<Container colors={colors}>
			<Nav colors={colors} imageBrandIcon={imageBrandIcon}>
				{imageBrandIcon && (
					<Link to="/">
						<img src={imageBrandIcon} alt="Logotipo" />
					</Link>
				)}
				<ListItems colors={colors} menuIsActive={menuIsActive}>
					{routes.map(({ path, label }, indice) => (
						<Item key={indice} colors={colors} className={path === routeActive ? 'active' : ''}>
							<Link to={path}>{label}</Link>
						</Item>
					))}
				</ListItems>
				<MenuHamburguer colors={colors} menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
			</Nav>
		</Container>
	);
}

export default Menu;
