import styled, { css } from "styled-components";

export const Container = styled.div<{ isRow: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isRow }) =>
    isRow &&
    css`
      align-items: center;
      column-gap: 1rem;
      flex-direction: row;
    `}
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 4px 8px;
  border-radius: 4px;
  outline: none;
  outline: none;
`;

export const Error = styled.div`
  color: red;
  height: 1rem;
  margin-bottom: 0.25rem;
`;
