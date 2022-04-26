import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 25px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  gap: 30px;

  margin-top: 20px;

  button {
    width: 120px;
    height: 40px;

    background: var(--red-400);

    color: var(--white);

    border-radius: 4px;

    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
