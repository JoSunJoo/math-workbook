import Styled from '../../style';

import type { Data11QuizProps as Props } from '../../Type/Type1';

import img from '../../Image/1-1-1.png';

const Single11 = (props: Props) => {
  const { id, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9 } =
    props;
  return (
    <Styled.LineQuizBox2>
      <div>{id}</div>
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
        <Styled.Lines2QuizInput1 />
        <Styled.Lines2QuizInput2 />
      </Styled.RelativeBox2>
    </Styled.LineQuizBox2>
  );
};

export default Single11;
