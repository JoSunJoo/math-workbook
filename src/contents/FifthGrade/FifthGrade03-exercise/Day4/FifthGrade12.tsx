import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade12: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2'],
    '2': ['3'],
    '3': ['3'],
    '4': ['4'],
    '5': ['2'],
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
      <div className="fontSize25 flexCol">
        <div className="flexRow marginTop231">
          ①&nbsp;&nbsp; 분모가 40보다 크고 50보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231">
          ②&nbsp;&nbsp; 분모가 60보다 크고 90보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231">
          ③&nbsp;&nbsp; 분모가 30보다 크고 40보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231">
          ④&nbsp;&nbsp; 분모가 50보다 크고 60보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231">
          ⑤&nbsp;&nbsp; 분모가 20보다 크고 60보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">15</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
