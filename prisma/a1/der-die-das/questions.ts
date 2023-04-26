import type { Prisma } from '@prisma/client';

const buildQuestions = async (): Promise<Prisma.MultipleQuizQuestionCreateManyTopicInput[]> => {
  return [
    {
      question: '___ Buch ist größ.',
      correctAnswer: 'das',
      hint: 'Buch ist Neutrum.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Apfel ist rot.',
      correctAnswer: 'der',
      hint: 'Apfel ist Maskulin',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Wohnung ist toll.',
      correctAnswer: 'die',
      hint: 'Wohnung ist Feminin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Schlüssel ist klein.',
      correctAnswer: 'der',
      hint: 'Schlüssel ist Maskulin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Spielzeug ist kaputt.',
      correctAnswer: 'das',
      hint: 'Spielzeug ist Neutrum.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Computer ist teuer.',
      correctAnswer: 'der',
      hint: 'Computer ist Maskulin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Freundin Name ist Maria.',
      correctAnswer: 'die',
      hint: 'Freundin ist Feminin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Musik ist laut.',
      correctAnswer: 'die',
      hint: 'Musik ist Feminin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Banane ist gelb.',
      correctAnswer: 'die',
      hint: 'Banane ist Feminin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Saft ist süß.',
      correctAnswer: 'der',
      hint: 'Saft ist Maskulin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Zeitung ist alt.',
      correctAnswer: 'die',
      hint: 'Zeitung ist Feminin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: 'Ist ___ Kaffee ist frisch?',
      correctAnswer: 'der',
      hint: 'Kaffee ist Maskulin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: 'Wohin fahren ___ Leute?',
      correctAnswer: 'die',
      hint: 'Leute ist Feminin.',
      answers: ['der', 'die', 'das'],
    },
    {
      question: 'Ist ___ Katze deine?',
      correctAnswer: 'die',
      hint: 'Katze ist Feminin',
      answers: ['der', 'die', 'das'],
    },
    {
      question: '___ Kinder gehen in die Schule.',
      correctAnswer: 'die',
      hint: 'Kinder ist Plural.',
      answers: ['der', 'die', 'das'],
    },
  ];
};

export default buildQuestions;
