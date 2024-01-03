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
    '5': ['', '', '', '', ''],
    '6': ['', '', '', '', ''],
    '7': ['', '', '', '', ''],
    '8': ['', '', '', '', ''],
    '9': ['', '', '', '', ''],
    '10': ['', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3', '4'],
    '2': ['7', '8'],
    '3': ['1', '2'],
    '4': ['1', '2'],
    '5': ['8', '5', '1', '3', '5'],
    '6': ['25', '4', '6', '1', '4'],
    '7': ['5', '3', '1', '2', '3'],
    '8': ['16', '5', '3', '1', '5'],
    '9': ['9', '2', '4', '1', '2'],
    '10': ['27', '2', '13', '1', '2'],
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
          분수와 자연수의 곱셈은 분모를 그대로 적고, 분자와 자연수를 곱합니다.
        </div>
        <div className="quiz121Ex justifyCenter">
          <img
            className="imgSize3111"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-3-1.png`}
            alt=""
          />
        </div>
        <div className="flexRow">
          <div className="">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="flexRow">
            은
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">4</div>
            </div>
            이 3개입니다.&nbsp;&nbsp;{' '}
            <div className="">
              <div className="textCenter">3</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">4</div>
            </div>
            에 3을 곱하면{' '}
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">4</div>
            </div>
            이 9개가 됩니다.
          </div>
        </div>
        <div>
          단, 마지막 답은 꼭 기약분수로 쓰고, 가분수 는 대분수로 고칩니다.{' '}
        </div>
      </div>
      <div className="quiz333 fontSize25">
        <div className="flexRow awefaweTOp">
          <p>① &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
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
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
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
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>④ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑤ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginawerq" />

          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>
        <div className="flexRow awefaweTOp">
          <p>⑥ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginawerq" />

          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑦ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginawerq" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑧ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginawerq" />

          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑨ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">21</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginawerq" />

          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑩ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">22</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">33</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginawerq" />

          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
