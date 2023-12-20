import Styled from '../../style';

import type { Data41QuizProps as Props } from '../../Type/Type1';

import img from '../../Image/1-4-1_2.png';

const Single41 = (props: Props) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, type } =
    props;
  return (
    <Styled.LineQuizBox1>
      <div>{id}</div>
      <Styled.QuizLines3 src={img} />
      <Styled.LinesQuiz13>
        <Styled.RowBox8>
          <div>{quiz1}</div>
          <div>{quiz2}</div>
          <div>{quiz3}</div>
          <div>+</div>
          <div>{quiz4}</div>
          <div>{quiz5}</div>
          <div>{quiz6}</div>
        </Styled.RowBox8>
      </Styled.LinesQuiz13>
      <Styled.LinesQuiz14>{quiz7}</Styled.LinesQuiz14>
      <Styled.LinesQuiz15>{quiz8}</Styled.LinesQuiz15>
      {/* input 순서: 위 -> 아래 */}
      <Styled.LinesQuizInput8 />
      <Styled.LinesQuizInput9 />
    </Styled.LineQuizBox1>
  );
};

export default Single41;
