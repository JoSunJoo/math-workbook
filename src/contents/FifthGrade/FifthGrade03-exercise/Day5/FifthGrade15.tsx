import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade15: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['<'],
    '2': ['>'],
    '3': ['<'],
    '4': ['>'],
    '5': ['>'],
    '6': ['<'],
    '7': ['>'],
    '8': ['<'],
    '9': ['>'],
    '10': ['<'],
    '11': ['<'],
    '12': ['<'],
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
          두 분수의 크기만 비교할 경우에는 분모의 곱을 공통분모로 통분한다고
          생각하고, 분자의 크기만 비 교하면 분수의 크기를 쉽게 비교할 수
          있습니다.
        </div>
        <div></div>
        <div className="flexRow">
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">28</div>
            </div>
            <input
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>

            <div className="fontSize17 marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">14</div>
            </div>
            <input
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
          </div>
        </div>
      </div>
      {/* 문제시작  */}
      <div className="quizRow3case minwidwer900px">
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">①</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
          <input
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">9</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">②</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
          <input
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">③</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">11</div>
          </div>
          <input
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">7</div>
          </div>
          {/* 이미지때문에 보류  */}
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">④</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <input
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">10</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑤</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <input
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">3</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑥</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <input
            value={answers['6'][0]}
            onChange={e => handleChange('6', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">15</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑦</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">12</div>
          </div>
          <input
            value={answers['7'][0]}
            onChange={e => handleChange('7', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">5</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑧</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">9</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">20</div>
          </div>
          <input
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑨</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <input
            value={answers['9'][0]}
            onChange={e => handleChange('9', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">14</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑩</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <input
            value={answers['10'][0]}
            onChange={e => handleChange('10', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">13</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">25</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑪</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">17</div>
          </div>
          <input
            value={answers['11'][0]}
            onChange={e => handleChange('11', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑫</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">11</div>
          </div>
          <input
            value={answers['12'][0]}
            onChange={e => handleChange('12', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">18</div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={true} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade15;
