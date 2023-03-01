import { buildBlurImage } from "@utils/image-utils";

import type { Prisma } from "@prisma/client";

const buildQuestions = async (): Promise<
  Prisma.MultipleQuizQuestionCreateManyTopicInput[]
> => {
  return [
    {
      correctAnswer: "Das ist die Ananas.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Ananas/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Ananas_LowQ/blur"
      ),
      hint: "Ich bin gelb mit grünen Blättern an der Spitze.",
      answers: [
        "Das ist die Ananas.",
        "Das ist der Apfel.",
        "Das ist die Banane.",
      ],
    },
    {
      correctAnswer: "Das ist der Apfel.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Apfel/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Apfel_LowQ/blur"
      ),
      hint: "Ich bin Gelb, Grün oder Rot, und Ich mache Ärzten Angst.",
      answers: [
        "Das ist der Apfel.",
        "Das ist die Banane.",
        "Das ist die Tomate.",
      ],
    },
    {
      correctAnswer: "Das ist die Banane.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Banane/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Banane_LowQ/blur"
      ),
      hint: "Affen lieben mich.",
      answers: [
        "Das ist die Banane.",
        "Das ist die Ananas.",
        "Das ist die Mango.",
      ],
    },
    {
      correctAnswer: "Das ist die Bohne.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Bohne/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Bohne_LowQ/blur"
      ),
      hint: "",
      answers: [
        "Das ist die Bohne.",
        "Das ist die Erbse.",
        "Das ist die Gurke.",
      ],
    },
    {
      correctAnswer: "Das ist der Brokkoli.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Brokkoli/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Brokkoli_LowQ/blur"
      ),
      hint: "",
      answers: [
        "Das ist der Brokkoli.",
        "Das ist der Rettich.",
        "Das ist die Zwiebel.",
      ],
    },
    {
      correctAnswer: "Das ist das Brot.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Brot/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Brot_LowQ/blur"
      ),
      hint: "Du kannst nicht ohne mich ein Sandwich machen.",
      answers: [
        "Das ist das Brot.",
        "Das ist das Brötchen.",
        "Das ist die Kartoffel.",
      ],
    },
    {
      correctAnswer: "Das ist die Butter.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Butter/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Butter_LowQ/blur"
      ),
      hint: "Du kannst auf mich Marmelade legen.",
      answers: [
        "Das ist die Butter.",
        "Das ist die Käse.",
        "Das ist das Brot.",
      ],
    },
    {
      correctAnswer: "Das ist die Chips.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Chips/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Chips_LowQ/blur"
      ),
      hint: "",
      answers: [
        "Das ist die Chips.",
        "Das ist die Kartoffeln.",
        "Das ist die Tüte.",
      ],
    },
    {
      correctAnswer: "Das ist das Croissant.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Croissant/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Croissant_LowQ/blur"
      ),
      hint: "Ich bin sehr lecker und ich bin aus Frankreich.",
      answers: [
        "Das ist das Croissant.",
        "Das ist das Brot.",
        "Das ist der Kuchen.",
      ],
    },
    {
      correctAnswer: "Das ist der Fisch.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Fisch/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Fisch_LowQ/blur"
      ),
      hint: "Ich lebe im Wasser.",
      answers: [
        "Das ist der Fisch.",
        "Das ist das Fleisch.",
        "Das ist das Huhn.",
      ],
    },
    {
      correctAnswer: "Das ist der Joghurt.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Joghurt/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Joghurt_LowQ/blur"
      ),
      hint: "Ich bin aus Milch gemacht.",
      answers: [
        "Das ist der Joghurt.",
        "Das ist die Milch.",
        "Das ist die Käse.",
      ],
    },
    {
      correctAnswer: "Das ist die Karotte.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Karotte/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Karotte_LowQ/blur"
      ),
      hint: "Die Kaninchen mögen mich sehr gerne.",
      answers: [
        "Das ist die Karotte.",
        "Das ist der Kürbis.",
        "Das ist der Rettich.",
      ],
    },
    {
      correctAnswer: "Das ist die Kartoffel.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Kartoffel/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Kartoffel_LowQ/blur"
      ),
      hint: "Ich bin rund und braun, und sehr gut in der Supper.",
      answers: [
        "Das ist die Kartoffel.",
        "Das ist die Gurke.",
        "Das ist der Kürbis.",
      ],
    },
    {
      correctAnswer: "Das ist die Käse.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Käse/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Käse_LowQ/blur"
      ),
      hint: "Die Mäuse mögen mich sehr viel.",
      answers: [
        "Das ist die Käse.",
        "Das ist die Milch.",
        "Das ist der Joghurt.",
      ],
    },
    {
      correctAnswer: "Das ist die Marmelade.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Marmelade/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Marmelade_LowQ/blur"
      ),
      hint: "",
      answers: [
        "Das ist die Marmelade.",
        "Das ist der Saft.",
        "Das ist Nutella.",
      ],
    },
    {
      correctAnswer: "Das ist die Milch.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Milch/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Milch_LowQ/blur"
      ),
      hint: "Ich komme von Kühen.",
      answers: [
        "Das ist die Milch.",
        "Das ist das Wasser.",
        "Das ist die Käse.",
      ],
    },
    {
      correctAnswer: "Das ist das Olivenöl.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Olivenöl/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Olivenöl_LowQ/blur"
      ),
      hint: "Ich bin sehr gesund unde komme von Oliven.",
      answers: [
        "Das ist das Olivenöl.",
        "Das ist das Baum­öl.",
        "Das ist das Sonnenblumenöl.",
      ],
    },
    {
      correctAnswer: "Das ist die Tomate.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Tomate/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Tomate_LowQ/blur"
      ),
      hint: "Ich bin einem Apfel ähnlich.",
      answers: [
        "Das ist die Tomate.",
        "Das ist die Radieschen.",
        "Das ist der Rhabarber.",
      ],
    },
    {
      correctAnswer: "Das ist der Zucker.",
      image:
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Zucker/public",
      blurImage: await buildBlurImage(
        "https://imagedelivery.net/G1lMtwsUs9dEAB6xuB8WcA/A1_Lebensmittel_Zucker_LowQ/blur"
      ),
      hint: "Ich bin nich sauer; ich bin süss.",
      answers: [
        "Das ist der Zucker.",
        "Das ist das Salz.",
        "Das ist der Pfeffer.",
      ],
    },
  ];
};

export default buildQuestions;
