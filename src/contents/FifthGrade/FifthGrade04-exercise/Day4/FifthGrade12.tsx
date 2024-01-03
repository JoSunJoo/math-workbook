import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade12: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
    '8': [''],
    '9': ['', ''],
    '10': ['', ''],
    '11': ['', ''],
    '12': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '20'],
    '2': ['1', '7'],
    '3': ['1', '24'],
    '4': ['7', '30'],
    '5': ['1', '24'],
    '6': ['1', '60'],
    '7': ['7', '8'],
    '8': ['1'],
    '9': ['3', '5'],
    '10': ['3', '4'],
    '11': ['1', '3'],
    '12': ['3', '5'],
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
      <div className="quiz3 fontSize25">
        <div>
          {' '}
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>① &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>② &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>{' '}
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>③ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>④ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑤ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
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
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑥ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">16</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑦ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">15</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">30</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑧ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑨ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">18</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑩ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">15</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">28</div>
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
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑪ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">21</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑫ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">16</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">25</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">20</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
