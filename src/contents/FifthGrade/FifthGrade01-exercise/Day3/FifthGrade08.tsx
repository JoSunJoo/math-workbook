import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade08: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', ''],
    '2': ['', '', '', ''],
    '3': ['', '', '', ''],
    '4': ['', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['21', '84', '12', '84'],
    '2': ['8', '4', '4', '16'],
    '3': ['18', '36', '10', '9'],
    '4': ['60', '10', '2', '10'],
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
      <div className="grid1222">
        <div className="gridyoso1224">
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">①</p>
            <div>
              <div className="nottt1123">
                7 × 3 × 4 ={' '}
                <input
                  type="text"
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="input1123"
                />{' '}
                × 4<div className="d-line126 line13225"></div>
              </div>
              <div className="nottt1123 awefaw">
                ={' '}
                <input
                  type="text"
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                7 × (3 × 4) = 7 ×{' '}
                <input
                  type="text"
                  value={answers['1'][2]}
                  onChange={e => handleChange('1', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line126 line13226"></div>
              </div>
              <div className="nottt1123 awefaw3311">
                ={' '}
                <input
                  type="text"
                  value={answers['1'][3]}
                  onChange={e => handleChange('1', 3, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridyoso1222">
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">②</p>
            <div>
              <div className="nottt1123">
                64 ÷ 8 ÷ 2 ={' '}
                <input
                  type="text"
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="input1123"
                />{' '}
                ÷ 2<div className="d-line123 line13223"></div>
              </div>
              <div className="nottt1123 awefaw33132">
                ={' '}
                <input
                  type="text"
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                64 ÷ (8 ÷ 2) = 64 ÷{' '}
                <input
                  type="text"
                  value={answers['2'][2]}
                  onChange={e => handleChange('2', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line126 line13222"></div>
              </div>
              <div className="nottt1123 awefaw3312">
                ={' '}
                <input
                  type="text"
                  value={answers['2'][3]}
                  onChange={e => handleChange('2', 3, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridyoso1223">
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">③</p>
            <div>
              <div className="nottt1123">
                90 ÷ 5 × 2 ={' '}
                <input
                  type="text"
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="input1123"
                />{' '}
                × 2<div className="d-line123 line13223"></div>
              </div>
              <div className="nottt1123 awefaw33132">
                ={' '}
                <input
                  type="text"
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                90 ÷ (5 × 2) = 90 ÷{' '}
                <input
                  type="text"
                  value={answers['3'][2]}
                  onChange={e => handleChange('3', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line126 line13222"></div>
              </div>
              <div className="nottt1123 awefaw3312">
                ={' '}
                <input
                  type="text"
                  value={answers['3'][3]}
                  onChange={e => handleChange('3', 3, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridyoso1224">
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">④</p>
            <div>
              <div className="nottt1123">
                5 × 12 ÷ 6 ={' '}
                <input
                  type="text"
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="input1123"
                />{' '}
                ÷ 6<div className="d-line126 line13230"></div>
              </div>
              <div className="nottt1123 awefaw331324">
                ={' '}
                <input
                  type="text"
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                5 × (12 ÷ 6) = 5 ×{' '}
                <input
                  type="text"
                  value={answers['4'][2]}
                  onChange={e => handleChange('4', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line126 line13232"></div>
              </div>
              <div className="nottt1123 awefaw331">
                ={' '}
                <input
                  type="text"
                  value={answers['4'][3]}
                  onChange={e => handleChange('4', 3, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade08;
