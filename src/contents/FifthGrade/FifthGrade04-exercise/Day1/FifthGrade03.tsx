import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade03: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', '', ''],
    '8': ['', '', ''],
    '9': ['', '', ''],
    '10': ['', '', ''],
    '11': ['', '', ''],
    '12': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3', '20'],
    '2': ['12', '35'],
    '3': ['5', '24'],
    '4': ['14', '27'],
    '5': ['1', '20'],
    '6': ['3', '80'],
    '7': ['5', '4', '9'],
    '8': ['3', '3', '20'],
    '9': ['5', '17', '35'],
    '10': ['10', '17', '20'],
    '11': ['4', '5', '28'],
    '12': ['9', '7', '18'],
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
      <div className="quiz33131">
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>①&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize20">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>②&nbsp;&nbsp;&nbsp;&nbsp;</p>

          <div className="fontSize20">
            <div className="textCenter">6</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="fontSize20">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>③&nbsp;&nbsp;&nbsp;&nbsp;</p>

          <div className="fontSize20">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>④ &nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize20">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="fontSize20">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑤&nbsp;&nbsp;&nbsp;&nbsp;</p>

          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑥&nbsp;&nbsp;&nbsp;&nbsp;</p>

          <div className="fontSize20">
            <div className="textCenter">3</div>
            <div className="divlineCSS6"></div>
            <div className="textCenter">16</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑦&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="peiafoewijao">2</div>

          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="peiafoewijao">2</div>

          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <input type="text" className="averageInput331 marginRight239" />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑧&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="peiafoewijao">1</div>
          <div className="fontSize20">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="peiafoewijao">1</div>
          <div className="fontSize20">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <input type="text" className="averageInput331 marginRight239" />
          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑨&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="peiafoewijao">3</div>

          <div className="fontSize20">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="peiafoewijao">1</div>

          <div className="fontSize20">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <input type="text" className="averageInput331 marginRight239" />

          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑩&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="peiafoewijao">6</div>

          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="peiafoewijao">1</div>

          <div className="fontSize20">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <input type="text" className="averageInput331 marginRight239" />

          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑪&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="peiafoewijao">1</div>

          <div className="fontSize20">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="peiafoewijao">3</div>

          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <input type="text" className="averageInput331 marginRight239" />

          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic lawefkoiwerf">
          <p>⑫&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div className="peiafoewijao">4</div>

          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="peiafoewijao">2</div>

          <div className="fontSize20">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <img
            className="allowRight marginlR10px"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <input type="text" className="averageInput331 marginRight239" />

          <div className="fontSize20">
            <input type="text" className="averageInput331" />
            <div className="divlineCSS7"></div>
            <input type="text" className="averageInput331" />
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade03;
