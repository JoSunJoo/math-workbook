import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade05: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
    '8': ['', '', ''],
    '9': ['', '', ''],
    '10': ['', '', ''],
    '11': [''],
    '12': [''],
    '13': ['', '', ''],
    '14': ['', '', ''],
    '15': ['', ''],
    '16': ['', ''],
    '17': ['', ''],
    '18': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '54'],
    '2': ['1', '40'],
    '3': ['6', '49'],
    '4': ['1', '20'],
    '5': ['5', '33'],
    '6': ['7', '8'],
    '7': ['5', '14'],
    '8': ['2', '1', '4'],
    '9': ['2', '1', '4'],
    '10': ['2', '4', '7'],
    '11': ['10'],
    '12': ['14'],
    '13': ['1', '5', '6'],
    '14': ['3', '3', '5'],
    '15': ['7', '16'],
    '16': ['8', '45'],
    '17': ['1', '4'],
    '18': ['9', '25'],
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
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
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
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
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
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
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
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
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
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">15</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">22</div>
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
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
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
            <div className="textCenter">6</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>{' '}
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>{' '}
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
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">11</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">33</div>
            <div className="divlineCSS7"></div>
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
        <div className="flexRow fakwefTop">
          <p>⑨ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">5</div>{' '}
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">15</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">8</div>{' '}
          </div>
          <div className="marginlR10px">=</div>
          <input type="text" className="averageInput marginRight239" />
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑩ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">15</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">12</div>
            <div className="divlineCSS7"></div>
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
        <div className="flexRow fakwefTop barfaww">
          <p>⑪ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">8</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">15</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑫ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">49</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">24</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
          </div>
        </div>
        <div className="flexRow fakwefTop barfaww">
          <p>⑬ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">33</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">20</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">10</div>
            <div className="divlineCSS7"></div>
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
        <div className="flexRow fakwefTop barfaww">
          <p>⑭ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">25</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">45</div>
            <div className="divlineCSS7"></div>
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
        <div className="flexRow fakwefTop barfaww">
          <p>⑮ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">21</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">32</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑯ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">14</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">27</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">12</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">35</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑰ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">15</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">22</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">11</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">30</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input type="text" className="averageInput" />
            <div className="divlineCSS15"></div>
            <input type="text" className="averageInput" />
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑱ &nbsp;&nbsp;</p>
          <div className="quiz121Ex">
            <div className="textCenter">81</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">100</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
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

export default FifthGrade05;
