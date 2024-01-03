import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade11: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
    '8': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['69', '69'],
    '2': ['60', '6'],
    '3': ['69', '15'],
    '4': ['63', '5'],
    '5': ['180', '180'],
    '6': ['12', '48'],
    '7': ['48', '3'],
    '8': ['9', '9'],
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
          <div className="quizCard1 flexCol">
            <p className="quizNumber1221">①</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              36 + 13 + 20 ={' '}
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18">
              36 + (13 + 20) ={' '}
              <input
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard2 flexCol">
            <p className="quizNumber1221">②</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              49 - 16 + 27 ={' '}
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18">
              49 - (16 + 27) ={' '}
              <input
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard3 flexCol">
            <p className="quizNumber1221">③</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              57 - 15 + 27 ={' '}
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18">
              57 - (15 + 27) ={' '}
              <input
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber1221">④</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              42 - 8 + 29 ={' '}
              <input
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18">
              42 - (8 + 29) ={' '}
              <input
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard2 flexCol">
            <p className="quizNumber1221">⑤</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              5 × 3 × 12 ={' '}
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18">
              5 × (3 × 12) ={' '}
              <input
                value={answers['5'][1]}
                onChange={e => handleChange('5', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard3 flexCol">
            <p className="quizNumber1221">⑥</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              96 ÷ 4 ÷ 2 ={' '}
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18">
              96 ÷ (4 ÷ 2) ={' '}
              <input
                value={answers['6'][1]}
                onChange={e => handleChange('6', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard1 flexCol">
            <p className="quizNumber1221">⑦</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              84 ÷ (7 × 4) ={' '}
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18 marginLeftZero">
              84 ÷ (7 × 4) ={' '}
              <input
                value={answers['7'][1]}
                onChange={e => handleChange('7', 1, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard2 flexCol">
            <p className="quizNumber1221">⑧</p>
            <div className="marginTop18 quizMargin1422 marginLeftZero">
              3 × 24 ÷ 8 ={' '}
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
            <div className="marginBottom18">
              3 × (24 ÷ 8) ={' '}
              <input
                value={answers['8'][1]}
                onChange={e => handleChange('8', 1, e.target.value)}
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

export default FifthGrade11;
