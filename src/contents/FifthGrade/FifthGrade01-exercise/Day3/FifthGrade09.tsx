import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import ConfirmBtn from '../../utils/ConfirmBtn';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade09: React.FC = () => {
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
    '1': ['2'],
    '2': ['44'],
    '3': ['36'],
    '4': ['90'],
    '5': ['2'],
    '6': ['4'],
    '7': ['3'],
    '8': ['24'],
    '9': ['10'],
    '10': ['96'],
    '11': ['7'],
    '12': ['3'],
    '13': ['3'],
    '14': ['17'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade09Answers' });
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
        key: 'fifthGrade09Answers',
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
      <div className="quizAll">
        <div className="quiz333">
          <div className="quizCard1331 marginbottom0">
            <p className="quizNumber1235">
              ①
              {showResults && (
                <div>
                  {isCorrect('1') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              36 ÷ (9 × 2) ={' '}
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331 marginbottom0">
            <p className="quizNumber1235">
              ②
              {showResults && (
                <div>
                  {isCorrect('2') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              88 ÷ (8 ÷ 4) ={' '}
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ③
              {showResults && (
                <div>
                  {isCorrect('3') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              9 × (12 ÷ 3) ={' '}
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ④
              {showResults && (
                <div>
                  {isCorrect('4') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              3 × (6 × 5) ={' '}
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑤
              {showResults && (
                <div>
                  {isCorrect('5') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              24 ÷ (6 × 2) ={' '}
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑥
              {showResults && (
                <div>
                  {isCorrect('6') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              56 ÷ (42 ÷ 3) ={' '}
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑦
              {showResults && (
                <div>
                  {isCorrect('7') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              45 ÷ (3 × 5) ={' '}
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑧
              {showResults && (
                <div>
                  {isCorrect('8') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              6 × (60 ÷ 15) ={' '}
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑨
              {showResults && (
                <div>
                  {isCorrect('9') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              60 ÷ (30 ÷ 5) ={' '}
              <input
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑩
              {showResults && (
                <div>
                  {isCorrect('10') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              12 × (56 ÷ 7) ={' '}
              <input
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑪
              {showResults && (
                <div>
                  {isCorrect('11') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              98 ÷ (7 × 2) ={' '}
              <input
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑫
              {showResults && (
                <div>
                  {isCorrect('12') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              27 ÷ (72 ÷ 8) ={' '}
              <input
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑬
              {showResults && (
                <div>
                  {isCorrect('13') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              81 ÷ (54 ÷ 2) ={' '}
              <input
                value={answers['13'][0]}
                onChange={e => handleChange('13', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1331">
            <p className="quizNumber1235">
              ⑭
              {showResults && (
                <div>
                  {isCorrect('14') ? (
                    <div>
                      <img
                        className="answerImg181"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg181"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="marginTop18">
              68 ÷ (2 × 2) ={' '}
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
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade09;
