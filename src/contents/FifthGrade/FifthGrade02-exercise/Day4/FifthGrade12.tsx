import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade12: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['14'],
    '2': ['11'],
    '3': ['11'],
    '4': ['8'],
    '5': ['6'],
    '6': ['5'],
    '7': ['23'],
    '8': ['8'],
    '9': ['39'],
    '10': ['5'],
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
      <div className="quizAll">
        <div className="quiz1 lakwerfj">
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ①&nbsp;&nbsp;&nbsp;&nbsp; 9 ＜ ★ ＜ 65
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">4의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ②&nbsp;&nbsp;&nbsp;&nbsp; 18 ＜ ★ ＜ 75
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">5의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ③&nbsp;&nbsp;&nbsp;&nbsp; 26 ＜ ★ ＜ 96
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">6의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ④&nbsp;&nbsp;&nbsp;&nbsp; 32 ＜ ★ ＜ 88
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">7의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑤&nbsp;&nbsp;&nbsp;&nbsp; 30 ＜ ★ ＜ 90
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">9의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑥&nbsp;&nbsp;&nbsp;&nbsp; 20 ＜ ★ ＜ 70
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">
                  11의 배수의 개수 : &nbsp;&nbsp;
                </div>
                <input
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑦&nbsp;&nbsp;&nbsp;&nbsp; 20 ＜ ★ ＜ 89
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">3의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑧&nbsp;&nbsp;&nbsp;&nbsp; 17 ＜ ★ ＜ 100
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">
                  10의 배수의 개수 : &nbsp;&nbsp;
                </div>
                <input
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑨&nbsp;&nbsp;&nbsp;&nbsp; 10 ＜ ★ ＜ 90
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">2의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  value={answers['9'][0]}
                  onChange={e => handleChange('9', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑩&nbsp;&nbsp;&nbsp;&nbsp; 5 ＜ ★ ＜ 70
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="fontSize20">
                  12의 배수의 개수 : &nbsp;&nbsp;
                </div>
                <input
                  value={answers['10'][0]}
                  onChange={e => handleChange('10', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
