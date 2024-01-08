import React from 'react';
import styled from '@emotion/styled';

interface NumberUnderBarProps {
  width?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export function TextUnderBar(props: NumberUnderBarProps) {
  const { value, onChange, width, disabled } = props;
  return (
    <UnderBar
      width={width}
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

const UnderBar = styled.input`
  text-align: center;
  border: none;
  border-bottom: 0.08rem solid gray;
  font-size: 1.6rem;
  width: ${({ width }) => (width ? width : '8rem')};
  height: 2rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
