import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade09: React.FC = () => {
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

  const handleGrade = () => {
    setShowResults(true);
  };
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz333">
          <div className="quizCard1331 marginbottom0">
            <p className="quizNumber1235">①</p>
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
            <p className="quizNumber1235">②</p>
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
            <p className="quizNumber1235">③</p>
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
            <p className="quizNumber1235">④</p>
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
            <p className="quizNumber1235">⑤</p>
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
            <p className="quizNumber1235">⑥</p>
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
            <p className="quizNumber1235">⑦</p>
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
            <p className="quizNumber1235">⑧</p>
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
            <p className="quizNumber1235">⑨</p>
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
            <p className="quizNumber1235">⑩</p>
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
            <p className="quizNumber1235">⑪</p>
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
            <p className="quizNumber1235">⑫</p>
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
            <p className="quizNumber1235">⑬</p>
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
            <p className="quizNumber1235">⑭</p>
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
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade09;
