import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade10: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['14'],
    '2': ['52'],
    '3': ['12'],
    '4': ['21'],
    '5': ['2'],
    '6': ['14'],
    '7': ['6'],
    '8': ['4'],
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
      <div className="quizAllLate">
        <div className="imgfake"></div>
        <img
          className="img141"
          src={`${process.env.PUBLIC_URL}/fifthImage/1-4-1.png`}
          alt=""
        />
        <div className="imgInputSet">
          <input
            className="imgInput1"
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
          />
          <input
            className="imgInput2"
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
          />
          <input
            className="imgInput3"
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
          />
          <input
            className="imgInput4"
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
          />
          <input
            className="imgInput5"
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
          />
          <input
            className="imgInput6"
            value={answers['6'][0]}
            onChange={e => handleChange('6', 0, e.target.value)}
            type="text"
          />
          <input
            className="imgInput7"
            value={answers['7'][0]}
            onChange={e => handleChange('7', 0, e.target.value)}
            type="text"
          />
          <input
            className="imgInput8"
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
          />
        </div>
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
