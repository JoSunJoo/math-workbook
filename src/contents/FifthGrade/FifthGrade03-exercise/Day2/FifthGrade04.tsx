import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade04: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3'],
    '2': ['1'],
    '3': ['5'],
    '4': ['2'],
    '5': ['1'],
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
          분모와 분자를 1을 제외한 그들의 공약수로 나누는 것을 약분한다고
          합니다.
        </div>
        <div>
          <div className="flexRow fontSize25 alignCenter paddingExp">
            <div className="fontSize25">
              <div className="textCenter">8</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="margintopbotom5px fontSize17 marginRight231">
              약분하기
            </div>
            <img
              className="allowRight marginRight231"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />
            <div className="fontSize25">
              <div className="justifyCenter flexRow">
                8 <div className="colorRedOnly">÷ 2</div>
              </div>
              <div className="divlineCSS4"></div>
              <div className="justifyCenter flexRow">
                12 <div className="colorRedOnly">÷ 2</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25 marginRight231">
              <div className="fontSize25 marginRight231">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <div className="fontSize25">
              <div className="justifyCenter flexRow">
                8 <div className="colorRedOnly">÷ 4</div>
              </div>
              <div className="divlineCSS4"></div>
              <div className="justifyCenter flexRow">
                12 <div className="colorRedOnly">÷ 4</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="fontSize25">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="fontSize17">
            와 같이 분모와 분자의 공약수가 1뿐이어서 더 이상 약분할 수 없는
            분수를 기약분수라고 합니다.
          </div>
        </div>
      </div>
      <div className="quiz32131">
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">8</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">11</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">15</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">4</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">19</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">9</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">24</div>
              </div>
            </div>
          </div>
          <div>
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">7</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">6</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">15</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">8</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">32</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">49</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">56</div>
              </div>
            </div>
          </div>
          <div>
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">7</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">9</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">16</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">27</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">9</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">35</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">17</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">60</div>
              </div>
            </div>
          </div>
          <div>
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">2</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">11</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">22</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">13</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">16</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">39</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">91</div>
              </div>
            </div>
          </div>
          <div>
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">4</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">5</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">20</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">14</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">61</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">17</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">51</div>
              </div>
            </div>
          </div>
          <div>
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade04;
