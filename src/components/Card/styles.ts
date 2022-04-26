import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 5px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    max-height: 250px;
  }

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;
  flex-grow: 1;
  strong {
    font-size: 1.2rem;

    width: 250px;
    height: 25px;

    overflow: hidden;
    text-overflow: ellipsis;

    text-align: center;
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

  gap: 10px;
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
