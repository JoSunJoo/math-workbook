import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as QuizProps } from '../../Type/Type2';

import arrow from '../../Image/blueArrow.png';

const Single11 = (props: QuizProps) => {
  const {
    id,
    quiz1,
    quiz2,
    idx,
    toggle,
    setToggle,
    inputValue,
    setInputValue,
    correct,
  } = props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[idx][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    <Styled.RowBox13>
      <IdSymbol id={id} correct={correct} />
      <Styled.RowBox17>
        <Styled.RowBox4>
          <div>{quiz1} × </div>
          <Styled.InputBox3
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 0)}
            value={inputValue[idx][0]}
          />
          <div>= {quiz2}</div>
        </Styled.RowBox4>
        <Styled.ImgSize10 src={arrow} />
        <Styled.RowBox4>
          <Styled.InputBox1
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 1)}
            value={inputValue[idx][1]}
          />
          <div>÷</div>
          <Styled.InputBox1
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 2)}
            value={inputValue[idx][2]}
          />
          <div>=</div>
          <Styled.InputBox3
            disabled={correct === null ? false : true}
            onChange={e => handleInput(e.target.value, 3)}
            value={inputValue[idx][3]}
          />
        </Styled.RowBox4>
      </Styled.RowBox17>
    </Styled.RowBox13>
  );
};

export default Single11;
