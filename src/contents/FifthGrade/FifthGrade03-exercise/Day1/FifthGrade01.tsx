import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade01: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', '', '', ''],
    '2': ['', '', '', '', '', ''],
    '3': ['', '', '', '', '', ''],
    '4': ['', '', '', '', '', ''],
    '5': ['', '', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '3', '2', '6', '4', '12'],
    '2': ['1', '2', '2', '4', '4', '8'],
    '3': ['3', '4', '6', '8', '12', '16'],
    '4': ['1', '2', '3', '6', '5', '10'],
    '5': ['1', '3', '2', '6', '3', '9'],
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
        <div className="quiz3111">
          <div className="flexRow">
            <p className="fontSize25 number3111">①</p>
            <div className="box311all">
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_1.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['1'][0]}
                      onChange={e => handleChange('1', 0, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['1'][1]}
                      onChange={e => handleChange('1', 1, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_2.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['1'][2]}
                      onChange={e => handleChange('1', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['1'][3]}
                      onChange={e => handleChange('1', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_3.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['1'][4]}
                      onChange={e => handleChange('1', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['1'][5]}
                      onChange={e => handleChange('1', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <p className="fontSize25 number3112">②</p>
            <div className="box311all">
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_4.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['2'][0]}
                      onChange={e => handleChange('2', 0, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['2'][1]}
                      onChange={e => handleChange('2', 1, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_5.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['2'][2]}
                      onChange={e => handleChange('2', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['2'][3]}
                      onChange={e => handleChange('2', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_6.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['2'][4]}
                      onChange={e => handleChange('2', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['2'][5]}
                      onChange={e => handleChange('2', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <p className="fontSize25 number3111">③</p>
            <div className="box311all">
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_7.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['3'][0]}
                      onChange={e => handleChange('3', 0, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['3'][1]}
                      onChange={e => handleChange('3', 1, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_8.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['3'][2]}
                      onChange={e => handleChange('3', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['3'][3]}
                      onChange={e => handleChange('3', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_9.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['3'][4]}
                      onChange={e => handleChange('3', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['3'][5]}
                      onChange={e => handleChange('3', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz3112">
          <div className="flexRow">
            <p className="fontSize25 number3113">④</p>
            <div className="box311all box31145 flexCol">
              <div className="flexRow marginBottom18 justifyCenter">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_10.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['4'][0]}
                      onChange={e => handleChange('4', 0, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['4'][1]}
                      onChange={e => handleChange('4', 1, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow marginBottom18 justifyCenter">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_11.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['4'][2]}
                      onChange={e => handleChange('4', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['4'][3]}
                      onChange={e => handleChange('4', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow marginBottom18 justifyCenter">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_12.png`}
                  alt=""
                  className="imgSize3111"
                />
                <div>
                  <div>
                    <input
                      value={answers['4'][4]}
                      onChange={e => handleChange('4', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['4'][5]}
                      onChange={e => handleChange('4', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <p className="fontSize25 number3113">⑤</p>
            <div className="box311all box31145 flexCol">
              <div className="flexRow marginBottom18 justifyCenter">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_13.png`}
                  alt=""
                  className="imgSize3115"
                />
                <div>
                  <div>
                    <input
                      value={answers['5'][0]}
                      onChange={e => handleChange('5', 0, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['5'][1]}
                      onChange={e => handleChange('5', 1, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow marginBottom18 justifyCenter justifyCenter">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_14.png`}
                  alt=""
                  className="imgSize3115"
                />
                <div>
                  <div>
                    <input
                      value={answers['5'][2]}
                      onChange={e => handleChange('5', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['5'][3]}
                      onChange={e => handleChange('5', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow marginBottom18 justifyCenter justifyCenter">
                <img
                  src={`${process.env.PUBLIC_URL}/fifthImage/3-1-1_15.png`}
                  alt=""
                  className="imgSize3115"
                />
                <div>
                  <div>
                    <input
                      value={answers['5'][4]}
                      onChange={e => handleChange('5', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      value={answers['5'][5]}
                      onChange={e => handleChange('5', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
