import styled from "styled-components";

export const Container = styled.div`
  label {
    display: flex;
    flex-direction: column;
  }

  input {
    all: unset;
    width: 100%;
    font-size: 18px;

    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #6c71c4;

    cursor: auto;
  }

  img {
    filter: invert(1);
  }

  .input-content {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 2px;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    transform: scale(1.3);
  }
`;
