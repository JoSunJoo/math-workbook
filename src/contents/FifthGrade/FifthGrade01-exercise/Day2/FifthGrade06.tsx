import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import ConfirmBtn from '../../utils/ConfirmBtn';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade06: React.FC = () => {
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
    '13': [''],
    '14': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['15'],
    '2': ['49'],
    '3': ['32'],
    '4': ['78'],
    '5': ['33'],
    '6': ['45'],
    '7': ['14'],
    '8': ['22'],
    '9': ['59'],
    '10': ['33'],
    '11': ['28'],
    '12': ['1'],
    '13': ['16'],
    '14': ['33'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade06Answers' });
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
        key: 'fifthGrade06Answers',
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
      <div className="quizAll">
        <div className="quiz1">
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ①{' '}
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              46 - (12 + 19) ={' '}
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ②{' '}
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              88 - (52 - 13) ={' '}
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ③{' '}
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              29 + (22 - 19) ={' '}
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ④{' '}
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              37 + (16 + 25) ={' '}
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑤{' '}
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              74 - (26 + 15) ={' '}
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑥{' '}
                {showResults && (
                  <div>
                    {isCorrect('6') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              46 - (17 - 16) ={' '}
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑦{' '}
                {showResults && (
                  <div>
                    {isCorrect('7') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              55 - (17 + 24) ={' '}
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑧{' '}
                {showResults && (
                  <div>
                    {isCorrect('8') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              16 + (41 - 35) ={' '}
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑨{' '}
                {showResults && (
                  <div>
                    {isCorrect('9') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              60 - (27 - 26) ={' '}
              <input
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑩{' '}
                {showResults && (
                  <div>
                    {isCorrect('10') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              31 + (27 - 25) ={' '}
              <input
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑪{' '}
                {showResults && (
                  <div>
                    {isCorrect('11') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              59 - (6 + 25) ={' '}
              <input
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑫{' '}
                {showResults && (
                  <div>
                    {isCorrect('12') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              17 - (25 - 9) ={' '}
              <input
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑬{' '}
                {showResults && (
                  <div>
                    {isCorrect('13') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              38 - (5 + 17) ={' '}
              <input
                value={answers['13'][0]}
                onChange={e => handleChange('13', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑭{' '}
                {showResults && (
                  <div>
                    {isCorrect('14') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              24 + (17 - 8) ={' '}
              <input
                value={answers['14'][0]}
                onChange={e => handleChange('14', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade06;
