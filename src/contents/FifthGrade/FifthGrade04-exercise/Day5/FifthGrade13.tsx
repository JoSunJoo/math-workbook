import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg1 from 'src/contents/FifthGrade/fifthImage/4-5-1_1.png';
import fifthimg2 from 'src/contents/FifthGrade/fifthImage/4-5-1_2.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade13: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
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
  const handleGrade = async () => {
    setShowResults(!showResults);

    setType(false);
    const totalScore = calculateScore();
    setIsInputDisabled(!isInputDisabled); // 제출 시 입력 상자 비활성화

    sendScore({ score: totalScore }).catch(error => {
      console.error('Error with sendScore:', error);
    });
    postKeyValue({
      key: 'fifthGrade58Answers',
      value: answers,
    }).catch(error => {
      console.error('Error saving answers:', error);
    });
  };
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    getKeyValue({ key: 'fifthGrade58Answers' })
      .then(savedAnswers => {
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
        setIsDataLoaded(true);
      })
      .catch(error => {
        console.error('Error loading saved answers:', error);
      });
  }
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quiz fontSize25">
        <div className="quizNumber125787">
          <div className="flexRow wef213 afwe3513">
            <p>①&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
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
            <div className="eaf4511">3</div>
            <div className="eaf4512">5</div>
            <div className="eaf4513">7</div>
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
              />
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">=</div>
              <input
                disabled={isInputDisabled}
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                type="text"
                className="averageInput marginRight239"
              />

              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['1'][2]}
                  onChange={e => handleChange('1', 2, e.target.value)}
                  className="averageInput"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213 afwe3513">
            <p>②&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
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
            <div className="eaf4511">2</div>
            <div className="eaf4512">6</div>
            <div className="eaf4513">5</div>
            <img className="imgawer" src={fifthimg2} alt="" />{' '}
            <img className="imgawer" src={fifthimg2} alt="" />{' '}
            <img className="imgawer" src={fifthimg2} alt="" />
            <div className="flexRow marginLeft3121">
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
              />
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">=</div>
              <input
                disabled={isInputDisabled}
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput marginRight239"
              />

              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['2'][2]}
                  onChange={e => handleChange('2', 2, e.target.value)}
                  className="averageInput"
                />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213 afwe3513">
            <p>③&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
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
            <div className="eaf4511">9</div>
            <div className="eaf4512">4</div>
            <div className="eaf4513">8</div>
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
              />
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">=</div>
              <input
                disabled={isInputDisabled}
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                type="text"
                className="averageInput marginRight239"
              />

              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['3'][2]}
                  onChange={e => handleChange('3', 2, e.target.value)}
                  className="averageInput"
                />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213 afwe3513">
            <p>④&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
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
            <div className="eaf4511">3</div>
            <div className="eaf4512">5</div>
            <div className="eaf4513">7</div>
            <div className="eaf4514">8</div>
            <img className="imgawer" src={fifthimg2} alt="" />{' '}
            <img className="imgawer" src={fifthimg2} alt="" />{' '}
            <img className="imgawer" src={fifthimg2} alt="" />
            <img className="imgawer" src={fifthimg2} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213 afwe3513">
            <p>⑤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
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
            <div className="eaf4511">2</div>
            <div className="eaf4512">3</div>
            <div className="eaf4513">4</div>
            <div className="eaf4514">6</div>
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />{' '}
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['5'][1]}
                  onChange={e => handleChange('5', 1, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213 afwe3513">
            <p>⑥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
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
            <div className="eaf4511">2</div>
            <div className="eaf4512">4</div>
            <div className="eaf4513">6</div>
            <div className="eaf4514">7</div>
            <img className="imgawer" src={fifthimg2} alt="" />{' '}
            <img className="imgawer" src={fifthimg2} alt="" />{' '}
            <img className="imgawer" src={fifthimg2} alt="" />{' '}
            <img className="imgawer" src={fifthimg2} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />{' '}
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['6'][1]}
                  onChange={e => handleChange('6', 1, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="quizNumber123887">
          <div className="flexRow wef213 afwe3513">
            <p>⑦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
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
            <div className="eaf4511">1</div>
            <div className="eaf4512">5</div>
            <div className="eaf4513">8</div>
            <div className="eaf4514">9</div>
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />{' '}
            <img className="imgawer" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="quiz121Ex flexCol">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />{' '}
              </div>
              <div className="marginlR10px">×</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                />
              </div>
              <div className="marginlR10px">=</div>
              <div className="quiz121Ex">
                <input
                  disabled={isInputDisabled}
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  type="text"
                  className="averageInput"
                />
                <div className="divlineCSS15"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['7'][1]}
                  onChange={e => handleChange('7', 1, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade13;
