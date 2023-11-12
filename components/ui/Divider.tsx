import { FC } from "react";

interface DividerProps {
  text?: string;
}

const Divider: FC<DividerProps> = ({ text = undefined }) => {
  return <div className="block h-[1px] w-full bg-neutral-200 my-8"></div>;
};

export default Divider;
