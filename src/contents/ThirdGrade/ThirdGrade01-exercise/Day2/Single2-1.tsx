import { useEffect } from 'react';

import Styled from '../../style';
import Matrix from '../../utils/Matrix';

import type { Data21QuizProps2 as DataProps } from '../../Type/Type1';

const Single21 = (props: DataProps) => {
  const {
    id,
    id2,
    quiz1,
    quiz2,
    inputValue,
    inputValue2,
    toggle,
    setToggle,
    setInputValue,
    setInputValue2,
  } = props;

  const placeHolder = ['', '7', '0', '0', '', '', '6', '0', '', '', '1', '6'];
  const handleInput2 = (e: string) => {
    const value = inputValue2;
    value[id2] = e;
    setInputValue2(value);
    setToggle(!toggle);
  };
  // useEffect(() => {
  //   setToggle(data => data);
  //   setInputValue(data => data);
  //   console.log('인식!');
  // }, [toggle, inputValue]);

  return (
    <Styled.SingleWrapper>
      <Styled.ColGapBox gap={0}>
        {id === '①' ? (
          <Matrix
            id={id2}
            placeHolder={placeHolder}
            inputValue={inputValue}
            setInputValue={setInputValue}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <Matrix
            id={id2}
            placeHolder={[]}
            inputValue={inputValue}
            setInputValue={setInputValue}
            toggle={toggle}
            setToggle={setToggle}
          />
        )}
        <Styled.InputWrapper2>
          <div>{id}</div>
          <div>{quiz1}</div>
          <div>+</div>
          <div>{quiz2}</div>
          <div>=</div>
          <Styled.InputBox2
            onChange={e => handleInput2(e.target.value)}
          ></Styled.InputBox2>
        </Styled.InputWrapper2>
      </Styled.ColGapBox>
    </Styled.SingleWrapper>
  );
};

export default Single21;
