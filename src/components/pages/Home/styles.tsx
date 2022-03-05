import styled from "styled-components";

export const Container = styled.main`
  max-width: 496px;
  padding: 2rem 3rem 2rem 3rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;

  h1 {
    text-align: center;
    font-weight: 400;
    color: white;
    margin-bottom: 2rem;
    text-shadow: 2px 1px gray;
  }

  .nav {
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;

    button {
      display: flex;
      padding: 2px;
      border: none;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
      transition-duration: 0.4s;

      img {
        filter: invert(1);
      }
    }

    button:hover {
      background-color: white;
      opacity: 0.8;
      transform: scale(1.1);
      img {
        filter: invert(0);
      }
    }
  }
`;
