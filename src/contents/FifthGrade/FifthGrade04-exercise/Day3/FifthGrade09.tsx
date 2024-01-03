import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade09: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', '', ''],
    '3': ['', '', ''],
    '4': ['', '', ''],
    '5': ['', '', ''],
    '6': ['', '', ''],
    '7': [''],
    '8': ['', '', ''],
    '9': ['', '', ''],
    '10': ['', '', ''],
    '11': ['', '', ''],
    '12': ['', '', ''],
    '13': ['', '', ''],
    '14': ['', '', ''],
    '15': ['', '', ''],
    '16': ['', '', ''],
    '17': ['', '', ''],
    '18': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '1', '2'],
    '2': ['3', '1', '2'],
    '3': ['2', '1', '4'],
    '4': ['2', '1', '2'],
    '5': ['2', '4', '7'],
    '6': ['1', '1', '2'],
    '7': ['1'],
    '8': ['4', '1', '2'],
    '9': ['3', '3', '4'],
    '10': ['3', '1', '2'],
    '11': ['4', '1', '2'],
    '12': ['5', '1', '3'],
    '13': ['8', '1', '3'],
    '14': ['4', '1', '2'],
    '15': ['3', '1', '2'],
    '16': ['2', '4', '5'],
    '17': ['4', '4', '5'],
    '18': ['8', '1', '8'],
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
      <div className="quizRow3case fontSize25">
        <div className="flexRow awefaweTOp">
          <p>① &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
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
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>③ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
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
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>④ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑤ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
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
          <p>⑥ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">=</div>
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
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
          </div>
        </div>
        <div className="flexRow awefaweTOp">
          <p>⑧ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">=</div>
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
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">=</div>
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
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
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
          <p>⑪ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">12</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
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
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑫ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">24</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑬ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑭ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑮ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑯ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">21</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑰ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">25</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">20</div>
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>⑱ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">39</div>
          </div>
          <div className="marginlR10px">=</div>
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

export default FifthGrade09;
