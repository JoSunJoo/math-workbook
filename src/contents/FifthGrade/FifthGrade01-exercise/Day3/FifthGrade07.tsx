import React from 'react';
import Styled from '../../style';

const FifthGrade07: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAllLine">
        <div className="quiz">
          {/*  예제 문제  */}
          <div className="quizCard121">
            <div className="absolSetting121">
              <div className="twoQuiz">
                <div className="quiz121Ex">
                  <p className="explain1">
                    ( )가 있는 식은 ( )안을 먼저 계산합니다.
                  </p>
                  <div className="flexrow">
                    24 ÷ 4 × 2 = <div className="marginLeft9">18</div>
                  </div>
                  <div className="marginLeft7">12</div>
                  <div className="marginLeft8">18</div>
                  <img
                    className="img1211"
                    src={`${process.env.PUBLIC_URL}/fifthImage/1-2-1_1.png`}
                    alt=""
                  />
                </div>
                <div className="quiz121Ex">
                  <div className="flexrow">
                    24 ÷ (4 × 2) = <div className="marginLeft9">6</div>
                  </div>
                  <div className="marginLeft10">11</div>
                  <div className="marginLeft11">6</div>
                  <img
                    className="img1212 imgleft1311"
                    src={`${process.env.PUBLIC_URL}/fifthImage/1-2-1_2.png`}
                    alt=""
                  />
                </div>
                <p className="explain2">
                  두 식을 비교해보면 ( )가 있을 때와 없을 때 계산 순서가 달라서
                  계산 결과가 다릅니다.
                </p>
              </div>
            </div>
          </div>
          {/* 예제문제 끝 */}
          <div className="quiz1211">
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">①</p>
                    45 ÷ (15 ÷ 3) =
                    <input type="text" className="borderRedInput1211" />
                  </div>
                </div>
                <input type="text" className="borderRedInput2 quizInput1239" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">②</p>
                    14 × (12 ÷ 6) =
                    <input type="text" className="borderRedInput1211" />
                  </div>
                </div>
                <input type="text" className="borderRedInput2 quizInput1239" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">③</p>
                    100 ÷ (5 × 4) ={' '}
                    <input type="text" className="borderRedInput1211" />
                  </div>
                </div>
                <input type="text" className="borderRedInput2 quizInput1239" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone ">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">④</p>
                    80 ÷ (24 ÷ 3) ={' '}
                    <input type="text" className="borderRedInput1211" />
                  </div>
                </div>
                <input type="text" className="borderRedInput2 quizInput1239" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone quizMargin2">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">⑤</p>
                    126 ÷ (3 × 7) ={' '}
                    <input type="text" className="borderRedInput1211" />
                  </div>
                </div>
                <input type="text" className="borderRedInput2 quizInput1239" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
            <div className="quizCardNone">
              <div className="lineStyleCss">
                <div className="flexrow">
                  <div className="flexRow">
                    <p className="quizNumber1211 quizMargin1131">⑥</p>
                    7 × (15 × 4) =
                    <input type="text" className="borderRedInput1211" />
                  </div>
                </div>
                <input type="text" className="borderRedInput2 quizInput1239" />
                <input type="text" className="borderRedInput3" />
                <div className="d-line4 quizLine121455"></div>
                <div className="d-line5 awoefiawfe"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
