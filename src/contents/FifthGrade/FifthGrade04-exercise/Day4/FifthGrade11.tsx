import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade11: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': [''],
    '3': ['', ''],
    '4': [''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '5'],
    '2': ['3'],
    '3': ['1', '2'],
    '4': ['7'],
    '5': ['3', '4'],
    '6': ['4', '5'],
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
      <div className="exampleBox312 ewwfar">
        <div className="fontSize17">
          자연수는 분모가 1인 분수로 생각하여 분모와 바로 약분한 후 분자끼리,
          분모끼리 곱합니다.
        </div>
        <div className="quiz121Ex justifyCenter">
          <img
            className="awef12368568"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-4-2.png`}
            alt=""
          />
        </div>
      </div>
      <div className="quiz fontSize25">
        <div>
          {' '}
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>① &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
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
          {' '}
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>② &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>③ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>④ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">12</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑤ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp marginwerq245288">
            <p>⑥ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">26</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">15</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">13</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade11;
