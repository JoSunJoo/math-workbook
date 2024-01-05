import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import ConfirmBtn from '../../utils/ConfirmBtn';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade12: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['20'],
    '2': ['2'],
    '3': ['2'],
    '4': ['44'],
    '5': ['65'],
    '6': ['107'],
    '7': ['30'],
    '8': ['15'],
    '9': ['8'],
    '10': ['144'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade12Answers' });
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
        key: 'fifthGrade12Answers',
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
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ①{' '}
              {showResults && (
                <div>
                  {isCorrect('1') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              72 - (13 + 39) ={' '}
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ②{' '}
              {showResults && (
                <div>
                  {isCorrect('2') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              36 ÷ (6 ÷ 3) ={' '}
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ③{' '}
              {showResults && (
                <div>
                  {isCorrect('3') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              112 ÷ (8 × 7) ={' '}
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ④{' '}
              {showResults && (
                <div>
                  {isCorrect('4') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              61 - (33 - 16) ={' '}
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ⑤{' '}
              {showResults && (
                <div>
                  {isCorrect('5') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              120 + (32 - 87) ={' '}
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ⑥{' '}
              {showResults && (
                <div>
                  {isCorrect('6') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              6 + (75 + 26) ={' '}
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ⑦{' '}
              {showResults && (
                <div>
                  {isCorrect('7') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              26 ÷ (13 × 15) ={' '}
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ⑧{' '}
              {showResults && (
                <div>
                  {isCorrect('8') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              37 + (13 - 9) ={' '}
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ⑨{' '}
              {showResults && (
                <div>
                  {isCorrect('9') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              96 ÷ (3 ÷ 4) ={' '}
              <input
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">
              ⑩{' '}
              {showResults && (
                <div>
                  {isCorrect('10') ? (
                    <div>
                      <img
                        className="answerImg1221"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg1221"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              72 × (8 ÷ 4) ={' '}
              <input
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
