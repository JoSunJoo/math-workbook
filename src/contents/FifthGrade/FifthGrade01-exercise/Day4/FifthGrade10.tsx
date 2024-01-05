import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import ConfirmBtn from '../../utils/ConfirmBtn';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg from 'src/contents/FifthGrade/fifthImage/1-4-1.png';

const FifthGrade10: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['14'],
    '2': ['52'],
    '3': ['12'],
    '4': ['21'],
    '5': ['2'],
    '6': ['14'],
    '7': ['6'],
    '8': ['4'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade10Answers' });
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
        key: 'fifthGrade10Answers',
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
      <div className="quizAllLate">
        <div className="imgfake"></div>

        <img className="img141" src={fifthimg} alt="" />
        <div className="imgInputSet">
          <input
            className="imgInput1"
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('1') ? (
                <div>
                  <img className="answerImg3" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg3"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}
          <input
            className="imgInput2"
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('2') ? (
                <div>
                  <img className="answerImg4" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg4"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}
          <input
            className="imgInput3"
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('3') ? (
                <div>
                  <img className="answerImg5" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg5"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}
          <input
            className="imgInput4"
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('4') ? (
                <div>
                  <img className="answerImg6" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg6"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}
          <input
            className="imgInput5"
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('5') ? (
                <div>
                  <img className="answerImg1" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg7"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}
          <input
            className="imgInput6"
            value={answers['6'][0]}
            onChange={e => handleChange('6', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('6') ? (
                <div>
                  <img className="answerImg8" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg8"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}
          <input
            className="imgInput7"
            value={answers['7'][0]}
            onChange={e => handleChange('7', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('7') ? (
                <div>
                  <img className="answerImg9" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg9"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}
          <input
            className="imgInput8"
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
          />
          {showResults && (
            <div>
              {isCorrect('8') ? (
                <div>
                  <img className="answerImg10" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg10"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
        </div>
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
