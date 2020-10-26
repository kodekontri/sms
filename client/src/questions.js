const questions = [
  {
    id: 1,
    question: "1+1",
    answer: 2,
    options: [3, 4, 5],
  },
  {
    id: 2,
    question: "3+1",
    answer: 4,
    options: [3, 9, 8],
  },
  {
    id: 3,
    question: "What is Html",
    answer: "Hyper text markup language",
    options: ["hyper tp lanh", "hell to mike leke", "website"],
  },
  {
    id: 4,
    question: "is orange a fruit",
    answer: "Yes",
    options: ["No"],
  },
  {
    id: 5,
    question: "who is the owner of Facebook",
    answer: "Mark Zuckerberg",
    options: ["Daniel Moris", "Kate Tailwin", "Bootstrap"],
  },
];

questions.forEach((question) => {
  question.options.push(question.answer);
  question.options.sort(() => Math.random() - 0.5);
});

export default questions;
