import Styled from '../../style';
import IdSymbol from '../../utils/IdSymbol';

import type { Data11QuizProps2 as Props } from '../../Type/Type1';

import img from '../../Image/1-1-1.png';

const Single11 = (props: Props) => {
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
    <Styled.LineQuizBox2>
      <IdSymbol id={id} correct={correct} />
      <Styled.RelativeBox2>
        <Styled.Quiz2Lines1 src={img} />
        <Styled.Lines2Quiz1>
          <Styled.RowBox8>
            <div>{quiz1}</div>
            <div>{quiz2}</div>
            <div>{quiz3}</div>
            <div>+</div>
            <div>{quiz4}</div>
            <div>{quiz5}</div>
            <div>{quiz6}</div>
          </Styled.RowBox8>
        </Styled.Lines2Quiz1>
        <Styled.LinesQuiz2>{quiz7}</Styled.LinesQuiz2>
        <Styled.LinesQuiz3>{quiz8}</Styled.LinesQuiz3>
        <Styled.LinesQuiz4>{quiz9}</Styled.LinesQuiz4>
        <Styled.Lines2QuizInput1
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, 0)}
        />
        <Styled.Lines2QuizInput2
          disabled={correct === null ? false : true}
          onChange={e => handleInput(e.target.value, 1)}
        />
      </Styled.RelativeBox2>
    </Styled.LineQuizBox2>
  );
};

export default Single11;
