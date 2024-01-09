import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg2 from 'src/contents/FifthGrade/fifthImage/4-3-2.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade08: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': [''],
    '5': [''],
    '6': ['', '', ''],
    '7': [''],
    '8': ['', '', ''],
    '9': ['', '', ''],
    '10': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '3', '4'],
    '2': ['2', '5'],
    '3': ['1', '2'],
    '4': ['4'],
    '5': ['8'],
    '6': ['6', '1', '4'],
    '7': ['9'],
    '8': ['3', '1', '5'],
    '9': ['5', '5', '6'],
    '10': ['1', '1', '6'],
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

    setType(!type);
    const totalScore = calculateScore();
    setIsInputDisabled(!isInputDisabled); // 제출 시 입력 상자 비활성화

    sendScore({ score: totalScore }).catch(error => {
      console.error('Error with sendScore:', error);
    });
    postKeyValue({
      key: 'fifthGrade53Answers',
      value: answers,
    }).catch(error => {
      console.error('Error saving answers:', error);
    });
  };
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    getKeyValue({ key: 'fifthGrade53Answers' })
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
          자연수는 분모가 1인 분수로 생각하여 분모와 바로 약분한 후 분자끼리,
          분모끼리 곱합니다
        </div>
        <div className="quiz121Ex justifyCenter">
          <img className="imgSize3111" src={fifthimg2} alt="" />
        </div>
      </div>
      <div className="quiz333 fontSize25">
        <div className="afwe3513 flexRow awefaweTOp">
          <p>① &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('1') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['1'][2]}
              onChange={e => handleChange('1', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="afwe3513 flexRow awefaweTOp">
          <p>② &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('2') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
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
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp">
          <p>③ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('3') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
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
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp">
          <p>④ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('4') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
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
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp">
          <p>⑤ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('5') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">12</div>
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
          </div>
        </div>
        <div className="afwe3513 flexRow awefaweTOp">
          <p>⑥ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('6') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>{' '}
          <input
            disabled={isInputDisabled}
            value={answers['6'][0]}
            onChange={e => handleChange('6', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][2]}
              onChange={e => handleChange('6', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp">
          <p>⑦ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('7') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">21</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="afwe3513 flexRow awefaweTOp">
          <p>⑧ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('8') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
          </div>
          <div className="marginlR10px">=</div>{' '}
          <input
            disabled={isInputDisabled}
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][2]}
              onChange={e => handleChange('8', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp">
          <p>⑨ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('9') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">30</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">36</div>
          </div>
          <div className="marginlR10px">=</div>{' '}
          <input
            disabled={isInputDisabled}
            value={answers['9'][0]}
            onChange={e => handleChange('9', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][1]}
              onChange={e => handleChange('9', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][2]}
              onChange={e => handleChange('9', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp">
          <p>⑩ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('10') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">48</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">56</div>
          </div>
          <div className="marginlR10px">=</div>{' '}
          <input
            disabled={isInputDisabled}
            value={answers['10'][0]}
            onChange={e => handleChange('10', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][1]}
              onChange={e => handleChange('10', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][2]}
              onChange={e => handleChange('10', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade08;
