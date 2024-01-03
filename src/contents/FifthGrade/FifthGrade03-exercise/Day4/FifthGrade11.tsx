import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade11: React.FC = () => {
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
    '1': ['8', '14'],
    '2': ['15', '5'],
    '3': ['4', '9'],
    '4': ['16', '22'],
    '5': ['7', '5'],
    '6': ['8', '15'],
    '7': ['4', '6'],
    '8': ['8', '45'],
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
      <div className="quiz1 quiz3429">
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">①</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter asdfawe">★</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">7</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">12</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <img
              className="allowRight"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">9</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">24</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">24</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">②</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">4</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter asdfawe">★</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <img
              className="allowRight"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">30</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">8</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">30</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">③</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter asdfawe">★</div>

              <div className="divlineCSS7"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">9</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <img
              className="allowRight"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">8</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">④</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">4</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter asdfawe">★</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">11</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">24</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <img
              className="allowRight"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">12</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">48</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">48</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">⑤</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter asdfawe">★</div>
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
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">60</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">28</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">60</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">⑥</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter asdfawe">★</div>

              <div className="divlineCSS7"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">5</div>
              <div className="divlineCSS7"></div>
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
              <div className="textCenter">16</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">18</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">18</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">⑦</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter asdfawe">★</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <img
              className="allowRight"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">20</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">15</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">20</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['7'][1]}
              onChange={e => handleChange('7', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="asfw flexRow fontSize20 wef213">
          <p className="nuarfwa533">⑧</p>
          <div className="flexRow noWrap1">
            <div>(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter">5</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter asdfawe">★</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">9</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <img
              className="allowRight"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />
            <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
            <div className="fontSize20 marginLeft10px">
              <div className="textCenter awrfaw">♥</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">72</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize20 marginRighttic">
              <div className="textCenter">64</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">72</div>
            </div>
            <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
          <div className="fontSize25 flexRow afwe">
            <p className="asdfawe">★</p> =
            <input
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="fontSize25 flexRow ">
            <p className="awrfaw">♥</p> =
            <input
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade11;
