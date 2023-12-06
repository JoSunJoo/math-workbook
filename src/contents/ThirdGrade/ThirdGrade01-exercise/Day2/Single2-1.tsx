import React from 'react';

import Styled from '../../style';
import Matrix from '../../utils/Matrix';

import type { Data12QuizProps as DataProps } from '../../Type/Type1';

const Single21 = (props: DataProps) => {
  const { id, quiz1, quiz2 } = props;
  return (
    <Styled.SingleWrapper>
      <Styled.ColGapBox gap={0}>
        <Matrix />
        <Styled.InputWrapper2>
          <div>{id}</div>
          <div>{quiz1}</div>
          <div>+</div>
          <div>{quiz2}</div>
          <div>=</div>
          <Styled.InputBox2></Styled.InputBox2>
        </Styled.InputWrapper2>
      </Styled.ColGapBox>
    </Styled.SingleWrapper>
  );
};

export default Single21;
