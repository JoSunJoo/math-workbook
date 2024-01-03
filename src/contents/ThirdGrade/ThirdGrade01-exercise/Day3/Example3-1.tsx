import Styled from '../../style';

import img from '../../Image/1-3-1.png';

const Example31 = () => {
  return (
    <Styled.LineExamBox2>
      <Styled.LineQuizBox1>
        <Styled.QuizLines2Exam src={img} />
        <Styled.LinesQuiz5>
          <Styled.RowBox8>
            <div>7</div>
            <div>4</div>
            <div>5</div>
            <div>+</div>
            <div>1</div>
            <div>2</div>
            <div>4</div>
          </Styled.RowBox8>
        </Styled.LinesQuiz5>
        <Styled.LinesQuiz6>700</Styled.LinesQuiz6>
        <Styled.LinesQuiz7>45</Styled.LinesQuiz7>
        <Styled.LinesQuiz8>100</Styled.LinesQuiz8>
        <Styled.LinesQuiz9>24</Styled.LinesQuiz9>
        <Styled.LinesQuizInput3 placeholder="800" disabled />
        <Styled.LinesQuizInput4 placeholder="69" disabled />
        <Styled.LinesQuizInput5 placeholder="869" disabled />
        <Styled.LinesQuizInputExplain3>
          700+100 =800
        </Styled.LinesQuizInputExplain3>
        <Styled.LinesQuizInputExplain4>
          45 + 24 = 69
        </Styled.LinesQuizInputExplain4>
        <Styled.LinesQuizInputExplain5>
          800 + 69 = 869
        </Styled.LinesQuizInputExplain5>
      </Styled.LineQuizBox1>
    </Styled.LineExamBox2>
  );
};

export default Example31;
