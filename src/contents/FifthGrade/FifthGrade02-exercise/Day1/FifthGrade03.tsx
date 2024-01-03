import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade03: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
    '6': [''],
    '7': [''],
    '8': [''],
    '9': [''],
    '10': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3'],
    '2': ['4'],
    '3': ['3'],
    '4': ['2'],
    '5': ['4'],
    '6': ['3'],
    '7': ['5'],
    '8': ['4'],
    '9': ['2'],
    '10': ['5'],
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
        <div className="quiz1 quizMargin3 fontSize25">
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">4</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">4</div>
              <div className="quiz2131">6</div>
              <div className="quiz2131">8</div>
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
              <span className="posiAbAb">6</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">4</div>
              <div className="quiz2131">5</div>
              <div className="quiz2131">6</div>
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
              <span className="posiAbAb">9</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">6</div>
              <div className="quiz2131">9</div>
              <div className="quiz2131">12</div>
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
              <span className="posiAbAb">13</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">7</div>
              <div className="quiz2131">9</div>
              <div className="quiz2131">13</div>
              <div className="quiz2131">26</div>
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
              <span className="posiAbAb">18</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">4</div>
              <div className="quiz2131">8</div>
              <div className="quiz2131">9</div>
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
              <span className="posiAbAb">27</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">5</div>
              <div className="quiz2131">9</div>
              <div className="quiz2131">17</div>
              <div className="quiz2131">27</div>
            </div>
            <input
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">36</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">1</div>
              <div className="quiz2131">2</div>
              <div className="quiz2131">4</div>
              <div className="quiz2131">8</div>
              <div className="quiz2131">12</div>
              <div className="quiz2131">18</div>
            </div>
            <input
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">45</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">3</div>
              <div className="quiz2131">5</div>
              <div className="quiz2131">7</div>
              <div className="quiz2131">9</div>
              <div className="quiz2131">45</div>
              <div className="quiz2131">90</div>
            </div>
            <input
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">51</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">2</div>
              <div className="quiz2131">5</div>
              <div className="quiz2131">7</div>
              <div className="quiz2131">17</div>
              <div className="quiz2131">51</div>
              <div className="quiz2131">69</div>
            </div>
            <input
              value={answers['9'][0]}
              onChange={e => handleChange('9', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flexCol marginbottom666">
            <div className="quiz2131 add2131">
              <span className="posiAbAb">63</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">2</div>
              <div className="quiz2131">3</div>
              <div className="quiz2131">7</div>
              <div className="quiz2131">9</div>
              <div className="quiz2131">21</div>
              <div className="quiz2131">63</div>
            </div>
            <input
              value={answers['10'][0]}
              onChange={e => handleChange('10', 0, e.target.value)}
              className="averageInput marginbottom666"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade03;
