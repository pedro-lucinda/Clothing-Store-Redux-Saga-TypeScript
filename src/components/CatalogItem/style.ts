import styled from "styled-components";

export const CItem = styled.article`
  width: 30rem;
  height: 40rem;

  padding: 1rem;
  margin: 1rem;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;

    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
  }



  span{
  background-color: #fff;
  padding: 1rem;

    color: red;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: "Lexend Mega", serif;

    position: relative;
    bottom: 15rem;
  }
  
`;
