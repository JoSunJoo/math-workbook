import { getKeyValue } from '@elice/extcontent-apis';

interface Props {
  key: string;
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  setIsGeted?: React.Dispatch<React.SetStateAction<boolean>>;
  isGeted?: boolean;
}

export const GetData = async (props: Props) => {
  const { setInputValue, key, setIsGeted, isGeted } = props;
  if (isGeted) {
    try {
      const res = await getKeyValue({ key });
      if (res !== null) {
        setInputValue(res);
        if (setIsGeted) setIsGeted(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
