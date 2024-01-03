import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade08: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': [''],
    '5': [''],
    '6': ['', '', ''],
    '7': [''],
    '8': ['', '', ''],
    '9': ['', '', ''],
    '10': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '3', '4'],
    '2': ['2', '5'],
    '3': ['1', '2'],
    '4': ['4'],
    '5': ['8'],
    '6': ['6', '1', '4'],
    '7': ['9'],
    '8': ['3', '1', '5'],
    '9': ['5', '5', '6'],
    '10': ['1', '1', '6'],
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
          자연수는 분모가 1인 분수로 생각하여 분모와 바로 약분한 후 분자끼리,
          분모끼리 곱합니다
        </div>
        <div className="quiz121Ex justifyCenter">
          <img
            className="imgSize3111"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-3-2.png`}
            alt=""
          />
        </div>
      </div>
      <div className="quiz333 fontSize25">
        <div className="flexRow awefaweTOp">
          <p>① &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>
        <div className="flexRow awefaweTOp">
          <p>② &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
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
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑤ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">12</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
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
          <div className="marginlR10px">=</div>{' '}
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑦ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">21</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
          </div>
        </div>
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
          <div className="marginlR10px">=</div>{' '}
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑨ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">30</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">36</div>
          </div>
          <div className="marginlR10px">=</div>{' '}
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑩ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">48</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">56</div>
          </div>
          <div className="marginlR10px">=</div>{' '}
          <input type="text" className="averageInput marginRight239" />
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

export default FifthGrade08;
