import Styled from '../../style';

import type { Data31QuizProps as Props } from '../../Type/Type1';

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
  } = props;
  return (
    <Styled.LineQuizBox1>
      <div>{id}</div>
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
      <Styled.LinesQuizInput3 />
      <Styled.LinesQuizInput4 />
      <Styled.LinesQuizInput5 />
    </Styled.LineQuizBox1>
  );
};

export default Single31;
