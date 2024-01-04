import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg from 'src/contents/FifthGrade/fifthImage/화살표.png';

const FifthGrade15: React.FC = () => {
  const [type, setType] = useState(true);
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
    '12': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['<'],
    '2': ['>'],
    '3': ['<'],
    '4': ['>'],
    '5': ['>'],
    '6': ['<'],
    '7': ['>'],
    '8': ['<'],
    '9': ['>'],
    '10': ['<'],
    '11': ['<'],
    '12': ['<'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade45Answers' });
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
        key: 'fifthGrade45Answers',
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
      <div className="exampleBox312">
        <div className="fontSize17">
          두 분수의 크기만 비교할 경우에는 분모의 곱을 공통분모로 통분한다고
          생각하고, 분자의 크기만 비 교하면 분수의 크기를 쉽게 비교할 수
          있습니다.
        </div>
        <div></div>
        <div className="flexRow">
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={fifthimg}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">28</div>
            </div>
            <input
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={fifthimg}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>

            <div className="fontSize17 marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">14</div>
            </div>
            <input
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
          </div>
        </div>
      </div>
      {/* 문제시작  */}
      <div className="quizRow3case minwidwer900px">
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ①{' '}
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
          <input
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">9</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ②{' '}
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
          <input
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ③{' '}
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">11</div>
          </div>
          <input
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">7</div>
          </div>
          {/* 이미지때문에 보류  */}
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ④{' '}
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <input
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">10</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑤{' '}
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <input
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">3</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑥{' '}
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <input
            value={answers['6'][0]}
            onChange={e => handleChange('6', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">15</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑦{' '}
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">12</div>
          </div>
          <input
            value={answers['7'][0]}
            onChange={e => handleChange('7', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">5</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑧{' '}
            {showResults && (
              <div>
                {isCorrect('8') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">9</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">20</div>
          </div>
          <input
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑨{' '}
            {showResults && (
              <div>
                {isCorrect('9') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <input
            value={answers['9'][0]}
            onChange={e => handleChange('9', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">14</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑩{' '}
            {showResults && (
              <div>
                {isCorrect('10') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <input
            value={answers['10'][0]}
            onChange={e => handleChange('10', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">13</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">25</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑪{' '}
            {showResults && (
              <div>
                {isCorrect('11') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">17</div>
          </div>
          <input
            value={answers['11'][0]}
            onChange={e => handleChange('11', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑫{' '}
            {showResults && (
              <div>
                {isCorrect('12') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">11</div>
          </div>
          <input
            value={answers['12'][0]}
            onChange={e => handleChange('12', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">18</div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade15;
