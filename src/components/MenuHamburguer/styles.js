import styled from 'styled-components';

export const Container = styled.div`
	cursor: pointer;
	width: 28px;
	height: auto;
  margin: 8px 16px;

	div {
		height: 2px;
		width: 100%;
		background: ${(props) => props.colors.primary};
    transition: all 0.5s ease;
    transform-origin: 35%;

    &:nth-child(1) {
      transform: ${(props) => props.menuIsActive ? 'rotate(45deg);' : 'rotate(0deg);'};
    }

    &:nth-child(3) {
      transform: ${(props) => props.menuIsActive ? 'rotate(-45deg);' : 'rotate(0deg);'};
    }

    &:nth-child(2) {
      display: ${(props) => props.menuIsActive ? 'none' : 'block'};
    }

		&:not(:last-child) {
			margin-bottom: 4px;
		}
	}
`;
