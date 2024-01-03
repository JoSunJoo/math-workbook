import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

// 약분되는 인풋 답은 아무거나
const FifthGrade04: React.FC = () => {
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
    '9': ['', ''],
    '10': ['', ''],
    '11': ['', ''],
    '12': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['5', '18'],
    '2': ['7', '12'],
    '3': ['2', '5'],
    '4': ['5', '8'],
    '5': ['1', '2'],
    '6': ['1', '9'],
    '7': ['1', '6'],
    '8': ['2', '75'],
    '9': ['2', '7'],
    '10': ['1', '15'],
    '11': ['2', '3'],
    '12': ['3', '10'],
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
          분수를 곱한 후 약분이 되는 경우 약분하여 기약분수로 답을 써야 합니다.
          곱하기 전에 약분을 하면 곱셈이 더 간단해집니다.
        </div>
        <div className="quiz121Ex justifyCenter">
          <img
            className="imgSize311777"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-2-1.png`}
            alt=""
          />
          <img
            className="allowRight wefq4212"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
        </div>
      </div>
      <div className="quizRow3case fontSize25 afwef515">
        <div className="flexRow awefaweTOp">
          <p>① &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>
        <div className="flexRow awefaweTOp">
          <p>② &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>③ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
            <input type="text" className="averageInput abposweewr2" />
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
            <input type="text" className="averageInput abposweewr1" />
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>④ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑤ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
            <input type="text" className="averageInput abposweewr2" />

            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
            <input type="text" className="averageInput abposweewr1" />
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑥ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑦ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
            <input type="text" className="averageInput abposweewr2" />
            <input type="text" className="averageInput abposweewr1" />{' '}
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
            <input type="text" className="averageInput abposweewr2" />
            <input type="text" className="averageInput abposweewr1" />{' '}
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑧ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">25</div>
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑨ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">21</div>
            <input type="text" className="averageInput abposweewr2" />
            <input type="text" className="averageInput abposweewr1" />{' '}
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
            <input type="text" className="averageInput abposweewr2" />
            <input type="text" className="averageInput abposweewr1" />{' '}
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑩ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑪ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">14</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
            <input type="text" className="averageInput abposweewr2" />
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
            <input type="text" className="averageInput abposweewr1" />
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑫ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
            <input type="text" className="averageInput abposweewr2" />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
            <input type="text" className="averageInput abposweewr1" />
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade04;
