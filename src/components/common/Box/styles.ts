import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;

  .image {
    margin-top: 1rem;

    img {
      @media (max-width: 768px) {
        max-height: 250px;
        max-width: 250px;
      }
      @media (min-width: 768px) {
        height: 370px;
        width: 400px;
      }
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    text-align: left;

    .value {
      span + span {
        margin-left: 0.5rem;
      }
      span {
        padding: 4px;
        border-radius: 4px;

        background-color: yellow;

        color: black;
        font-weight: bold;
      }
    }
  }
`;

export const NotFound = styled.div`
  width: 100%;
  color: gray;

  h2 {
    text-align: center;
    color: rgba(255, 255, 44, 0.5);
  }

  p {
    margin-top: 1rem;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    max-height: 250px;
    max-width: 250px;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 417px;
  }
`;
