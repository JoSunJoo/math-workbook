import Styled from '../../style';

import type { Data11QuizProps as Props } from '../../Type/Type1';

import img from '../../Image/1-1-1.png';

const Single11 = (props: Props) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9 } =
    props;
  return (
    <Styled.LineQuizBox1>
      <div>{id}</div>
      <Styled.QuizLines1 src={img} />
      <Styled.LinesQuiz1>
        <Styled.RowBox8>
          <div>{quiz1}</div>
          <div>{quiz2}</div>
          <div>{quiz3}</div>
          <div>+</div>
          <div>{quiz4}</div>
          <div>{quiz5}</div>
          <div>{quiz6}</div>
        </Styled.RowBox8>
      </Styled.LinesQuiz1>
      <Styled.LinesQuiz2>{quiz7}</Styled.LinesQuiz2>
      <Styled.LinesQuiz3>{quiz8}</Styled.LinesQuiz3>
      <Styled.LinesQuiz4>{quiz9}</Styled.LinesQuiz4>
      <Styled.LinesQuizInput1 />
      <Styled.LinesQuizInput2 />
    </Styled.LineQuizBox1>
  );
};

export default Single11;
