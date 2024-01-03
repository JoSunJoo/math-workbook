import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade14: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', '', ''],
    '3': ['', ''],
    '4': ['', '', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['28', '81'],
    '2': ['2', '1', '4'],
    '3': ['1', '5'],
    '4': ['1', '1', '3'],
    '5': ['2', '15'],
    '6': ['5', '36'],
    '7': ['3', '8'],
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
      <div className="quiz fontSize25">
        <div className="quizNumber125787">
          <div className="flexRow wef213">
            <p>
              ①&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className="eaf4515">
              {' '}
              <div className="quiz121Ex">
                <div className="textCenter">7</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <img
              className="aweijaow"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>
              ②
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className="eaf4515">
              {' '}
              <div className="quiz121Ex">
                <div className="textCenter">9</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">11</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">11</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <img
              className="aweijaow"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <input type="text" className="averageInput marginRight239" />

              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>
              ③&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className="eaf4515">
              {' '}
              <div className="quiz121Ex">
                <div className="textCenter">7</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">7</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <img
              className="aweijaow"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>
              ④&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className="eaf4515">
              {' '}
              <div className="quiz121Ex">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">2</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">6</div>
              </div>
            </div>
            <img
              className="aweijaow"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <input type="text" className="averageInput marginRight239" />

              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>
              ⑤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className="eaf4515">
              {' '}
              <div className="quiz121Ex">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">9</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">10</div>
              </div>
            </div>

            <img
              className="aweijaow"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>
              ⑥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className="eaf4515">
              {' '}
              <div className="quiz121Ex">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">5</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <img
              className="aweijaow"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>
              ⑦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <div className="eaf4515">
              {' '}
              <div className="quiz121Ex">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <div className="textCenter">1</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">10</div>
              </div>
            </div>

            <img
              className="aweijaow"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-2.png`}
              alt=""
            />

            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade14;
