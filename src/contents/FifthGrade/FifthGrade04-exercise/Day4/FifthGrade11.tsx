import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg2 from 'src/contents/FifthGrade/fifthImage/4-4-2.png';

const FifthGrade11: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': [''],
    '3': ['', ''],
    '4': [''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '5'],
    '2': ['3'],
    '3': ['1', '2'],
    '4': ['7'],
    '5': ['3', '4'],
    '6': ['4', '5'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade56Answers' });
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
      } catch (error) {
        console.error('Error loading saved answers:', error);
      }
    };

    loadChanges();
  }, []);
  useEffect(() => {
    // answers 상태가 변경될 때마다 실행
    const saveChanges = async () => {
      await postKeyValue({
        key: 'fifthGrade56Answers',
        value: answers,
      });
    };

    saveChanges();
  }, [answers]);
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="exampleBox312 ewwfar">
        <div className="fontSize17">
          자연수는 분모가 1인 분수로 생각하여 분모와 바로 약분한 후 분자끼리,
          분모끼리 곱합니다.
        </div>
        <div className="quiz121Ex justifyCenter">
          <img className="awef12368568" src={fifthimg2} alt="" />
        </div>
      </div>
      <div className="quiz fontSize25">
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
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
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
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
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
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
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
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
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['2'][0]}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
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
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
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
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
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
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
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
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">12</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                onChange={e => handleChange('4', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
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
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
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
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
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
              <div className="textCenter">26</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">15</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">13</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
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

export default FifthGrade11;
