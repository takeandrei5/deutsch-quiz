import type { Prisma } from "@prisma/client";

const buildQuestions = async (): Promise<
  Prisma.MultipleQuizQuestionCreateManyTopicInput[]
> => {
  return [
    {
      correctAnswer: "Das ist der Bock.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Bock/public",
      hint: "Ich bin ein Mann, ich habe Hörner und ich kann Milch geben.",
      answers: ["Das ist der Bock.", "Das ist das Schaf.", "Das ist das Reh."],
    },
    {
      correctAnswer: "Das ist der Esel.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Esel/public",
      hint: "Ich bin nicht das Pferd. Ich bin kleiner.",
      answers: [
        "Das ist das Pferd.",
        "Das ist der Esel.",
        "Das ist das Maultier.",
      ],
    },
    {
      correctAnswer: "Das ist die Gans.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Gans/public",
      hint: "Ich bin nicht die Ente. Ich bin böser.",
      answers: [
        "Das ist die Gans.",
        "Das ist die Ente.",
        "Das ist der Schwan.",
      ],
    },
    {
      correctAnswer: "Das ist der Hahn.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Hahn/public",
      hint: "Ich singe COCK-A-DOODLE-DOO jeden Sonnenaufgang.",
      answers: ["Das ist der Hahn.", "Das ist das Huhn.", "Das ist die Ente."],
    },
    {
      correctAnswer: "Das ist das Huhn.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Huhn/public",
      hint: "Ich kann Eier liegen.",
      answers: ["Das ist der Hahn.", "Das ist das Huhn.", "Das ist die Gans."],
    },
    {
      correctAnswer: "Das ist der Hund.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Hund/public",
      hint: "Ich bin der beste Freund des Menschen. Woof Woof",
      answers: ["Das ist der Hund.", "Das ist ein Katze.", "Das ist ein Wolf."],
    },
    {
      correctAnswer: "Das ist das Kaninchen.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Kaninchen/public",
      hint: "Ich komme jedes Ostern.",
      answers: [
        "Das ist das Kaninchen.",
        "Das ist ein Eichhörnchen.",
        "Das ist ein Waschbär.",
      ],
    },
    {
      correctAnswer: "Das ist die Katze.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Katze/public",
      hint: "Meoooow Meoooow.",
      answers: [
        "Das ist die Katze.",
        "Das ist ein Tiger.",
        "Das ist ein Löwe.",
      ],
    },
    {
      correctAnswer: "Das ist die Kuh.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Kuh/public",
      hint: "Ich gebe den Menschen Milch.",
      answers: [
        "Das ist die Kuh.",
        "Das ist der Ochse.",
        "Das ist ein Schafe.",
      ],
    },
    {
      correctAnswer: "Das ist ein Küken.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Küken/public",
      hint: "Ich komme aus einem Ei und Ich bin gelb.",
      answers: ["Das ist ein Küken.", "Das ist die Gans.", "Das ist das Huhn."],
    },
    {
      correctAnswer: "Das ist die Maus.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Maus/public",
      hint: "Ich bin sehr klein, und Ich habe Angst vor Katzen.",
      answers: [
        "Das ist die Maus.",
        "Das ist der Hund.",
        "Das ist das Kaninchen.",
      ],
    },
    {
      correctAnswer: "Das ist der Ochse.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Ochse/public",
      hint: "Ich werde sehr wütend, wenn ich die Farbe Rot sehe.",
      answers: [
        "Das ist der Ochse.",
        "Das ist die Kuh.",
        "Das ist der Büffel.",
      ],
    },
    {
      correctAnswer: "Das ist das Pferd.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Pferd/public",
      hint: "Ich mag Karotten, und die Leute mögen gerne auf mir reiten.",
      answers: [
        "Das ist das Pferd.",
        "Das ist der Esel.",
        "Das ist ein Einhorn.",
      ],
    },
    {
      correctAnswer: "Das ist das Schaf.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Schaf/public",
      hint: "Ich gebe den Leuten Milch, und Ich bin sehr schwammig.",
      answers: ["Das ist das Schaf.", "Das ist die Kuh.", "Das ist die Ziege."],
    },
    {
      correctAnswer: "Das ist das Schwein.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Schwein/public",
      hint: "Ich bin sehr groß und Rosa. Einige Leute essen mich auf Weihnachten.",
      answers: [
        "Das ist das Schwein.",
        "Das ist das Schaf.",
        "Das ist der Eber.",
      ],
    },
    {
      correctAnswer: "Das ist der Truthahn.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Truthahn/public",
      hint: "Gulu gulu gulu.",
      answers: [
        "Das ist der Truthahn.",
        "Das ist der Hahn.",
        "Das ist das Huhn.",
      ],
    },
    {
      correctAnswer: "Das ist der Widder.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Widder/public",
      hint: "Ich bin einem Schaf ähnlich, aber Ich bin männlich.",
      answers: [
        "Das ist der Widder.",
        "Das ist das Schaf.",
        "Das ist die Ziege.",
      ],
    },
    {
      correctAnswer: "Das ist die Ziege.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Ziege/public",
      hint: "Ich gebe den Leuten Milch, aber Ich bin nich die Kuh.",
      answers: [
        "Das ist die Ziege.",
        "Das ist der Bock.",
        "Das ist das Schaf.",
      ],
    },
  ];
};

export default buildQuestions;
