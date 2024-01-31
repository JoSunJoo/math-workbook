import Styled from '../../style';

import type { Data41QuizProps as Props } from '../../Type/Type2';

import img from '../../Image/2-4-1.png';

const Single41 = (props: Props) => {
  const { toggle, setToggle, inputValue, setInputValue, singleCorrect } = props;

  const handleInput = (e: string, i: number) => {
    const value = inputValue;
    value[0][i] = e;
    setInputValue(value);
    setToggle(!toggle);
  };

  return (
    // 위에서 아래, 왼쪽에서 오른쪽 순
    <Styled.RelativeBox2>
      <Styled.HandleImgSize2 src={img} size={40} />
      <Styled.GetAbsoluteBox
        top={0.95}
        left={16.2}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 0)}
        value={inputValue[0][0]}
      />
      <Styled.GetAbsoluteBox
        top={0.95}
        left={21.25}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 1)}
        value={inputValue[0][1]}
      />
      <Styled.GetAbsoluteBox
        top={6}
        left={11.13}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 2)}
        value={inputValue[0][2]}
      />
      <Styled.GetAbsoluteBox
        top={6}
        left={16.2}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 3)}
        value={inputValue[0][3]}
      />
      <Styled.GetAbsoluteBox
        top={11.1}
        left={6}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 4)}
        value={inputValue[0][4]}
      />
      <Styled.GetAbsoluteBox
        top={11.1}
        left={21.3}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 5)}
        value={inputValue[0][5]}
      />
      <Styled.GetAbsoluteBox
        top={11.1}
        left={31.45}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 6)}
        value={inputValue[0][6]}
      />
      <Styled.GetAbsoluteBox
        top={11.1}
        left={36.55}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 7)}
        value={inputValue[0][7]}
      />
      <Styled.GetAbsoluteBox
        top={16.2}
        left={6}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 8)}
        value={inputValue[0][8]}
      />
      <Styled.GetAbsoluteBox
        top={16.2}
        left={11.1}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 9)}
        value={inputValue[0][9]}
      />
      {/* 11 */}
      <Styled.GetAbsoluteBox
        top={16.2}
        left={16.2}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 10)}
        value={inputValue[0][10]}
      />
      <Styled.GetAbsoluteBox
        top={16.2}
        left={26.4}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 11)}
        value={inputValue[0][11]}
      />
      <Styled.GetAbsoluteBox
        top={21.3}
        left={26.4}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 12)}
        value={inputValue[0][12]}
      />
      <Styled.GetAbsoluteBox
        top={21.3}
        left={31.45}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 13)}
        value={inputValue[0][13]}
      />
      <Styled.GetAbsoluteBox
        top={21.3}
        left={36.5}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 14)}
        value={inputValue[0][14]}
      />
      <Styled.GetAbsoluteBox
        top={26.35}
        left={11.13}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 15)}
        value={inputValue[0][15]}
      />
      <Styled.GetAbsoluteBox
        top={26.35}
        left={16.18}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 16)}
        value={inputValue[0][16]}
      />
      <Styled.GetAbsoluteBox
        top={26.35}
        left={21.28}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 17)}
        value={inputValue[0][17]}
      />
      <Styled.GetAbsoluteBox
        top={26.35}
        left={31.45}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 18)}
        value={inputValue[0][18]}
      />
      <Styled.GetAbsoluteBox
        top={31.47}
        left={21.3}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 19)}
        value={inputValue[0][19]}
      />
      {/* 20 */}
      <Styled.GetAbsoluteBox
        top={31.47}
        left={26.3}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 20)}
        value={inputValue[0][20]}
      />
      <Styled.GetAbsoluteBox
        top={31.47}
        left={31.45}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 21)}
        value={inputValue[0][21]}
      />
      <Styled.GetAbsoluteBox
        top={36.5}
        left={21.3}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 22)}
        value={inputValue[0][22]}
      />
      <Styled.GetAbsoluteBox
        top={36.5}
        left={26.4}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 23)}
        value={inputValue[0][23]}
      />
      <Styled.GetAbsoluteBox
        top={36.5}
        left={31.45}
        disabled={singleCorrect === null ? false : true}
        onChange={e => handleInput(e.target.value, 24)}
        value={inputValue[0][24]}
      />
    </Styled.RelativeBox2>
  );
};

export default Single41;
