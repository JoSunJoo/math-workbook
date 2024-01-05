import React from 'react';

import Styled from '../../style';

const FifthGrade01: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="exampleBox312 aewrfawe">
        <div className="fontSize17">
          진분수와 가분수의 곱셈은 분자끼리, 분모끼리 곱하여 계산합니다.
          그림으로 나타내면 아래와 같습니다.
        </div>
        <div className="flexRowjustifyCenter">
          <div className="flexRow fontSize17 justifyCenter">
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div>×</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>=</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2 × 2</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">5 × 3</div>
            </div>
            <div>=</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
          </div>
        </div>
        <div className="justifyCenter">
          <img
            className="imgSize3111"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-1-1.png`}
            alt=""
          />
        </div>
      </div>
      <div className="quiz1 fontSize25 margialefeef">
        <div className="flexCol">
          <div className="flexRow">
            <p className="">①&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className=" marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">2</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div className="flexCol">
          <div className="flexRow">
            <p className="">②&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className=" marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div className="flexCol">
          <div className="flexRow">
            <p className="">③&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className=" marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">2</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">3</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div className="flexCol">
          <div className="flexRow">
            <p className="">④&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className=" marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>×</div>
            <div className=" marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div>=&nbsp;</div>
            <div className=" marginRighttic">
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
