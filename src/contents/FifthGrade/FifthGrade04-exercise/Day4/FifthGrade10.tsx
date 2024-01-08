import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg2 from 'src/contents/FifthGrade/fifthImage/4-4-1.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade10: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '5'],
    '2': ['1', '14'],
    '3': ['15', '28'],
    '4': ['27', '104'],
    '5': ['1', '7'],
    '6': ['3', '14'],
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
  const handleGrade = async () => {
    setShowResults(!showResults);

    setType(false);
    const totalScore = calculateScore();
    setIsInputDisabled(!isInputDisabled); // 제출 시 입력 상자 비활성화

    sendScore({ score: totalScore }).catch(error => {
      console.error('Error with sendScore:', error);
    });
    postKeyValue({
      key: 'fifthGrade55Answers',
      value: answers,
    }).catch(error => {
      console.error('Error saving answers:', error);
    });
  };
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    getKeyValue({ key: 'fifthGrade55Answers' })
      .then(savedAnswers => {
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
        setIsDataLoaded(true);
      })
      .catch(error => {
        console.error('Error loading saved answers:', error);
      });
  }
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="exampleBox312">
        <div className="fontSize17">
          세 분수의 곱셈은 여러 번 약분을 할 수 있는 경우가 있습니다.
        </div>
        <div className="quiz121Ex justifyCenter">
          <img className="imgSize3111" src={fifthimg2} alt="" />
        </div>
        <div className="flexRow">
          <div className="">
            <div className="textCenter">12</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">25</div>
          </div>
          <div className="flexRow">
            의 분자 12는 16과 4로 약분하고, 9와 3으로 한 번 더 약분해서 1이
            되었습니다.
          </div>
        </div>
        <div>
          분자와 분모를 약분하는 순서는 여러 가지가 있지만 계산 결과는 같습니다.{' '}
        </div>
      </div>
      <div className="quiz fontSize25">
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp">
            <p>① &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">28</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">15</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp">
            <p>② &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp">
            <p>③ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">9</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp">
            <p>④ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">9</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">16</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">2</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">12</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">13</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp">
            <p>⑤ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['5'][1]}
                onChange={e => handleChange('5', 1, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp">
            <p>⑥ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['6'][1]}
                onChange={e => handleChange('6', 1, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
