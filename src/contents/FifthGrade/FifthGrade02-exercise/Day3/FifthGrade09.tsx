import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade09: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
    '6': [''],
    '7': [''],
    '8': [''],
    '9': [''],
    '10': [''],
    '11': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['28'],
    '2': ['40'],
    '3': ['42'],
    '4': ['66'],
    '5': ['64'],
    '6': ['84'],
    '7': ['80'],
    '8': ['90'],
    '9': ['95'],
    '10': ['72'],
    '11': ['105'],
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
      {' '}
      <div className="quizAll">
        <div className="quiz1 lakwerfj">
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                24보다 큰 6의 배수 중 가장 작은 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231 quizMargin1422"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="borderColor233 Red233">30</div>
                <div>
                  <div className="Red233">6×4=24(×) </div>
                  <div className="Red233">6×5=30(○) </div>
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ① 30보다 작은 4의 배수 중 가장 큰 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ② 37보다 큰 5의 배수 중 가장 작은 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ③ 48보다 작은 6의 배수 중 가장 큰 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ④ 55보다 큰 11의 배수 중 가장 작은 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑤ 70보다 작은 16의 배수 중 가장 큰 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑥ 70보다 큰 14의 배수 중 가장 작은 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑦ 90보다 작은 20의 배수 중 가장 큰 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑧ 80보다 큰 30의 배수 중 가장 작은 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑨ 100보다 작은 19의 배수 중 가장 큰 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['9'][0]}
                  onChange={e => handleChange('9', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑩ 70보다 큰 36의 배수 중 가장 작은 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['10'][0]}
                  onChange={e => handleChange('10', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑪ 140보다 작은 35의 배수 중 가장 큰 수
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['11'][0]}
                  onChange={e => handleChange('11', 0, e.target.value)}
                  className="borderColor233"
                />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade09;
