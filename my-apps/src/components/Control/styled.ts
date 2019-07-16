import React from 'react';
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 4px 6px;
  outline: none;
  border: solid;
  border-width: 2px;
  border: 2px solid palevioletred;
  border-color: palevioletred;
  font-size: 14px;
`;

export const SubmitBtn = styled.button`
  color: palevioletred;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 14px;
  padding: 4px 6px;
  outline: none;
  cursor: pointer;
`;
