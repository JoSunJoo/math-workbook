import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import ConfirmBtn from '../../utils/ConfirmBtn';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg from 'src/contents/FifthGrade/fifthImage/1-2-1_1.png';
import fifthimg2 from 'src/contents/FifthGrade/fifthImage/1-2-1_2.png';

const FifthGrade07: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', '', ''],
    '3': ['', '', ''],
    '4': ['', '', ''],
    '5': ['', '', ''],
    '6': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['5', '9', '9'],
    '2': ['2', '28', '28'],
    '3': ['20', '5', '5'],
    '4': ['8', '10', '10'],
    '5': ['21', '6', '6'],
    '6': ['60', '420', '420'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade07Answers' });
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
        key: 'fifthGrade07Answers',
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
      <div className="quizAllLine">
        <div className="quiz">
          {/*  예제 문제  */}
          <div className="quizCard121">
            <div className="absolSetting121">
              <div className="twoQuiz">
                <div className="quiz121Ex">
                  <p className="explain1">
                    ( )가 있는 식은 ( )안을 먼저 계산합니다.
                  </p>
                  <div className="flexrow">
                    24 ÷ 4 × 2 = <div className="marginLeft9">18</div>
                  </div>
                  <div className="marginLeft7">12</div>
                  <div className="marginLeft8">18</div>
                  <img className="img1211" src={fifthimg} alt="" />
                </div>
                <div className="quiz121Ex">
                  <div className="flexrow">
                    24 ÷ (4 × 2) = <div className="marginLeft9">6</div>
                  </div>
                  <div className="marginLeft10">11</div>
                  <div className="marginLeft11">6</div>
                  <img className="img1212 imgleft1311" src={fifthimg2} alt="" />
                </div>
                <p className="explain2">
                  두 식을 비교해보면 ( )가 있을 때와 없을 때 계산 순서가 달라서
                  계산 결과가 다릅니다.
                </p>
              </div>
            </div>
          </div>
          {/* 예제문제 끝 */}
          <div className="quiz1211">
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">
                      ①
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
                    45 ÷ (15 ÷ 3) =
                    <input
                      type="text"
                      className="borderRedInput1211"
                      value={answers['1'][2]}
                      onChange={e => handleChange('1', 2, e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="borderRedInput2 quizInput1231"
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                />
                <input
                  type="text"
                  className="borderRedInput3"
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">
                      ②
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
                    14 × (12 ÷ 6) =
                    <input
                      type="text"
                      className="borderRedInput1211"
                      value={answers['2'][2]}
                      onChange={e => handleChange('2', 2, e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="borderRedInput2 quizInput1231"
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                />
                <input
                  type="text"
                  className="borderRedInput3"
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">
                      ③
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
                    100 ÷ (5 × 4) ={' '}
                    <input
                      type="text"
                      className="borderRedInput1211"
                      value={answers['3'][2]}
                      onChange={e => handleChange('3', 2, e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="borderRedInput2 quizInput1231"
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                />
                <input
                  type="text"
                  className="borderRedInput3"
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone ">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">
                      ④
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
                    80 ÷ (24 ÷ 3) ={' '}
                    <input
                      type="text"
                      className="borderRedInput1211"
                      value={answers['4'][2]}
                      onChange={e => handleChange('4', 2, e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="borderRedInput2 quizInput1231"
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                />
                <input
                  type="text"
                  className="borderRedInput3"
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone quizMargin2">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">
                      ⑤
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
                    126 ÷ (3 × 7) ={' '}
                    <input
                      type="text"
                      className="borderRedInput1211"
                      value={answers['5'][2]}
                      onChange={e => handleChange('5', 2, e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="borderRedInput2 quizInput1231"
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                />
                <input
                  type="text"
                  className="borderRedInput3"
                  value={answers['5'][1]}
                  onChange={e => handleChange('5', 1, e.target.value)}
                />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">
                      ⑥
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
                    7 × (15 × 4) =
                    <input
                      type="text"
                      className="borderRedInput1211"
                      value={answers['6'][2]}
                      onChange={e => handleChange('6', 2, e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="borderRedInput2 quizInput1231"
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                />
                <input
                  type="text"
                  className="borderRedInput3"
                  value={answers['6'][1]}
                  onChange={e => handleChange('6', 1, e.target.value)}
                />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
