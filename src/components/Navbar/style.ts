import styled from 'styled-components'


export const CNavbar = styled.nav`
	padding: 2rem 4rem;

	background: var(--grey);

	section{
		margin: auto;
		

		display: flex;
		align-items: center;
		justify-content: space-between;

		img{
			width: 3rem;
		}

		button{
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 2rem;
			
			span{
				background-color: red;
				padding: 0.3rem 1rem;
				border-radius: 50%;

				color: var(--white);

				margin-left: 1rem;
			}
		}
	}


`