import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade02: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3', '11', '15'],
    '2': ['1', '5', '9'],
  };
  const handleChange = (questionId: string, index: number, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: answers[questionId].map((item, i) =>
        i === index ? value : item
      ),
    });
  };

  const [showResults, setShowResults] = useState(false);

  const isCorrect = (questionId: string) => {
    return correctAnswers[questionId].every(
      (answer, index) => answer === answers[questionId][index]
    );
  };

  const handleGrade = () => {
    setShowResults(true);
  };
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="exampleBox312 aewrfawe">
        <div className="fontSize17">
          대분수의 곱셈은 가분수로 바꾸고 분자끼리, 분모끼리 곱하여 계산합니다.
          그림으로 나타내면 아래와 같습니다.
        </div>
        <div className="justifyCenter">
          <img
            className="imgSize3111"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-1-2.png`}
            alt=""
          />
        </div>
      </div>
      <div className="quiz1 fontSize25 margialefeef">
        <div className="flexCol">
          <div className="flexRow">
            <p className="">①&nbsp;&nbsp;&nbsp;</p>
            <div className="peiafoewijao">2</div>
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">2</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="peiafoewijao">1</div>
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=&nbsp;</div>
            <input type="text" className="averageInput marginRight239" />
            <div className="">
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div className="flexCol">
          <div className="flexRow">
            <p className="">②&nbsp;&nbsp;&nbsp;</p>
            <div className="peiafoewijao">1</div>

            <div>
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="peiafoewijao">1</div>

            <div className="">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=&nbsp;</div>
            <input type="text" className="averageInput marginRight239" />
            <div className="">
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={true} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade02;
