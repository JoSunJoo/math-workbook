import Styled from '../../style';

import img from '../../Image/1-1-1.png';

const Example11 = () => {
  return (
    <Styled.LineExamBox1>
      <Styled.MarginBox right={2}>
        <Styled.LineQuizBox2>
          <Styled.Quiz2Lines1Exam src={img} />
          <Styled.Lines2Quiz1>
            <Styled.RowBox8>
              <div>1</div>
              <div>2</div>
              <div>4</div>
              <div>+</div>
              <div>3</div>
              <div>5</div>
              <div>3</div>
            </Styled.RowBox8>
          </Styled.Lines2Quiz1>
          <Styled.LinesQuiz2>400</Styled.LinesQuiz2>
          <Styled.LinesQuiz3>70</Styled.LinesQuiz3>
          <Styled.LinesQuiz4>7</Styled.LinesQuiz4>
          <Styled.Lines2QuizInput1 placeholder="470" disabled />
          <Styled.LinesQuizInputExplain1>
            400+70 =470
          </Styled.LinesQuizInputExplain1>
          <Styled.LinesQuizInputExplain2>
            470+7 =477
          </Styled.LinesQuizInputExplain2>
          <Styled.Lines2QuizInput2 placeholder="477" disabled />
        </Styled.LineQuizBox2>
      </Styled.MarginBox>
    </Styled.LineExamBox1>
  );
};

export default Example11;
