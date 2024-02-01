import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';
import Matrix from '../../utils/Matrix';

import type { Data21QuizProps2 as DataProps } from '../../Type/Type1';

const Single21 = (props: DataProps) => {
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

  const placeHolder = ['', '7', '0', '0', '', '', '6', '0', '', '', '1', '6'];

  const handleInput = (e: string) => {
    const value = inputValue;
    value[idx][12] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

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
            example={true}
          />
        ) : (
          <Matrix
            id={id2}
            placeHolder={[]}
            inputValue={inputValue}
            setInputValue={setInputValue}
            toggle={toggle}
            setToggle={setToggle}
            example={correct === null ? false : true}
          />
        )}
        <Styled.InputWrapper2>
          <IdSymbol id={id} correct={correct} />
          <div>{quiz1}</div>
          <div>+</div>
          <div>{quiz2}</div>
          <div>=</div>
          <Styled.InputBox2
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value)}
            value={inputValue[idx][12]}
          />
        </Styled.InputWrapper2>
      </Styled.ColGapBox>
    </Styled.SingleWrapper>
  );
};

export default Single21;
