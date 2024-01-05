import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg from 'src/contents/FifthGrade/fifthImage/4-1-1.png';

const FifthGrade01: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '6'],
    '2': ['2', '15'],
    '3': ['3', '10'],
    '4': ['4', '9'],
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
  const calculateScore = () => {
    const totalQuestions = Object.keys(correctAnswers).length; // 전체 문제 수
    const scorePerQuestion = 100 / totalQuestions; // 각 문제당 점수

    let correctCount = 0;
    Object.keys(correctAnswers).forEach(questionId => {
      if (isCorrect(questionId)) {
        correctCount++;
      }
    });

    return correctCount * scorePerQuestion; // 총점 계산
  };
  const handleGrade = () => {
    setShowResults(true);
    setType(false);
    const totalScore = calculateScore();
    sendScore({ score: totalScore });
  };
  useEffect(() => {
    const loadChanges = async () => {
      try {
        const savedAnswers = await getKeyValue({ key: 'fifthGrade46Answers' });
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
      } catch (error) {
        console.error('Error loading saved answers:', error);
      }
    };

    loadChanges().catch(error => console.error('Failed to save changes:', error));
  }, []);
  useEffect(() => {
    // answers 상태가 변경될 때마다 실행
    const saveChanges = async () => {
      await postKeyValue({
        key: 'fifthGrade46Answers',
        value: answers,
      });
    };

    saveChanges().catch(error => console.error('Failed to save changes:', error));
  }, [answers]);
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="exampleBox312 aewrfawe">
        <div className="fontSize17">
          진분수와 가분수의 곱셈은 분자끼리, 분모끼리 곱하여 계산합니다.
          그림으로 나타내면 아래와 같습니다.
        </div>
        <div className="flexRowjustifyCenter">
          <div className="flexRow fontSize17 justifyCenter">
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div>×</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>=</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2 × 2</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">5 × 3</div>
            </div>
            <div>=</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
          </div>
        </div>
        <div className="justifyCenter">
          <img className="imgSize3111" src={fifthimg} alt="" />
        </div>
      </div>
      <div className="quiz1 fontSize25 margialefeef">
        <div className="flexCol">
          <div className="flexRow">
            <p className="afwe3513">
              {' '}
              {showResults && (
                <div>
                  {isCorrect('1') ? (
                    <div>
                      <img
                        className="answerImg71"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg71"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}{' '}
              ①&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className=" marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">2</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexCol">
          <div className="flexRow">
            <p className="afwe3513">
              {' '}
              {showResults && (
                <div>
                  {isCorrect('2') ? (
                    <div>
                      <img
                        className="answerImg71"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg71"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}{' '}
              ②&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className=" marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>{' '}
        <div className="flexCol">
          <div className="flexRow">
            <p className="afwe3513">
              {' '}
              {showResults && (
                <div>
                  {isCorrect('3') ? (
                    <div>
                      <img
                        className="answerImg71"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg71"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}{' '}
              ③&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className=" marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">2</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">3</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>{' '}
        <div className="flexCol">
          <div className="flexRow">
            <p className="afwe3513">
              {' '}
              {showResults && (
                <div>
                  {isCorrect('4') ? (
                    <div>
                      <img
                        className="answerImg71"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg71"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}{' '}
              ④&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className=" marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={type} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
