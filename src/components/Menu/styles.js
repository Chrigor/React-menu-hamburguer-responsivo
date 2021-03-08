import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;

	background: ${(props) => props.colors.secondary};

	height: 8vh;
	width: 100%;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

  height: 8vh;
	width: 100%;
	max-width: 1200px;

  padding: 8px;

	img {
		margin: 0px 8px;
		width: 1.6em;
		height: 1.6em;
	}

	* {
		color: ${(props) => props.colors.primary};
	}

  &::before {
    content:'';
    display:${(props) => props.imageBrandIcon ? 'none' : 'block'};
  }

	.icon-menu-hamburguer {
		display: none;
	}

	@media (max-width: 800px) {
		.icon-menu-hamburguer {
			display: block;
		}
	}
`;

export const ListItems = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;

  transition: transform 0.5s ease;

	@media (max-width: 800px) {
    transform: ${(props) => props.menuIsActive ? 'translateX(0%);' : 'translateX(100%);'};
		position: fixed;
		top: calc(8vh);
		right: 0;

		flex-direction: column;
		justify-content: flex-start;
		height: 100vh;
    padding: 0.2rem 2rem;
		background: ${(props) => props.colors.secondary};
	}
`;

export const Item = styled.li`
	font-size: 1.2rem;

	padding: 0.5rem;
	margin: 8px;

	border-bottom: 2px solid transparent;
	transition: border 0.3s ease-in;

	&:hover,
	&.active {
		border-bottom: 2px solid ${(props) => props.colors.third};
	}
`;
