import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade07: React.FC = () => {
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
    '1': ['4', '15'],
    '2': ['16', '6'],
    '3': ['18', '44'],
    '4': ['16', '15'],
    '5': ['6', '63'],
    '6': ['28', '39'],
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
          분수의 분모를 같게 하는 것을 통분한다고 하며 통분한 분모를
          공통분모라고 합니다.
        </div>
        <div>
          <div className="flexRow fontSize17 alignCenter paddingExp">
            <div>
              <div className="fontSize17">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">2</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">5</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">6</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">7</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">8</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">16</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">9</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">18</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>......
          </div>
        </div>
        <div className="flexRow">
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div>과</div>
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="fontSize17">
            를 분모가 같은 분수끼리 짝지어 통분하면
          </div>
        </div>
        <div className="flexRow">
          <div className="flexRow fontSize17">
            <div>(</div>
            <div className="fontSize17 marginLeft10px">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div>)</div>
            <div className="commaHeight">,</div>
          </div>
          <div className="flexRow fontSize17">
            <div>(</div>
            <div className="fontSize17 marginLeft10px">
              <div className="textCenter">6</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">8</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">12</div>
            </div>
            <div>)</div>
            <div className="commaHeight">,</div>
          </div>
          <div className="flexRow fontSize17">
            <div>(</div>
            <div className="fontSize17 marginLeft10px">
              <div className="textCenter">9</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">18</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">12</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">18</div>
            </div>
            <div>)</div>
            <div className="commaHeight">,</div>
            <div>... ... 이 됩니다.</div>
          </div>
        </div>
      </div>
      <div className="quiz33131">
        <div className="flexRow fontSize20 marginTop18">
          <p>①&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">18</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18">
          <p>②&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">28</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">28</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18">
          <p>③&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">11</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18">
          <p>④ &nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">8</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">18</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18">
          <p>⑤&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">72</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">72</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18">
          <p>⑥&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">13</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">20</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
