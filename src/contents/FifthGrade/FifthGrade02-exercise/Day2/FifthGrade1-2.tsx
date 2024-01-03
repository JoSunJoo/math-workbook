import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade2Day21 } from '../../utils/handleTitle';
import FifthGrade05 from './FifthGrade05';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day21.title}
      subTitle={FifthGrade2Day21.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade05 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
