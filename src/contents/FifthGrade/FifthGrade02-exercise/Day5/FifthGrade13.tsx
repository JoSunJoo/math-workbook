import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade13: React.FC = () => {
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
    '1': ['배수', '약수'],
    '2': ['약수', '배수'],
    '3': ['약수', '배수'],
    '4': ['배수', '배수'],
    '5': ['약수', '약수'],
    '6': ['배수', '약수'],
    '7': ['약수', '배수'],
    '8': ['약수', '배수'],
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
                <div className="fif251numb">5 × 4 = 20</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">20은 5의&nbsp;&nbsp;</div>
                <input
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">4는 20의&nbsp;&nbsp;</div>
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
                <div className="fif251numb">9 × 6 = 54</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">6은 54의&nbsp;&nbsp;</div>
                <input
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">54는 9의&nbsp;&nbsp;</div>
                <input
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">③</p>
                <div className="fif251numb">11 × 7 = 77</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">11은 77의&nbsp;&nbsp;</div>
                <input
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">77은 7의&nbsp;&nbsp;</div>
                <input
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
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
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">75는 15의&nbsp;&nbsp;</div>
                <input
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">⑤</p>
                <div className="fif251numb">12 × 9 = 108</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">9는 108의&nbsp;&nbsp;</div>
                <input
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">12는 108의&nbsp;&nbsp;</div>
                <input
                  value={answers['5'][1]}
                  onChange={e => handleChange('5', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">⑥</p>
                <div className="fif251numb">10 × 11 = 110</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">110은 10의 &nbsp;&nbsp;</div>
                <input
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">11은 110의&nbsp;&nbsp;</div>
                <input
                  value={answers['6'][1]}
                  onChange={e => handleChange('6', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">⑦</p>
                <div className="fif251numb">16 × 14 = 224</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">16은 224의&nbsp;&nbsp;</div>
                <input
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">224는 14의&nbsp;&nbsp;</div>
                <input
                  value={answers['7'][1]}
                  onChange={e => handleChange('7', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">⑧</p>
                <div className="fif251numb">17 × 18 = 06</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">17은 306의&nbsp;&nbsp;</div>
                <input
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">306은 18의&nbsp;&nbsp;</div>
                <input
                  value={answers['8'][1]}
                  onChange={e => handleChange('8', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
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

export default FifthGrade13;
