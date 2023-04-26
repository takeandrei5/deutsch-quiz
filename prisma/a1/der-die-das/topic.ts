import buildQuestions from './questions';

import type { Prisma } from '@prisma/client';

const buildTopic = async (): Promise<Prisma.TopicCreateWithoutDifficultyInput> => ({
  name: 'Der, die oder das',
  description:
    'Im Deutschen muss man lernen, ob “der”, “die” oder “das” verwendet wird. Sind sie so schwierig wie die meisten Leuten denken? Lass uns die Regeln entdecken!',
  image: 'https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_DerDieDas_Cover/public',
  multipleQuizQuestions: {
    createMany: {
      data: await buildQuestions(),
    },
  },
  instructions:
    'Im Deutschen gibt es drei bestimmte Artikel: <b>der</b> für <i>Maskulin<i>, <b>die</b> für <i>Feminin</i> und <b>das</b> für <i>Neutrum</i>. Es gibt bestimmte Wortendungen (Suffixe), die zeigen können, welches Genus ein Wort hat. <br /> Substantive mit <b>-ment</b>, <b>-tum</b> oder <b>-chen</b> am Ende sind beispielsweise meistens neutral (das Medikament, das Datum, das Mädchen). Endet ein Wort auf <b>-ig</b>, <b>-ling</b>, <b>-ich</b> oder <b>-en</b> ist das Wort sehr oft maskulin (zum Beispiel: der Essig, der Flüchtling, der Teppich, der Garten). <br />Suffixe, die man fast nur bei femininen Substantiven findet, sind: <b>-in<b/>, <b>-ung<b/>, <b>-ion<b/>, <b>-keit<b/>, <b>-heit<b/>, <b>-schaft<b/> oder <b>–ei<b/> (siehe: die Freundin, die Endung, die Supervision, die Freundlichkeit, die Frechheit, die Freundschaft, die Bäckerei).',
});

export default buildTopic;
