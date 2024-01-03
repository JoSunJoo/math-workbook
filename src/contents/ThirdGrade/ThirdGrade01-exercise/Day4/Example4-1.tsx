import Styled from '../../style';

import img from '../../Image/1-4-1_1.png';

const Example41 = () => {
  return (
    <Styled.LineExamBox2>
      <Styled.LineQuizBox3>
        <Styled.QuizLines3Exam src={img} />
        <Styled.LinesQuiz10>
          <Styled.RowBox8>
            <div>4</div>
            <div>5</div>
            <div>2</div>
            <div>+</div>
            <div>2</div>
            <div>0</div>
            <div>3</div>
          </Styled.RowBox8>
        </Styled.LinesQuiz10>
        <Styled.LinesQuiz11>200</Styled.LinesQuiz11>
        <Styled.LinesQuiz12>3</Styled.LinesQuiz12>
        <Styled.LinesQuizInput6 placeholder="652" />
        <Styled.LinesQuizInput7 placeholder="655" />
        <Styled.LinesQuizInputExplain6>
          452+200 = 652
        </Styled.LinesQuizInputExplain6>
        <Styled.LinesQuizInputExplain7>
          652+3 = 655
        </Styled.LinesQuizInputExplain7>
      </Styled.LineQuizBox3>
    </Styled.LineExamBox2>
  );
};

export default Example41;
