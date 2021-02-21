import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	:root{
		--grey: #232126;
		--black: black;
		--light-grey: #EBEFF1;
		--white: white;

		font-family: 'Arvo', serif;
		font-size: 10px;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}


	h1 {
		font-size: 5.5rem;
		line-height: 6rem;
		font-family: "Arvo", serif;
	}

	h2 {
		font-family: "Arvo", serif;
		font-size: 3.6rem;
		line-height: 3.9rem;
	}

	h3 {
		font-family: "Arvo", serif;
		font-size: 2rem;
		line-height: 2.2rem;
	}

	p {
		font-family: "Lexend Mega", serif;
		font-size: 1.6rem;
		line-height: 2rem;
	}

	button {
  min-width: 12.5rem;
  height: 4rem;

  background: var(--light-grey);
  border: none;
  border-radius: 1rem;
  box-shadow: none;

  font-family: "Arvo", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.2rem;

  &:hover {
    cursor: pointer;
    background: #B9BBBD;
    transition: background ease-in 0.2s;
  }
}


`