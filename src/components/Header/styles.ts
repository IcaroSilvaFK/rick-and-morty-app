import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 20px 50px;

  nav {
    display: flex;
    align-items: flex-end;
    ul {
      display: flex;
      align-items: flex-end;

      gap: 20px;
    }
  }
`;
