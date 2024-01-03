import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade02: React.FC = () => {
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
    '1': ['6', '10'],
    '2': ['3', '4'],
    '3': ['3', '21'],
    '4': ['1', '6'],
    '5': ['48', '54'],
    '6': ['8', '12'],
    '7': ['10', '24'],
    '8': ['5', '8'],
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
      <div className="exampleBox312">
        <div className="fontSize17">
          분모와 분자에 0이 아닌 같은 수를 곱하면 크기가 같은 분수가 됩니다.
        </div>
        <div>
          <div className="flexRow fontSize25 alignCenter paddingExp">
            <div className="fontSize25">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">2</div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="textCenter flexRow">
                1 <div className="colorRedOnly">× 2</div>
              </div>
              <div className="divlineCSS2"></div>
              <div className="textCenter flexRow">
                2 <div className="colorRedOnly">× 2</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="textCenter flexRow">
                1 <div className="colorRedOnly">× 3</div>
              </div>
              <div className="divlineCSS2"></div>
              <div className="textCenter flexRow">
                2 <div className="colorRedOnly">× 3</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="textCenter flexRow">
                1<div className="colorRedOnly">× 4</div>
              </div>
              <div className="divlineCSS2"></div>
              <div className="textCenter flexRow">
                2<div className="colorRedOnly">× 4</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="textCenter flexRow">
                1<div className="colorRedOnly">× 5</div>
              </div>
              <div className="divlineCSS2"></div>
              <div className="textCenter flexRow">
                2<div className="colorRedOnly">× 5</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="marginbottomtic">……</div>
          </div>
        </div>
        <div className="fontSize17">
          분모와 분자를 0이 아닌 같은 수로 나누면 크기가 같은 분수가 됩니다.
        </div>
        <div>
          <div className="flexRow fontSize25 alignCenter paddingExp">
            <div className="fontSize25">
              <div className="textCenter">24</div>
              <div className="divlineCSS5"></div>
              <div className="textCenter">32</div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="textCenter flexRow">
                24 <div className="colorRedOnly">÷ 2</div>
              </div>
              <div className="divlineCSS4"></div>
              <div className="textCenter flexRow">
                32 <div className="colorRedOnly">÷ 2</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="textCenter flexRow">
                24 <div className="colorRedOnly">÷ 4</div>
              </div>
              <div className="divlineCSS4"></div>
              <div className="textCenter flexRow">
                32 <div className="colorRedOnly">÷ 4</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="textCenter flexRow">
                24<div className="colorRedOnly">÷ 8</div>
              </div>
              <div className="divlineCSS4"></div>
              <div className="textCenter flexRow">
                32<div className="colorRedOnly">÷ 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quiz31231">
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">①&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">3 × 2</div>
            <div className="divlineCSS2"></div>
            <div className="textCenter">5 × 2</div>
          </div>
          <div className="margintopbotom5px">=</div>
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
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">②&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">12</div>
            <div className="divlineCSS5"></div>
            <div className="textCenter">16</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">12 ÷ 4</div>
            <div className="divlineCSS4"></div>
            <div className="textCenter">16 ÷ 4</div>
          </div>
          <div className="margintopbotom5px">=</div>
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
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">③&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">1 × 3</div>
            <div className="divlineCSS2"></div>
            <div className="textCenter">7 × 3</div>
          </div>
          <div className="margintopbotom5px">=</div>
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
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">④&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">3</div>
            <div className="divlineCSS5"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">3 ÷ 3 </div>
            <div className="divlineCSS4"></div>
            <div className="textCenter">18 ÷ 3</div>
          </div>
          <div className="margintopbotom5px">=</div>
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
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑤&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">8</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">8 × 6</div>
            <div className="divlineCSS2"></div>
            <div className="textCenter">9 × 6</div>
          </div>
          <div className="margintopbotom5px">=</div>
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
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑥&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">16</div>
            <div className="divlineCSS5"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">16 ÷ 2</div>
            <div className="divlineCSS4"></div>
            <div className="textCenter">24 ÷ 2</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['6'][1]}
                onChange={e => handleChange('6', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑦&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">5</div>
            <div className="divlineCSS5"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">5 × 2</div>
            <div className="divlineCSS4"></div>
            <div className="textCenter">12 × 2</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['7'][1]}
                onChange={e => handleChange('7', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑧&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">25</div>
            <div className="divlineCSS5"></div>
            <div className="textCenter">40</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div className="textCenter">25 ÷ 5</div>
            <div className="divlineCSS4"></div>
            <div className="textCenter">40 ÷ 5</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['8'][1]}
                onChange={e => handleChange('8', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade02;
