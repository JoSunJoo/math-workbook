import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade12: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
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

  const handleGrade = () => {
    setShowResults(true);
  };
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz1">
          <div className="quizCard1 mpijo">
            <p className="quizNumber1433">①</p>
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
            <p className="quizNumber1433">②</p>
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
            <p className="quizNumber1433">③</p>
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
            <p className="quizNumber1433">④</p>
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
            <p className="quizNumber1433">⑤</p>
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
            <p className="quizNumber1433">⑥</p>
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
            <p className="quizNumber1433">⑦</p>
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
            <p className="quizNumber1433">⑧</p>
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
            <p className="quizNumber1433">⑨</p>
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
            <p className="quizNumber1433">⑩</p>
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
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
