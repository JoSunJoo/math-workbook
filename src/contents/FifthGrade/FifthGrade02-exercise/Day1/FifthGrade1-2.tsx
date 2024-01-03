import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade2Day12 } from '../../utils/handleTitle';
import FifthGrade02 from './FifthGrade02';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day12.title}
      subTitle={FifthGrade2Day12.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade02 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
