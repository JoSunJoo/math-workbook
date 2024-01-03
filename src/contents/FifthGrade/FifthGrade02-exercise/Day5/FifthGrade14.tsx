import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade14: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['약수', '배수'],
    '2': ['약수', '배수'],
    '3': ['배수', '약수'],
    '4': ['배수', '배수'],
    '5': ['배수', '약수'],
    '6': ['배수', '약수'],
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
        <div className="quiz1 quizMargin2 lakwerfj">
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">①</p>
                <div className="fif251numb">1 × 16 = 16</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">1은 16의&nbsp;&nbsp;</div>
                <input
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">16은 1의&nbsp;&nbsp;</div>
                <input
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">②</p>
                <div className="fif251numb">4 × 6 = 24</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">4는 24의&nbsp;&nbsp;</div>
                <input
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">24는 6의&nbsp;&nbsp;</div>
                <input
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">③</p>
                <div className="fif251numb">8 × 8 = 64</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">64는 8의&nbsp;&nbsp;</div>
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">8은 64의&nbsp;&nbsp;</div>
                <input
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">④</p>
                <div className="fif251numb">15 × 5 = 75</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">75는 5의&nbsp;&nbsp;</div>
                <input
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">75는 15의&nbsp;&nbsp;</div>
                <input
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">⑤</p>
                <div className="fif251numb">11 × 88 = 88</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">88은 11의&nbsp;&nbsp;</div>
                <input
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">11은 88의&nbsp;&nbsp;</div>
                <input
                  value={answers['5'][1]}
                  onChange={e => handleChange('5', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">⑥</p>
                <div className="fif251numb">4 × 25 = 100</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">100은 25의 &nbsp;&nbsp;</div>
                <input
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">4는 100의&nbsp;&nbsp;</div>
                <input
                  value={answers['6'][1]}
                  onChange={e => handleChange('6', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <ConfirmBtn type={true} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade14;
