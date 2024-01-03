import React from 'react';
import Styled from '../../style';

const FifthGrade02: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="exampleBox312 aewrfawe">
        <div className="fontSize17">
          대분수의 곱셈은 가분수로 바꾸고 분자끼리, 분모끼리 곱하여 계산합니다.
          그림으로 나타내면 아래와 같습니다.
        </div>
        <div className="justifyCenter">
          <img
            className="imgSize3111"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-1-2.png`}
            alt=""
          />
        </div>
      </div>
      <div className="quiz1 fontSize25 margialefeef">
        <div className="flexCol">
          <div className="flexRow">
            <p className="">①&nbsp;&nbsp;&nbsp;</p>
            <div className="peiafoewijao">2</div>
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">2</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="peiafoewijao">1</div>
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=&nbsp;</div>
            <div className="">
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div className="flexCol">
          <div className="flexRow">
            <p className="">②&nbsp;&nbsp;&nbsp;</p>
            <div className="peiafoewijao">1</div>

            <div>
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="peiafoewijao">1</div>

            <div className="">
              <div className="textCenter">2</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=&nbsp;</div>
            <div className="">
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

export default FifthGrade02;
