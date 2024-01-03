import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade05: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', ''],
    '2': ['', '', '', ''],
    '3': ['', '', '', ''],
    '4': ['', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['50', '97', '80', '97'],
    '2': ['50', '97', '80', '97'],
    '3': ['50', '97', '80', '97'],
    '4': ['50', '97', '80', '97'],
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
                17 + 33 + 47 ={' '}
                <input
                  type="text"
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="input1123"
                />{' '}
                + 47
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwtt">
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
                17 + (33 + 47) = 17 +{' '}
                <input
                  type="text"
                  value={answers['1'][2]}
                  onChange={e => handleChange('1', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line123"></div>
              </div>
              <div className="nottt1123 marginwtwt">
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
                68 - 29 - 16 ={' '}
                <input
                  type="text"
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="input1123"
                />{' '}
                - 16
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwt123t">
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
                68 - (29 - 16) = 68 -{' '}
                <div className="d-line123 line12222"></div>
                <input
                  type="text"
                  value={answers['2'][2]}
                  onChange={e => handleChange('2', 2, e.target.value)}
                  className="input1123"
                />
              </div>
              <div className="nottt1123 marginwtwtt12">
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
                75 - 35 + 26 ={' '}
                <input
                  type="text"
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="input1123"
                />{' '}
                + 26
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwtt">
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
                75 - (35 + 26) = 75 -{' '}
                <input
                  type="text"
                  value={answers['3'][2]}
                  onChange={e => handleChange('3', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line123"></div>
              </div>
              <div className="nottt1123 marginwtwt">
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
          {' '}
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">④</p>
            <div>
              <div className="nottt1123">
                13 + 27 - 19 ={' '}
                <input
                  type="text"
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="input1123"
                />{' '}
                - 19
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwtt13">
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
                13 + (27 - 19) = 13 +{' '}
                <input
                  type="text"
                  value={answers['4'][2]}
                  onChange={e => handleChange('4', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line123 line12222"></div>
              </div>
              <div className="nottt1123 marginwtwtt12">
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
      <ConfirmBtn type={true} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade05;
