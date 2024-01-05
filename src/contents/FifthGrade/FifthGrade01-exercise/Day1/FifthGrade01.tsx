import React, { useState } from 'react';

import Styled from '../../style';

import type { AnswersType } from '../../Type/Type1';

const FifthGrade01: React.FC = () => {
  const [answers, setAnswers] = useState<AnswersType>({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    '10': '',
    '11': '',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': '',
    '18': '',
    '19': '',
    '20': '',
    // 나머지 문제들에 대해서도 동일하게 추가
  });
  const correctAnswers: AnswersType = {
    // 정답 추가
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    '10': '',
    '11': '',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': '',
    '18': '',
    '19': '',
    '20': '',
    // 나머지 문제들의 정답도 추가
  };
  const handleChange = (id: any, value: any) => {
    setAnswers({ ...answers, [id]: value });
  };
  // 정답 확인 처리
  const checkAnswers = () => {
    for (const key in correctAnswers) {
      if (answers[key] !== correctAnswers[key]) {
        console.log(`문제 ${key} 오답`);
      } else {
        console.log(`문제 ${key} 정답`);
      }
    }
  };
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz1">
          <div className="quizCard1">
            <p className="quizNumberTop">①</p>
            <div className="margin5px">
              <div>
                25 + 43 - 19 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['1']}
                  onChange={e => handleChange('1', e.target.value)}
                />
                - 19
                <div className="textRight">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['2']}
                    onChange={e => handleChange('2', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">②</p>
            <div className="margin5px">
              <div>
                31 - 16 + 23 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['3']}
                  onChange={e => handleChange('3', e.target.value)}
                />
                + 23
                <div className="textRight111">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['4']}
                    onChange={e => handleChange('4', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">③</p>
            <div className="margin5px">
              <div>
                19 - 13 + 7 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['5']}
                  onChange={e => handleChange('5', e.target.value)}
                />
                + 7
                <div className="textRight">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['6']}
                    onChange={e => handleChange('6', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">④</p>
            <div className="margin5px">
              <div>
                16 + 23 - 9 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['7']}
                  onChange={e => handleChange('7', e.target.value)}
                />
                - 9
                <div className="textRight1112">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['8']}
                    onChange={e => handleChange('8', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">⑤</p>
            <div className="absolSetting">
              <div className="elementAbsol1">35 - 27 + 9 - 14</div>
              <div className="elementAbsol2">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['9']}
                  onChange={e => handleChange('9', e.target.value)}
                />
                + 9 - 14 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['10']}
                  onChange={e => handleChange('10', e.target.value)}
                />
                - 14
                <div className="elementAbsol3">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['11']}
                    onChange={e => handleChange('11', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">⑥</p>
            <div className="absolSetting">
              <div className="elementAbsol1">28 + 15 - 17 - 20</div>
              <div className="elementAbsol2">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['12']}
                  onChange={e => handleChange('12', e.target.value)}
                />
                - 17 - 20 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['13']}
                  onChange={e => handleChange('13', e.target.value)}
                />
                - 20
                <div className="elementAbsol3">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['14']}
                    onChange={e => handleChange('14', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">⑦</p>
            <div className="absolSetting">
              <div className="elementAbsol1">15 + 4 - 16 + 11</div>
              <div className="elementAbsol6">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['15']}
                  onChange={e => handleChange('15', e.target.value)}
                />
                - 16 + 11 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['16']}
                  onChange={e => handleChange('16', e.target.value)}
                />
                + 11
                <div className="elementAbsol4">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['17']}
                    onChange={e => handleChange('17', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">⑧</p>
            <div className="absolSetting">
              <div className="elementAbsol1">35 + 8 - 26 + 9</div>
              <div className="elementAbsol2">
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['18']}
                  onChange={e => handleChange('18', e.target.value)}
                />
                - 26 + 9 =
                <input
                  className="inputSize1"
                  type="text"
                  value={answers['19']}
                  onChange={e => handleChange('19', e.target.value)}
                />
                + 9
                <div className="elementAbsol5">
                  =
                  <input
                    className="inputSize1"
                    type="text"
                    value={answers['20']}
                    onChange={e => handleChange('20', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
