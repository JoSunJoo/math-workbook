import React from 'react';
import styled from '@emotion/styled';

interface NumberUnderBarProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export function NumberUnderBar(props: NumberUnderBarProps) {
  const { value, onChange, disabled } = props;
  return (
    <UnderBar
      type="number"
      inputMode="numeric"
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
  font-size: 1.2rem;
  width: 3rem;
  height: 2rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
