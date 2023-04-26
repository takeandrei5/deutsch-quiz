import parse from 'html-react-parser';

import type { InstructionProps } from './types';

const Instruction: React.FC<InstructionProps> = ({ instruction }: InstructionProps) => {
  return (
    <div className='flex flex-col'>
      <span className='text-base font-bold text-red-500'>INSTRUKTION</span>
      <span className='whitespace-pre-wrap text-neutral'>{parse(instruction)}</span>
    </div>
  );
};

export default Instruction;
