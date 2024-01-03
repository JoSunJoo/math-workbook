import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade08: React.FC = () => {
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
    '1': ['2'],
    '2': ['3'],
    '3': ['3'],
    '4': ['3'],
    '5': ['3'],
    '6': ['3'],
    '7': ['2'],
    '8': ['3'],
    '9': ['4'],
    '10': ['3'],
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
              <span className="posiAbAb">7</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">8</div>
              <div className="quiz2131">12</div>
              <div className="quiz2131">13</div>
              <div className="quiz2131">14</div>
              <div className="quiz2131">20</div>
              <div className="quiz2131">21</div>
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
              <span className="posiAbAb">9</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">3</div>
              <div className="quiz2131">9</div>
              <div className="quiz2131">16</div>
              <div className="quiz2131">27</div>
              <div className="quiz2131">32</div>
              <div className="quiz2131">36</div>
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
              <span className="posiAbAb">11</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">7</div>
              <div className="quiz2131">11</div>
              <div className="quiz2131">24</div>
              <div className="quiz2131">32</div>
              <div className="quiz2131">44</div>
              <div className="quiz2131">77</div>
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
              <span className="posiAbAb">15</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">5</div>
              <div className="quiz2131">15</div>
              <div className="quiz2131">25</div>
              <div className="quiz2131">30</div>
              <div className="quiz2131">75</div>
              <div className="quiz2131">95</div>
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
              <div className="quiz2131">6</div>
              <div className="quiz2131">36</div>
              <div className="quiz2131">48</div>
              <div className="quiz2131">72</div>
              <div className="quiz2131">90</div>
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
              <span className="posiAbAb">24</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">12</div>
              <div className="quiz2131">24</div>
              <div className="quiz2131">32</div>
              <div className="quiz2131">40</div>
              <div className="quiz2131">48</div>
              <div className="quiz2131">72</div>
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
              <div className="quiz2131">2</div>
              <div className="quiz2131">6</div>
              <div className="quiz2131">18</div>
              <div className="quiz2131">62</div>
              <div className="quiz2131">72</div>
              <div className="quiz2131">180</div>
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
              <span className="posiAbAb">40</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">20</div>
              <div className="quiz2131">40</div>
              <div className="quiz2131">60</div>
              <div className="quiz2131">80</div>
              <div className="quiz2131">100</div>
              <div className="quiz2131">160</div>
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
              <span className="posiAbAb">55</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">11</div>
              <div className="quiz2131">33</div>
              <div className="quiz2131">55</div>
              <div className="quiz2131">110</div>
              <div className="quiz2131">165</div>
              <div className="quiz2131">220</div>
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
              <span className="posiAbAb">61</span>
            </div>
            <div className="flexRow marginTop213">
              <div className="quiz2131">31</div>
              <div className="quiz2131">61</div>
              <div className="quiz2131">122</div>
              <div className="quiz2131">182</div>
              <div className="quiz2131">183</div>
              <div className="quiz2131">242</div>
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
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade08;
