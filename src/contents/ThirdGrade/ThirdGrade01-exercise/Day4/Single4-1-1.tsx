import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data41QuizProps2 as Props } from '../../Type/Type1';

import img from '../../Image/1-4-1_1.png';

const Single41 = (props: Props) => {
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
      <Styled.QuizLines3 src={img} />
      <Styled.LinesQuiz10>
        <Styled.RowBox8>
          <div>{quiz1}</div>
          <div>{quiz2}</div>
          <div>{quiz3}</div>
          <div>+</div>
          <div>{quiz4}</div>
          <div>{quiz5}</div>
          <div>{quiz6}</div>
        </Styled.RowBox8>
      </Styled.LinesQuiz10>
      <Styled.LinesQuiz11>{quiz7}</Styled.LinesQuiz11>
      <Styled.LinesQuiz12>{quiz8}</Styled.LinesQuiz12>
      <Styled.LinesQuizInput6
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 0)}
      />
      <Styled.LinesQuizInput7
        disabled={correct === null ? false : true}
        onChange={e => handleInput(e.target.value, 1)}
      />
    </Styled.LineQuizBox1>
  );
};

export default Single41;
