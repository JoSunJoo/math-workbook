import React from 'react';
import Styled from '../../style';

const FifthGrade01: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz211">
          <div className="conclusion">
            <p>
              <span>
                어떤 수를 나누어떨어지게 하는 수를 그 수의 약수라고 합니다.
              </span>
            </p>
            <p>6을 1에서 6까지 모든 수로 나누어 봅니다.</p>
          </div>
          <div className="division-examples">
            <div className="example">6 ÷ 1 = 6</div>
            <div className="example">6 ÷ 2 = 3</div>
            <div className="example">6 ÷ 3 = 2</div>
            <div className="example">6 ÷ 4 = 1 ... 2</div>
            <div className="example">6 ÷ 5 = 1 ... 1</div>
            <div className="example">6 ÷ 6 = 1</div>
          </div>
          <div className="conclusion">
            <p>6은 1, 2, 3, 6으로 나누어 나누어떨어집니다.</p>
            <p>1, 2, 3, 6은 약수입니다.</p>
          </div>
        </div>
        <div className="quiz2111 afwea">
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226 quizNumbToi13">①</p>
              <div className="textleft1231">
                8 ÷ <input className="averageInput" type="text" /> = 8
              </div>
              <div className="textleft1231">
                8 ÷ <input className="averageInput" type="text" /> = 4
              </div>
            </div>
            <div className="flexRow fif221221">
              <div className="textleft1231">
                8 ÷ <input className="averageInput" type="text" /> = 2
              </div>
              <div className="textleft1231">
                8 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226 quizNumbToi13">②</p>
              <div className="textleft1231">
                15 ÷ <input className="averageInput" type="text" /> = 15
              </div>
              <div className="textleft1231">
                15 ÷ <input className="averageInput" type="text" /> = 5
              </div>
            </div>
            <div className="  flexRow fif221221">
              <div className="textleft1231">
                15 ÷ <input className="averageInput" type="text" /> = 3
              </div>
              <div className="textleft1231">
                15 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226">③</p>
              <div className="textleft1231">
                12 ÷ <input className="averageInput" type="text" /> = 12
              </div>
              <div className="textleft1231">
                12 ÷ <input className="averageInput" type="text" /> = 6
              </div>
            </div>
            <div className=" flexRow fif221221">
              <div className="textleft1231">
                12 ÷ <input className="averageInput" type="text" /> = 4
              </div>
              <div className="textleft1231">
                12 ÷ <input className="averageInput" type="text" /> = 3
              </div>
            </div>
            <div className="  flexRow fif221221">
              <div className="textleft1231">
                12 ÷ <input className="averageInput" type="text" /> = 2
              </div>
              <div className="textleft1231">
                12 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
          <div className="quizCard211 flexCol">
            <div className=" flexRow fif221221">
              <p className="quizNumber1226">④</p>
              <div className="textleft1231">
                18 ÷ <input className="averageInput" type="text" /> = 18
              </div>
              <div className="textleft1231">
                18 ÷ <input className="averageInput" type="text" /> = 9
              </div>
            </div>
            <div className="flexRow fif221221">
              <div className="textleft1231">
                18 ÷ <input className="averageInput" type="text" /> = 6
              </div>
              <div className="textleft1231">
                18 ÷ <input className="averageInput" type="text" /> = 3
              </div>
            </div>
            <div className="flexRow fif221221">
              <div className="textleft1231">
                18 ÷ <input className="averageInput" type="text" /> = 2
              </div>
              <div className="textleft1231">
                18 ÷ <input className="averageInput" type="text" /> = 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
