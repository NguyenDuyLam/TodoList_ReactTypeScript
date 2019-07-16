import styled from "styled-components";

export const Item = styled.li`
  width:30%;
  padding: 1rem;
  background-color: papayawhip;
  border-radius: 2px;
  color: palevioletred;
  cursor: pointer;
  animation: listComming 200ms ease;
  transition: 200ms ease;
  margin: 0 0 1% 32%;

  &:hover {
    background-color: tomato;
  }

  @keyframes listComming {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
