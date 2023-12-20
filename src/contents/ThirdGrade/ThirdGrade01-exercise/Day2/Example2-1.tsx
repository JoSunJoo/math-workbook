import { useState } from 'react';

import Styled from '../../style';
import Matrix from '../../utils/Matrix';
const Example21 = () => {
  const placeHolder = ['', '5', '0', '0', '', '1', '3', '0', '', '', '1', '5'];
  const [toggle, setToggle] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(8), () => new Array(12))
  );
  return (
    <Styled.ExampleBox3>
      <Styled.RowBox>
        <Styled.ColGapBox gap={0}>
          <Matrix
            id={0}
            placeHolder={placeHolder}
            inputValue={inputValue}
            setInputValue={setInputValue}
            toggle={toggle}
            setToggle={setToggle}
          />
          <Styled.InputWrapper2>
            <div>468</div>
            <div>+</div>
            <div>645</div>
            <div>=</div>
            <Styled.InputBox2 placeholder="645"></Styled.InputBox2>
          </Styled.InputWrapper2>
        </Styled.ColGapBox>
        <Styled.ColGapBox gap={0.2}>
          <Styled.RedFont1>(400 + 100 = 500)</Styled.RedFont1>
          <Styled.RedFont1>(60 + 70 = 130)</Styled.RedFont1>
          <Styled.RedFont1>(8 + 7 = 15)</Styled.RedFont1>
        </Styled.ColGapBox>
      </Styled.RowBox>
    </Styled.ExampleBox3>
  );
};

export default Example21;
