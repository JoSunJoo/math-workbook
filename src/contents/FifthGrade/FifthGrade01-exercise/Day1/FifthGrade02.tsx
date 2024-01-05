import React from 'react';

import Styled from '../../style';

const FifthGrade02: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz1">
          <div className="quizCard1">
            <p className="quizNumberTop">①</p>
            <div className="margin5px">
              <div>
                12 × 6 ÷ 4 = <input className="inputSize1" type="text" /> ÷ 4
                <div className="textRight111">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">②</p>
            <div className="margin5px">
              <div>
                24 ÷ 3 × 7 = <input className="inputSize1" type="text" /> × 7
                <div className="textRight1111">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">③</p>
            <div className="margin5px">
              <div>
                18 × 2 ÷ 9 = <input className="inputSize1" type="text" /> ÷ 9
                <div className="textRight111">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">④</p>
            <div className="margin5px">
              <div>
                16 ÷ 4 × 2 = <input className="inputSize1" type="text" /> × 2
                <div className="textRight1111">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="quizCard2">
            <p className="quizNumberTop">⑤</p>
            <div className="absolSetting">
              <div className="elementAbsol7">4 × 8 ÷ 2 × 6</div>
              <div className="elementAbsol2">
                <input className="inputSize1" type="text" /> ÷ 2 × 6 ={' '}
                <input className="inputSize1" type="text" /> × 6
                <div className="elementAbsol1127">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard3">
            <p className="quizNumberTop">⑥</p>
            <div className="absolSetting">
              <div className="elementAbsol1">12 ÷ 2 × 4 × 5</div>
              <div className="elementAbsol2">
                <input className="inputSize1" type="text" /> × 4 × 5 ={' '}
                <input className="inputSize1" type="text" /> × 5
                <div className="elementAbsol1127">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard1">
            <p className="quizNumberTop">⑦</p>
            <div className="absolSetting">
              <div className="elementAbsol1">12 ÷ 4 × 6 ÷ 3</div>
              <div className="elementAbsol2">
                <input className="inputSize1" type="text" /> × 6 ÷ 3 ={' '}
                <input className="inputSize1" type="text" /> ÷ 3
                <div className="elementAbsol1127">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="quizCard2">
            <p className="quizNumberTop">⑧</p>
            <div className="absolSetting">
              <div className="elementAbsol1">36 ÷ 3 ÷ 4 × 9</div>
              <div className="elementAbsol2">
                <input className="inputSize1" type="text" /> ÷ 4 × 9 ={' '}
                <input className="inputSize1" type="text" /> × 9
                <div className="elementAbsol1127">
                  = <input className="inputSize1" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade02;
