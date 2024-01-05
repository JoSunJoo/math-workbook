import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade04: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
    '6': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['5'],
    '2': ['2'],
    '3': ['4'],
    '4': ['2'],
    '5': ['4'],
    '6': ['3'],
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
        const savedAnswers = await getKeyValue({ key: 'fifthGrade19Answers' });
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
        key: 'fifthGrade19Answers',
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
      <div className="quizAll">
        <div className="quiz1 quizMargin3 fontSize25">
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">16</span>
              {showResults && (
                <div>
                  {isCorrect('1') ? (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">4</div>
              <div className="quiz2131">8</div>
              <div className="quiz2131">16</div>
            </div>
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">17</span>
              {showResults && (
                <div>
                  {isCorrect('2') ? (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">8</div>
              <div className="quiz2131">17</div>
              <div className="quiz2131">34</div>
            </div>
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">21</span>
              {showResults && (
                <div>
                  {isCorrect('3') ? (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">7</div>
              <div className="quiz2131">21</div>
              <div className="quiz2131">42</div>
            </div>
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">29</span>
              {showResults && (
                <div>
                  {isCorrect('4') ? (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">5</div>
              <div className="quiz2131">7</div>
              <div className="quiz2131">9</div>
              <div className="quiz2131">13</div>
              <div className="quiz2131">29</div>
            </div>
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">33</span>
              {showResults && (
                <div>
                  {isCorrect('5') ? (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">11</div>
              <div className="quiz2131">18</div>
              <div className="quiz2131">33</div>
              <div className="quiz2131">66</div>
            </div>
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">49</span>
              {showResults && (
                <div>
                  {isCorrect('6') ? (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg33 asfwae"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">4</div>
              <div className="quiz2131">7</div>
              <div className="quiz2131">11</div>
              <div className="quiz2131">26</div>
              <div className="quiz2131">49</div>
            </div>
            <input
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade04;
