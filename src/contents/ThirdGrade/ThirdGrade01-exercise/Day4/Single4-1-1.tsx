import Styled from '../../style';

import type { Data41QuizProps as Props } from '../../Type/Type1';

import img from '../../Image/1-4-1_1.png';

const Single41 = (props: Props) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, type } =
    props;
  return (
    <Styled.LineQuizBox1>
      <div>{id}</div>
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
      <Styled.LinesQuizInput6 />
      <Styled.LinesQuizInput7 />
    </Styled.LineQuizBox1>
  );
};

export default Single41;
