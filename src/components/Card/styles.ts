import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  strong {
    font-size: 1.2rem;
  }
  .container__status {
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 0 30px;
  }
`;

export const Alive = styled.div`
  background: var(--green-300);

  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px 10px;
  border-radius: 10px;
  gap: 5px;
`;
export const Dead = styled.div`
  background: var(--red-300);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px 10px;
  border-radius: 10px;
  gap: 5px;
`;

export const Unknown = styled.div`
  background: var(--yellow-400);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px 10px;
  border-radius: 10px;
  gap: 5px;
`;

export const ContainerSpecies = styled.span`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const Button = styled.button`
  width: 100%;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  padding: 10px;

  font-size: 1rem;

  margin-top: 10px;

  background: var(--teal-300);

  color: var(--white);
`;
