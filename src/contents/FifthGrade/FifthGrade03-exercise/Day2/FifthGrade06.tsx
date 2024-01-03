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
    '7': ['', ''],
    '8': ['', ''],
    '9': ['', ''],
    '10': ['', ''],
    '11': ['', ''],
    '12': ['', ''],
    '13': ['', ''],
    '14': ['', ''],
    '15': ['', ''],
    '16': ['', ''],
    '17': ['', ''],
    '18': ['', ''],
    '19': ['', ''],
    '20': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '5'],
    '2': ['5', '7'],
    '3': ['1', '3'],
    '4': ['1', '2'],
    '5': ['1', '6'],
    '6': ['5', '9'],
    '7': ['3', '8'],
    '8': ['9', '16'],
    '9': ['3', '4'],
    '10': ['5', '13'],
    '11': ['1', '3'],
    '12': ['24', '47'],
    '13': ['3', '4'],
    '14': ['3', '13'],
    '15': ['1', '2'],
    '16': ['4', '11'],
    '17': ['7', '9'],
    '18': ['3', '4'],
    '19': ['1', '2'],
    '20': ['1', '3'],
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
        <div className="quizRow3case quizMargin2">
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231"></p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">45</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">60</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <div className="textCenter">3</div>
                  <div className="divlineCSS divlineRedColor"></div>
                  <div className="textCenter">4</div>
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
                  <div className="textCenter">16</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">40</div>
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
                  <div className="textCenter">45</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">63</div>
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
                  <div className="textCenter">18</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">54</div>
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
                  <div className="textCenter">24</div>
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
                  <div className="textCenter">10</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">60</div>
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
                  <div className="textCenter">40</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">72</div>
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
                  <div className="textCenter">33</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">88</div>
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
                  <div className="textCenter">36</div>
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
                  <div className="textCenter">60</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">80</div>
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
                  <div className="textCenter">25</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">65</div>
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
                  <div className="textCenter">21</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">63</div>
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
                  <div className="textCenter">48</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">94</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['12'][0]}
                    onChange={e => handleChange('12', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['12'][1]}
                    onChange={e => handleChange('12', 1, e.target.value)}
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
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑭</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">18</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">78</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['14'][0]}
                    onChange={e => handleChange('14', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['14'][1]}
                    onChange={e => handleChange('14', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑮</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">56</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">112</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['15'][0]}
                    onChange={e => handleChange('15', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['15'][1]}
                    onChange={e => handleChange('15', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑯</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">44</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">121</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['16'][0]}
                    onChange={e => handleChange('16', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['16'][1]}
                    onChange={e => handleChange('16', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑰</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">105</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">135</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['17'][0]}
                    onChange={e => handleChange('17', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['17'][1]}
                    onChange={e => handleChange('17', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑱</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">75</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">100</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    value={answers['18'][0]}
                    onChange={e => handleChange('18', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    value={answers['18'][1]}
                    onChange={e => handleChange('18', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑲</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">72</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">144</div>
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
                    value={answers['1'][0]}
                    onChange={e => handleChange('1', 0, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑳</p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">40</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">120</div>
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
                    value={answers['1'][0]}
                    onChange={e => handleChange('1', 0, e.target.value)}
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

export default FifthGrade06;
