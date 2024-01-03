import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade10: React.FC = () => {
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
    '1': ['9'],
    '2': ['8'],
    '3': ['6'],
    '4': ['7'],
    '5': ['7'],
    '6': ['6'],
    '7': ['5'],
    '8': ['5'],
    '9': ['6'],
    '10': ['6'],
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
      <div className="quizAll asdfasdf242">
        <div className="quiz241Ex">
          <div className="flexRow nowrap1">
            <div className="flexcol nowrap1">
              <div className="textLLeft fontSize20">
                40보다 작은 6의 배수 개수
              </div>
              <div className="flexRow quizNumber123522">
                <img
                  className="allowRight"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <div className="borderColor233 margin2410 quizNumber1235">
                  6
                </div>{' '}
                개
              </div>
              <div className="Red233 fontSize25">39÷6=6…3</div>
            </div>
            <div className="flexcol elemet2411">
              <p className="fontSize20">1부터 39까지의 수에서</p>
              <p className="fontSize20">
                39를 6으로 나누면 몫이 6이고 나머지가 3이므로
              </p>
              <p className="fontSize20">
                6×1에서 6×6까지 모두 6개의 배수가 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="quiz1 lakwerfj3214">
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">① 50보다 작은 5의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">② 60보다 작은 7의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['2'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">③ 55보다 작은 9의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">④ 64보다 작은 8의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['4'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">⑤ 99보다 작은 13의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['5'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">⑥ 98보다 작은 15의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['6'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">⑦ 100보다 작은 18의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['7'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">⑧ 130보다 작은 22의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['8'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">⑨ 165보다 작은 26의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['9'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">⑩ 187보다 작은 31의 배수의 개수</p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                  alt=""
                />
                <input
                  value={answers['10'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
