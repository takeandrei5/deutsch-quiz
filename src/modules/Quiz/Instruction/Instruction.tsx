import parse from 'html-react-parser';

import type { InstructionProps } from './types';

const Instruction: React.FC<InstructionProps> = ({ instruction }: InstructionProps) => {
  return (
    <div className='flex flex-col'>
      <span className='text-base font-bold text-red-500'>INSTRUKTION</span>
      <span className='whitespace-pre-wrap text-neutral'>
        {parse(
          'Im Deutschen gibt es drei bestimmte Artikel: <b>der</b> für <i>Maskulin</i>, <b>die</b> für <i>Feminin</i> und <b>das</b> für <i>Neutrum</i>. Es gibt bestimmte Wortendungen (Suffixe), die zeigen können, welches Genus ein Wort hat. <br><br> Substantive mit <b>&#x2011;ment</b>, <b>&#x2011;tum</b> oder <b>&#x2011;chen</b> am Ende sind beispielsweise meistens neutral (das Medikament, das Datum, das Mädchen). Endet ein Wort auf <b>&#x2011;ig</b>, <b>&#x2011;ling</b>, <b>&#x2011;ich</b> oder <b>&#x2011;en</b> ist das Wort sehr oft maskulin (zum Beispiel: der Essig, der Flüchtling, der Teppich, der Garten). <br><br>Suffixe, die man fast nur bei femininen Substantiven findet, sind: <b>&#x2011;in</b>, <b>&#x2011;ung</b>, <b>&#x2011;ion</b>, <b>&#x2011;keit</b>, <b>&#x2011;heit</b>, <b>&#x2011;schaft</b> oder <b>–ei</b> (siehe: die Freundin, die Endung, die Supervision, die Freundlichkeit, die Frechheit, die Freundschaft, die Bäckerei).'
        )}
      </span>
    </div>
  );
};

export default Instruction;
