import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade03: React.FC = () => {
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
    '11': [''],
    '12': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['24'],
    '2': ['30'],
    '3': ['13'],
    '4': ['10'],
    '5': ['24'],
    '6': ['30'],
    '7': ['6'],
    '8': ['77'],
    '9': ['82'],
    '10': ['30'],
    '11': ['256'],
    '12': ['3'],
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
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">①</p>
              37 + 15 + 28 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">②</p>
              17 + 12 - 8 - 15 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">③</p>
              15 - 8 + 23 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">④</p>
              45 - 16 + 55 - 7 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
              />
            </div>
          </div>

          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑤</p>4 + 17 - 8 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑥</p>
              110 - 56 -7 + 35 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑦</p>
              15 × 6 ÷ 9 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑧</p>
              48 ÷ 4 × 5 ÷ 2 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
              />
            </div>
          </div>

          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑨</p>8 × 12 ÷ 4 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑩</p>
              56 ÷ 7 × 8 × 4 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑪</p>
              36 ÷ 6 × 5 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">⑫</p>5 × 14 × 3 ÷ 70 ={' '}
              <input
                className="inputSize1"
                type="text"
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade03;
