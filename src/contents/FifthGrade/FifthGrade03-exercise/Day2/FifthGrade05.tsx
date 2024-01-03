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
    '8': ['', ''],
    '9': ['', ''],
    '10': ['', ''],
    '11': ['', ''],
    '12': ['', ''],
    '13': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '3'],
    '2': ['3', '4'],
    '3': ['1', '5'],
    '4': ['3', '4'],
    '5': ['1', '3'],
    '6': ['3', '4'],
    '7': ['8', '9'],
    '8': ['25', '32'],
    '9': ['1', '2'],
    '10': ['2', '3'],
    '11': ['1', '4'],
    '12': ['1', '9'],
    '13': ['1', '3'],
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
      <div className="quizAll">
        <div className="quiz1 afwea">
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231"></p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">12</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">36</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <div className="textCenter">6</div>
                  <div className="divlineCSS divlineRedColor"></div>
                  <div className="textCenter">18</div>
                </div>
              </div>
              <div className="margintopbotom5px colorRedOnly322">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <div className="textCenter">3</div>
                  <div className="divlineCSS divlineRedColor"></div>
                  <div className="textCenter">9</div>
                </div>
              </div>
              <div className="margintopbotom5px colorRedOnly322">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <div className="textCenter">1</div>
                  <div className="divlineCSS divlineRedColor"></div>
                  <div className="textCenter">3</div>
                </div>
              </div>
              <div className="margintopbotom5px"></div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">①</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">8</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">12</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['1'][0]}
                    onChange={e => handleChange('1', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['1'][1]}
                    onChange={e => handleChange('1', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">②</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">6</div>
                  <div className="divlineCSS1"></div>
                  <div className="textCenter">8</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['2'][0]}
                    onChange={e => handleChange('2', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['2'][1]}
                    onChange={e => handleChange('2', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">③</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">10</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">50</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['3'][0]}
                    onChange={e => handleChange('3', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['3'][1]}
                    onChange={e => handleChange('3', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">④</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">36</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">48</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['4'][0]}
                    onChange={e => handleChange('4', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['4'][1]}
                    onChange={e => handleChange('4', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑤</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">24</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">72</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['5'][0]}
                    onChange={e => handleChange('5', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['5'][1]}
                    onChange={e => handleChange('5', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑥</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">60</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">80</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['6'][0]}
                    onChange={e => handleChange('6', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['6'][1]}
                    onChange={e => handleChange('6', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑦</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">64</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">72</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['7'][0]}
                    onChange={e => handleChange('7', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['7'][1]}
                    onChange={e => handleChange('7', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑧</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">50</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">64</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['8'][0]}
                    onChange={e => handleChange('8', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['8'][1]}
                    onChange={e => handleChange('8', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑨</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">42</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">84</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['9'][0]}
                    onChange={e => handleChange('9', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['9'][1]}
                    onChange={e => handleChange('9', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑩</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">48</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">72</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['10'][0]}
                    onChange={e => handleChange('10', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['10'][1]}
                    onChange={e => handleChange('10', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑪</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">25</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">100</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['11'][0]}
                    onChange={e => handleChange('11', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['11'][1]}
                    onChange={e => handleChange('11', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑫</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">16</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">144</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['12'][0]}
                    onChange={e => handleChange('1', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['12'][1]}
                    onChange={e => handleChange('1', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑬</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">18</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">54</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['13'][0]}
                    onChange={e => handleChange('13', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['13'][1]}
                    onChange={e => handleChange('13', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade05;
