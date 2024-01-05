import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade05: React.FC = () => {
  const [type, setType] = useState(true);
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
  const calculateScore = () => {
    const totalQuestions = Object.keys(correctAnswers).length; // 전체 문제 수
    const scorePerQuestion = 100 / totalQuestions; // 각 문제당 점수

    let correctCount = 0;
    Object.keys(correctAnswers).forEach(questionId => {
      if (isCorrect(questionId)) {
        correctCount++;
      }
    });

    return correctCount * scorePerQuestion; // 총점 계산
  };
  const handleGrade = () => {
    setShowResults(true);
    setType(false);
    const totalScore = calculateScore();
    sendScore({ score: totalScore });
  };
  useEffect(() => {
    const loadChanges = async () => {
      try {
        const savedAnswers = await getKeyValue({ key: 'fifthGrade50Answers' });
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
      } catch (error) {
        console.error('Error loading saved answers:', error);
      }
    };

    loadChanges();
  }, []);
  useEffect(() => {
    // answers 상태가 변경될 때마다 실행
    const saveChanges = async () => {
      await postKeyValue({
        key: 'fifthGrade50Answers',
        value: answers,
      });
    };

    saveChanges();
  }, [answers]);
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizRow3case fontSize25">
        <div className="afwe3513 flexRow awefaweTOp">
          {showResults && (
            <div>
              {isCorrect('1') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="afwe3513 flexRow awefaweTOp">
          {showResults && (
            <div>
              {isCorrect('2') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp">
          {showResults && (
            <div>
              {isCorrect('3') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop">
          {showResults && (
            <div>
              {isCorrect('4') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop">
          {showResults && (
            <div>
              {isCorrect('5') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop">
          {showResults && (
            <div>
              {isCorrect('6') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop">
          {showResults && (
            <div>
              {isCorrect('7') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['7'][1]}
              onChange={e => handleChange('7', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop">
          {showResults && (
            <div>
              {isCorrect('8') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
          <input
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['8'][2]}
              onChange={e => handleChange('8', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop">
          {showResults && (
            <div>
              {isCorrect('9') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
          <input
            value={answers['9'][0]}
            onChange={e => handleChange('9', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              value={answers['9'][1]}
              onChange={e => handleChange('9', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['9'][2]}
              onChange={e => handleChange('9', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('10') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
          <input
            value={answers['10'][0]}
            onChange={e => handleChange('10', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              value={answers['10'][1]}
              onChange={e => handleChange('10', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['10'][2]}
              onChange={e => handleChange('10', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('11') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['11'][0]}
              onChange={e => handleChange('11', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('12') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['12'][0]}
              onChange={e => handleChange('12', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('13') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
          <input
            value={answers['13'][0]}
            onChange={e => handleChange('13', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              value={answers['13'][1]}
              onChange={e => handleChange('13', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['13'][2]}
              onChange={e => handleChange('13', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('14') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
          <input
            value={answers['14'][0]}
            onChange={e => handleChange('14', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              value={answers['14'][1]}
              onChange={e => handleChange('14', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['14'][2]}
              onChange={e => handleChange('14', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('15') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['15'][0]}
              onChange={e => handleChange('15', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['15'][1]}
              onChange={e => handleChange('15', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('16') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['16'][0]}
              onChange={e => handleChange('16', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['16'][1]}
              onChange={e => handleChange('16', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('17') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['17'][0]}
              onChange={e => handleChange('17', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['17'][1]}
              onChange={e => handleChange('17', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow fakwefTop barfaww">
          {showResults && (
            <div>
              {isCorrect('18') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg53"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
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
            <input
              value={answers['18'][0]}
              onChange={e => handleChange('18', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              value={answers['18'][1]}
              onChange={e => handleChange('18', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade05;
