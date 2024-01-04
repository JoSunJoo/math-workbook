import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import ConfirmBtn from '../../utils/ConfirmBtn';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade01: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', '', ''],
    '6': ['', '', ''],
    '7': ['', '', ''],
    '8': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['68', '49'],
    '2': ['15', '38'],
    '3': ['6', '13'],
    '4': ['39', '30'],
    '5': ['8', '17', '3'],
    '6': ['43', '26', '6'],
    '7': ['19', '3', '14'],
    '8': ['43', '17', '26'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade01Answers' });
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
        key: 'fifthGrade01Answers',
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
          <div className="quizCard1">
            <p className="quizNumberTop">
              ①{' '}
              {showResults && (
                <div>
                  {isCorrect('1') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="margin5px">
              <div>
                25 + 43 - 19 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                />
                - 19
                <div className="textRight">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['1'][1]}
                    onChange={e => handleChange('1', 1, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">
              ②{' '}
              {showResults && (
                <div>
                  {isCorrect('2') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="margin5px">
              <div>
                31 - 16 + 23 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                />
                + 23
                <div className="textRight111">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['2'][1]}
                    onChange={e => handleChange('2', 1, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">
              ③{' '}
              {showResults && (
                <div>
                  {isCorrect('3') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="margin5px">
              <div>
                19 - 13 + 7 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                />
                + 7
                <div className="textRight">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['3'][1]}
                    onChange={e => handleChange('3', 1, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">
              ④{' '}
              {showResults && (
                <div>
                  {isCorrect('4') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="margin5px">
              <div>
                16 + 23 - 9 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                />
                - 9
                <div className="textRight1112">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['4'][1]}
                    onChange={e => handleChange('4', 1, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">
              ⑤{' '}
              {showResults && (
                <div>
                  {isCorrect('5') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="absolSetting">
              <div className="elementAbsol1">35 - 27 + 9 - 14</div>
              <div className="elementAbsol2">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                />
                + 9 - 14 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['5'][1]}
                  onChange={e => handleChange('5', 1, e.target.value)}
                />
                - 14
                <div className="elementAbsol3">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['5'][2]}
                    onChange={e => handleChange('5', 2, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">
              ⑥{' '}
              {showResults && (
                <div>
                  {isCorrect('6') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="absolSetting">
              <div className="elementAbsol1">28 + 15 - 17 - 20</div>
              <div className="elementAbsol2">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                />
                - 17 - 20 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['6'][1]}
                  onChange={e => handleChange('6', 1, e.target.value)}
                />
                - 20
                <div className="elementAbsol3">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['6'][2]}
                    onChange={e => handleChange('6', 2, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">
              ⑦{' '}
              {showResults && (
                <div>
                  {isCorrect('7') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="absolSetting">
              <div className="elementAbsol1">15 + 4 - 16 + 11</div>
              <div className="elementAbsol6">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                />
                - 16 + 11 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['7'][1]}
                  onChange={e => handleChange('7', 1, e.target.value)}
                />
                + 11
                <div className="elementAbsol4">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['7'][2]}
                    onChange={e => handleChange('7', 2, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">
              ⑧{' '}
              {showResults && (
                <div>
                  {isCorrect('8') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="absolSetting">
              <div className="elementAbsol1">35 + 8 - 26 + 9</div>
              <div className="elementAbsol2">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                />
                - 26 + 9 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['8'][1]}
                  onChange={e => handleChange('8', 1, e.target.value)}
                />
                + 9
                <div className="elementAbsol5">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['8'][2]}
                    onChange={e => handleChange('8', 2, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
