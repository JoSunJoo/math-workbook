import Styled from '../../style';

import img from '../../Image/1-1-1.png';

const Example11 = () => {
  return (
    <Styled.LineExamBox1>
      <Styled.LineQuizBox1>
        <Styled.QuizLines1Exam src={img} />
        <Styled.LinesQuiz1>
          <Styled.RowBox8>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>+</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Styled.RowBox8>
        </Styled.LinesQuiz1>
        <Styled.LinesQuiz2>400</Styled.LinesQuiz2>
        <Styled.LinesQuiz3>70</Styled.LinesQuiz3>
        <Styled.LinesQuiz4>7</Styled.LinesQuiz4>
        <Styled.SameLinesQuizInput1>470</Styled.SameLinesQuizInput1>
        <Styled.LinesQuizInputExplain1>
          400+70 =470
        </Styled.LinesQuizInputExplain1>
        <Styled.LinesQuizInputExplain2>
          470+7 =477
        </Styled.LinesQuizInputExplain2>
        <Styled.SameLinesQuizInput2>477</Styled.SameLinesQuizInput2>
      </Styled.LineQuizBox1>
    </Styled.LineExamBox1>
  );
};

export default Example11;
