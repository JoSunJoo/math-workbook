import Styled from '../../style';

import img from '../../Image/redArrow.png';

const Example22 = () => {
  return (
    <Styled.ImgBox2>
      <Styled.RowBox13>
        <Styled.ColGapBox3 gap={1}>
          <div>45973</div>
          <Styled.RowBox5>
            <Styled.ImgSize12 src={img} alt="" />
            <Styled.RowBox4>
              <div>10000이 </div>
              <Styled.InputBox3 placeholder="4" />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>1000이 </div>
              <Styled.InputBox3 placeholder="5" />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>100이 </div>
              <Styled.InputBox3 placeholder="9" />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>10이 </div>
              <Styled.InputBox3 placeholder="7" />
              <div> 개, </div>
            </Styled.RowBox4>
            <Styled.RowBox4>
              <div>1이 </div>
              <Styled.InputBox3 placeholder="3" />
              <div> 개</div>
            </Styled.RowBox4>
          </Styled.RowBox5>
        </Styled.ColGapBox3>
      </Styled.RowBox13>
    </Styled.ImgBox2>
  );
};

export default Example22;
