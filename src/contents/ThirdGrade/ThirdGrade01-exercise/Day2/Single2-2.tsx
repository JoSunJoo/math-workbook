import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';
import Matrix from '../../utils/Matrix';

import type { Data21QuizProps2 as DataProps } from '../../Type/Type1';

const Single22 = (props: DataProps) => {
  const {
    id,
    id2,
    quiz1,
    quiz2,
    idx,
    inputValue,
    toggle,
    setToggle,
    setInputValue,
    correct,
  } = props;

  const handleInput = (e: string) => {
    const value = inputValue;
    value[idx][12] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.SingleWrapper>
      <Styled.ColGapBox gap={0}>
        <Matrix
          id={id2}
          placeHolder={[]}
          inputValue={inputValue}
          setInputValue={setInputValue}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Styled.InputWrapper2>
          <IdSymbol id={id} correct={correct} />
          <div>{quiz1}</div>
          <div>+</div>
          <div>{quiz2}</div>
          <div>=</div>
          <Styled.InputBox2 onChange={e => handleInput(e.target.value)} />
        </Styled.InputWrapper2>
      </Styled.ColGapBox>
    </Styled.SingleWrapper>
  );
};

export default Single22;
