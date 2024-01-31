import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data31QuizProps2 as Props } from '../../Type/Type1';

import img from '../../Image/1-3-1.png';

const Single31 = (props: Props) => {
  const {
    id,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10,
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
    <Styled.LineQuizBox1>
      <IdSymbol id={id} correct={correct} />
      <Styled.QuizLines2 src={img} />
      <Styled.LinesQuiz5>
        <Styled.RowBox8>
          <div>{quiz1}</div>
          <div>{quiz2}</div>
          <div>{quiz3}</div>
          <div>+</div>
          <div>{quiz4}</div>
          <div>{quiz5}</div>
          <div>{quiz6}</div>
        </Styled.RowBox8>
      </Styled.LinesQuiz5>
      <Styled.LinesQuiz6>{quiz7}</Styled.LinesQuiz6>
      <Styled.LinesQuiz7>{quiz8}</Styled.LinesQuiz7>
      <Styled.LinesQuiz8>{quiz9}</Styled.LinesQuiz8>
      <Styled.LinesQuiz9>{quiz10}</Styled.LinesQuiz9>
      <Styled.LinesQuizInput3
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 0)}
        value={inputValue[idx][0]}
      />
      <Styled.LinesQuizInput4
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 1)}
        value={inputValue[idx][1]}
      />
      <Styled.LinesQuizInput5
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 2)}
        value={inputValue[idx][2]}
      />
    </Styled.LineQuizBox1>
  );
};

export default Single31;
