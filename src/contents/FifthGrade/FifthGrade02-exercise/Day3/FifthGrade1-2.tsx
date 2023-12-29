import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade2Day32 } from '../../utils/handleTitle';
import FifthGrade08 from './FifthGrade08';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day32.title}
      subTitle={FifthGrade2Day32.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade08 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={3} />
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
