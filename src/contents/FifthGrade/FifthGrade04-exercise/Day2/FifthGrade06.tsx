import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade06: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '6'],
    '2': ['1', '6'],
    '3': ['1', '6'],
    '4': ['3', '7'],
    '5': ['14', '15'],
    '6': ['13', '22'],
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
      <div className="quiz3 fontSize25 qwe3929398">
        <div className="">
          <p className="iuaoerij">①</p>
          <div className="wef213 justifyCenter">
            <img
              className="awefaSize"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-2-3.png`}
              alt=""
            />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp3">
              <div>
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="iuaoerij">②</p>
          <div className="wef213 justifyCenter">
            <img
              className="awefaSize"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-2-3.png`}
              alt=""
            />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp7">
              <div>
                <div className="textCenter">5</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="">
          <p className="iuaoerij">③</p>
          <div className="wef213 justifyCenter">
            <img
              className="awefaSize"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-2-3.png`}
              alt=""
            />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp7">
              <div>
                <div className="textCenter">1</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="">
          <p className="iuaoerij">④</p>
          <div className="wef213 justifyCenter">
            <img
              className="awefaSize"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-2-3.png`}
              alt=""
            />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp6">
              <div>
                <div className="textCenter">15</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp3">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">7</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="">
          <p className="iuaoerij">⑤</p>
          <div className="wef213 justifyCenter">
            <img
              className="awefaSize"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-2-3.png`}
              alt=""
            />
            <div className="awefawrpos imgAbp5">
              <div>
                <div className="textCenter">7</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp6">
              <div>
                <div className="textCenter">5</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp3">
              <div>
                <div className="textCenter">8</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="">
          <p className="iuaoerij">⑥</p>
          <div className="wef213 justifyCenter">
            <img
              className="awefaSize"
              src={`${process.env.PUBLIC_URL}/fifthImage/4-2-3.png`}
              alt=""
            />
            <div className="awefawrpos imgAbp5">
              <div>
                <div className="textCenter">13</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">28</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp7">
              <div>
                <div className="textCenter">14</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">11</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
                <input type="text" className="averageInput" />
                <div className="divlineCSS15"></div>
                <input type="text" className="averageInput" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade06;
