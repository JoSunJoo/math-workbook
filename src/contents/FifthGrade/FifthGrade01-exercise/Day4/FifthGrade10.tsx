import React from 'react';

import Styled from '../../style';

const FifthGrade10: React.FC = () => {
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
          <input className="imgInput1" type="text" />
          <input className="imgInput2" type="text" />
          <input className="imgInput3" type="text" />
          <input className="imgInput4" type="text" />
          <input className="imgInput5" type="text" />
          <input className="imgInput6" type="text" />
          <input className="imgInput7" type="text" />
          <input className="imgInput8" type="text" />
        </div>
      </div>
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
