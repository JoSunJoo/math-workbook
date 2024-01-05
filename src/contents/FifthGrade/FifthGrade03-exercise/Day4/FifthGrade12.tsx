import React from 'react';

import Styled from '../../style';

const FifthGrade12: React.FC = () => {
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
          <input type="text" className="averageInput" /> &nbsp;개
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
          <input type="text" className="averageInput" /> &nbsp;개
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
          <input type="text" className="averageInput" /> &nbsp;개
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
          <input type="text" className="averageInput" /> &nbsp;개
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
          <input type="text" className="averageInput" /> &nbsp;개
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
