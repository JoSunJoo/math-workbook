import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade13: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', '', ''],
    '3': ['', '', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '1', '7'],
    '2': ['1', '2', '3'],
    '3': ['3', '5', '9'],
    '4': ['15', '56'],
    '5': ['1', '4'],
    '6': ['4', '21'],
    '7': ['5', '72'],
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
            <p>①&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="eaf4511">3</div>
            <div className="eaf4512">5</div>
            <div className="eaf4513">7</div>
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <input type="text" className="averageInput" />
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">=</div>
              <input type="text" className="averageInput marginRight239" />

              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>②&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="eaf4511">2</div>
            <div className="eaf4512">6</div>
            <div className="eaf4513">5</div>
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <input type="text" className="averageInput" />
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">=</div>
              <input type="text" className="averageInput marginRight239" />

              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>③&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="eaf4511">9</div>
            <div className="eaf4512">4</div>
            <div className="eaf4513">8</div>
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <input type="text" className="averageInput" />
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">=</div>
              <input type="text" className="averageInput marginRight239" />

              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>④&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="eaf4511">3</div>
            <div className="eaf4512">5</div>
            <div className="eaf4513">7</div>
            <div className="eaf4514">8</div>
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>⑤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="eaf4511">2</div>
            <div className="eaf4512">3</div>
            <div className="eaf4513">4</div>
            <div className="eaf4514">6</div>
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />{' '}
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>⑥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="eaf4511">2</div>
            <div className="eaf4512">4</div>
            <div className="eaf4513">6</div>
            <div className="eaf4514">7</div>
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_2.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />{' '}
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213">
            <p>⑦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="eaf4511">1</div>
            <div className="eaf4512">5</div>
            <div className="eaf4513">8</div>
            <div className="eaf4514">9</div>
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />{' '}
            <img
              className="imgawer"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-5-1_1.png`}
              alt=""
            />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />{' '}
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
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

export default FifthGrade13;
