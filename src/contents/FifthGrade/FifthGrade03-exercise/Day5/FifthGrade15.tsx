import React from 'react';

import Styled from '../../style';

const FifthGrade15: React.FC = () => {
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="exampleBox312">
        <div className="fontSize17">
          두 분수의 크기만 비교할 경우에는 분모의 곱을 공통분모로 통분한다고
          생각하고, 분자의 크기만 비 교하면 분수의 크기를 쉽게 비교할 수
          있습니다.
        </div>
        <div></div>
        <div className="flexRow">
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">28</div>
            </div>
            <input
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>

            <div className="fontSize17 marginlR10px">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">14</div>
            </div>
            <input
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
          </div>
        </div>
      </div>
      {/* 문제시작  */}
      <div className="quizRow3case minwidwer900px">
        <div className="flexRow fontSize17 justifyCenter mairgin-wef">
          <p className="fontSize20">①</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">9</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">②</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">③</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">11</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">7</div>
          </div>
          {/* 이미지때문에 보류  */}
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">④</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">19</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">37</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑤</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">6</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">47</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑥</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">8</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">19</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">4</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">9</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑦</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">2</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">13</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">6</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑧</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">25</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">75</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑨</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">6</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">31</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">14</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑩</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">8</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">19</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">5</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑪</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">10</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">31</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">16</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑫</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">5</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">11</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑬</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">19</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">6</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑭</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">81</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">39</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20">⑮</p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">28</div>
          </div>
          <input type="text" className="averageInput redeinptueq" />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">6</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">47</div>
          </div>
        </div>{' '}
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade15;
