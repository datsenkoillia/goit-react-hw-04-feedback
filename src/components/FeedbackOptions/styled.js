import styled from 'styled-components';

export const ButtonList = styled.div`
  display: flex;
  gap: 15px;
  justify-content: left;
  margin-bottom: 20px;
  padding-left: 15px;
`;

export const Button = styled.button`
  font-weight: 600;
  text-transform: capitalize;
  height: 24px;
  border-radius: 4px;
  padding: 0 15px;
  transition: 300ms;
  border: none;
  background-color: rgb(173, 173, 173);
  cursor: pointer;
  &:hover,
  &:focus {
    color: palevioletred;
    background-color: #ff0;
  }
`;
