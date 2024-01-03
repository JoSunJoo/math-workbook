import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade03: React.FC = () => {
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
    '13': ['', ''],
    '14': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '12'],
    '2': ['18', '4'],
    '3': ['3', '30'],
    '4': ['6', '12'],
    '5': ['9', '30'],
    '6': ['9', '8'],
    '7': ['15', '48'],
    '8': ['6', '2'],
    '9': ['35', '70'],
    '10': ['8', '5'],
    '11': ['10', '84'],
    '12': ['15', '4'],
    '13': ['33', '80'],
    '14': ['10', '3'],
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
      <div className="quiz31231">
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">①&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">3</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">②&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">36</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">48</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">3</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">③&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">5</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">④&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">12</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">36</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">4</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑤&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">18</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['5'][1]}
                onChange={e => handleChange('5', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑥&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">54</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">72</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">6</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['6'][1]}
                onChange={e => handleChange('6', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑦&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">40</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">18</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['7'][1]}
                onChange={e => handleChange('7', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑧&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">30</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">60</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">1</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['8'][1]}
                onChange={e => handleChange('8', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑨&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">7</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">50</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">49</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['9'][1]}
                onChange={e => handleChange('9', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑩&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">56</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">70</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">4</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['10'][1]}
                onChange={e => handleChange('10', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑪&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">5</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">35</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['11'][1]}
                onChange={e => handleChange('11', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑫&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">75</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">100</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">20</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">3</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['12'][1]}
                onChange={e => handleChange('12', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑬&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">11</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">16</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['13'][0]}
                onChange={e => handleChange('13', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">48</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">55</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['13'][1]}
                onChange={e => handleChange('13', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px">⑭&nbsp;&nbsp;&nbsp;</p>
          <div className="fontSize25">
            <div className="textCenter">50</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">75</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                value={answers['14'][0]}
                onChange={e => handleChange('14', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">2</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                value={answers['14'][1]}
                onChange={e => handleChange('14', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade03;
