import type { Prisma } from "@prisma/client";

const questions: Prisma.MultipleQuizQuestionCreateManyTopicInput[] = [
  {
    correctAnswer: "Das ist ein Bock.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Bock/public",
    hint: "Ich bin ein Mann, ich habe Hörner und ich kann Milch geben.",
    answers: ["Das ist ein Bock.", "Das ist ein Schaf.", "Das ist ein Reh."],
  },
  {
    correctAnswer: "Das ist ein Esel.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Esel/public",
    hint: "Ich bin nicht ein Pferd. Ich bin kleiner.",
    answers: [
      "Das ist ein Pferd.",
      "Das ist ein Esel.",
      "Das ist ein Maultier.",
    ],
  },
  {
    correctAnswer: "Das ist ein Gans.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Gans/public",
    hint: "Ich bin nicht eine Ente. Ich bin böser.",
    answers: ["Das ist ein Gans.", "Das ist eine Ente.", "Das ist ein Schwan."],
  },
  {
    correctAnswer: "Das ist ein Hahn.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Hahn/public",
    hint: "Ich singe COCK-A-DOODLE-DOO jeden Sonnenaufgang.",
    answers: ["Das ist ein Hahn.", "Das ist ein Huhn.", "Das ist eine Ente."],
  },
  {
    correctAnswer: "Das ist ein Huhn.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Huhn/public",
    hint: "Ich kann Eier liegen.",
    answers: ["Das ist ein Hahn.", "Das ist ein Huhn.", "Das ist eine Gans."],
  },
  {
    correctAnswer: "Das ist ein Hund.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Hund/public",
    hint: "Ich bin der beste Freund des Menschen. Woof Woof",
    answers: ["Das ist ein Hund.", "Das ist ein Katze.", "Das ist ein Wolf."],
  },
  {
    correctAnswer: "Das ist ein Kaninchen.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Kaninchen/public",
    hint: "Ich komme jedes Ostern.",
    answers: [
      "Das ist ein Kaninchen.",
      "Das ist ein Eichhörnchen.",
      "Das ist ein Waschbär.",
    ],
  },
  {
    correctAnswer: "Das ist eine Katze.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Katze/public",
    hint: "Meoooow Meoooow.",
    answers: ["Das ist eine Katze.", "Das ist ein Tiger.", "Das ist ein Löwe."],
  },
  {
    correctAnswer: "Das ist eine Kuh.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Kuh/public",
    hint: "Ich gebe den Menschen Milch.",
    answers: ["Das ist eine Kuh.", "Das ist ein Ochse.", "Das ist ein Schafe."],
  },
  {
    correctAnswer: "Das ist ein Küken.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Küken/public",
    hint: "Ich komme aus einem Ei und Ich bin gelb.",
    answers: ["Das ist ein Küken.", "Das ist eine Gans.", "Das ist ein Huhn."],
  },
  {
    correctAnswer: "Das ist eine Maus.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Maus/public",
    hint: "Ich bin sehr klein, und Ich habe Angst vor Katzen.",
    answers: [
      "Das ist eine Maus.",
      "Das ist ein Hund.",
      "Das ist ein Kaninchen.",
    ],
  },
  {
    correctAnswer: "Das ist ein Ochse.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Ochse/public",
    hint: "Ich werde sehr wütend, wenn ich die Farbe Rot sehe.",
    answers: ["Das ist ein Ochse.", "Das ist eine Kuh.", "Das ist ein Büffel."],
  },
  {
    correctAnswer: "Das ist ein Pferd.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Pferd/public",
    hint: "Ich mag Karotten, und die Leute mögen gerne auf mir reiten.",
    answers: [
      "Das ist ein Pferd.",
      "Das ist ein Esel.",
      "Das ist ein Einhorn.",
    ],
  },
  {
    correctAnswer: "Das ist ein Schaf.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Schaf/public",
    hint: "Ich gebe den Leuten Milch, und Ich bin sehr schwammig.",
    answers: ["Das ist ein Schaf.", "Das ist eine Kuh.", "Das ist eine Ziege."],
  },
  {
    correctAnswer: "Das ist ein Schwein.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Schwein/public",
    hint: "Ich bin sehr groß und Rosa. Einige Leute essen mich auf Weihnachten.",
    answers: [
      "Das ist ein Schwein.",
      "Das ist ein Schaf.",
      "Das ist ein Eber.",
    ],
  },
  {
    correctAnswer: "Das ist ein Truthahn.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Truthahn/public",
    hint: "Gulu gulu gulu.",
    answers: [
      "Das ist ein Truthahn.",
      "Das ist ein Hahn.",
      "Das ist ein Huhn.",
    ],
  },
  {
    correctAnswer: "Das ist ein Widder.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Widder/public",
    hint: "Ich bin einem Schaf ähnlich, aber Ich bin männlich.",
    answers: [
      "Das ist ein Widder.",
      "Das ist ein Schaf.",
      "Das ist ein Ziege.",
    ],
  },
  {
    correctAnswer: "Das ist eine Ziege.",
    image:
      "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Tiere_Ziege/public",
    hint: "Ich gebe den Leuten Milch, aber Ich bin nich eine Kuh.",
    answers: ["Das ist eine Ziege.", "Das ist ein Bock.", "Das ist ein Schaf."],
  },
];

export default questions;
