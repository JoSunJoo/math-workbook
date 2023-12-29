import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade2Day21 } from '../../utils/handleTitle';
import FifthGrade04 from './FifthGrade04';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day21.title}
      subTitle={FifthGrade2Day21.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade04 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
