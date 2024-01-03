import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade07: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', '', ''],
    '2': ['', '', '', '', ''],
    '3': ['', '', '', '', ''],
    '4': ['', '', '', '', ''],
    '5': ['', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3', '6', '9', '12', '15'],
    '2': ['4', '8', '12', '16', '20'],
    '3': ['6', '12', '18', '24', '30'],
    '4': ['8', '16', '24', '32', '40'],
    '5': ['10', '20', '30', '40', '50'],
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
        <div className="quiz211">
          <div className="conclusion">
            <p>
              <span className="fontSize20">
                어떤 수를 1배, 2배, 3배, 4배, …… 한 수를 그 수의 배수라고
                합니다.
              </span>
            </p>
            <p className="fontSize20">5를 1배, 2배, 3배, 4배, …… 하면</p>
          </div>
          <div className="division-examples">
            <div className="example">
              5 × 1 = <div>5</div>
            </div>
            <div className="example">
              5 × 2 = <div>10</div>
            </div>
            <div className="example">
              5 × 3 = <div>15</div>
            </div>
            <div className="example">
              5 × 4 = <div>20</div>
            </div>
            <div className="example">
              5 × 5 = <div>25</div>
            </div>
            <div className="example">
              5 × 6 = <div>30</div>
            </div>
          </div>
          <div className="conclusion">
            <p className="fontSize20">
              5, 10, 15, 20, 25, 30, …… 은 5의 배수입니다
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="flexRow justifyCenter noWrap1 marginTop231">
              <p className="fontSize25 marginRight231">①</p>
              <div className="fontSize25">3의 배수</div>
              <img
                className="allowRight"
                src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                alt=""
              />
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['1'][2]}
                onChange={e => handleChange('1', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['1'][3]}
                onChange={e => handleChange('1', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['1'][4]}
                onChange={e => handleChange('1', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>
            <div className="flexRow justifyCenter noWrap1 marginTop231">
              <p className="fontSize25 marginRight231">②</p>
              <div className="fontSize25">4의 배수</div>
              <img
                className="allowRight"
                src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                alt=""
              />
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['2'][2]}
                onChange={e => handleChange('2', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['2'][3]}
                onChange={e => handleChange('2', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['2'][4]}
                onChange={e => handleChange('2', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>{' '}
            <div className="flexRow justifyCenter noWrap1 marginTop231">
              <p className="fontSize25 marginRight231">③</p>
              <div className="fontSize25">6의 배수</div>
              <img
                className="allowRight"
                src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                alt=""
              />
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['3'][2]}
                onChange={e => handleChange('3', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['3'][3]}
                onChange={e => handleChange('3', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['3'][4]}
                onChange={e => handleChange('3', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>{' '}
            <div className="flexRow justifyCenter noWrap1 marginTop231">
              <p className="fontSize25 marginRight231">④</p>
              <div className="fontSize25">8의 배수</div>
              <img
                className="allowRight"
                src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                alt=""
              />
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['4'][2]}
                onChange={e => handleChange('4', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['4'][3]}
                onChange={e => handleChange('4', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['4'][4]}
                onChange={e => handleChange('4', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>{' '}
            <div className="flexRow justifyCenter noWrap1 marginTop231">
              <p className="fontSize25 marginRight231">⑤</p>
              <div className="fontSize25">10의 배수</div>
              <img
                className="allowRight"
                src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
                alt=""
              />
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['5'][1]}
                onChange={e => handleChange('5', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['5'][2]}
                onChange={e => handleChange('5', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['5'][3]}
                onChange={e => handleChange('5', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                value={answers['5'][4]}
                onChange={e => handleChange('5', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
