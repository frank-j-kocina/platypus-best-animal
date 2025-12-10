import { useState } from 'react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

function Presentation() {
  const [revealedAnswers, setRevealedAnswers] = useState<number[]>([])

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'What is a baby platypus called?',
      options: ['A) A kitten', 'B) A puggle', 'C) A puppy', 'D) A cub'],
      correctAnswer: 'B) A puggle',
      explanation: 'That\'s right! A baby platypus is officially called a "puggle."'
    },
    {
      id: 2,
      question: 'Where does a platypus store its food before it eats it?',
      options: ['A) In a backpack', 'B) In its stomach', 'C) In its cheek pouches', 'D) In its pockets'],
      correctAnswer: 'C) In its cheek pouches',
      explanation: 'Correct! A platypus scoops up food and stores it in its cheek pouches while underwater. Then it swims to the top to eat.'
    },
    {
      id: 3,
      question: 'What special body part does a male platypus have on its back leg?',
      options: ['A) A sharp spur with venom', 'B) An extra toe', 'C) A tiny wing', 'D) A super bouncy spring'],
      correctAnswer: 'A) A sharp spur with venom',
      explanation: 'Yes! Male platypuses have a sharp spur on their hind leg that can give a painful sting.'
    },
    {
      id: 4,
      question: 'How does a platypus find food underwater when its eyes and ears are closed?',
      options: ['A) It uses a flashlight', 'B) It asks other fish for help', 'C) It uses its super-sensitive bill', 'D) It guesses where the food is'],
      correctAnswer: 'C) It uses its super-sensitive bill',
      explanation: 'That\'s right! Their bill works like a metal detector to feel tiny electric sparks from food hidden in the mud.'
    },
    {
      id: 5,
      question: 'What happens if you shine a special UV light on a platypus in the dark?',
      options: ['A) It turns invisible', 'B) It starts to dance', 'C) It glows in the dark (blue and green)', 'D) It falls asleep'],
      correctAnswer: 'C) It glows in the dark (blue and green)',
      explanation: 'Correct! Under a special UV light, a platypus\'s brown fur glows blue and green. It\'s like a built-in night light!'
    },
    {
      id: 6,
      question: 'A platypus is a mammal, but it does something very special that most other mammals don\'t do. What is it?',
      options: ['A) It flies in the sky', 'B) It lays eggs', 'C) It has purple fur', 'D) It eats only candy'],
      correctAnswer: 'B) It lays eggs',
      explanation: 'Yes! Along with the echidna, the platypus is one of the only mammals that lays eggs instead of having live babies.'
    },
    {
      id: 7,
      question: 'Why is a platypus called a "living fossil"?',
      options: ['A) Because it is made of rock', 'B) Because its family type has been on Earth since the dinosaurs', 'C) Because it looks like a dinosaur', 'D) Because it lives in a museum'],
      correctAnswer: 'B) Because its family type has been on Earth since the dinosaurs',
      explanation: 'An individual platypus doesn\'t live forever, but the platypus type of animal has been on Earth for millions of years.'
    },
    {
      id: 8,
      question: 'What is special about a platypus\'s fur?',
      options: ['A) It is made of feathers', 'B) It is waterproof', 'C) It is bright pink', 'D) It falls off in the summer'],
      correctAnswer: 'B) It is waterproof',
      explanation: 'That\'s right! Their fur is super thick and has two layers to keep them warm and dry, even when they are swimming underwater.'
    },
    {
      id: 9,
      question: 'Do adult platypuses have teeth?',
      options: ['A) Yes, they have lots of sharp teeth', 'B) No, they do not have teeth', 'C) Only the boy platypuses have teeth', 'D) They have teeth made of gold'],
      correctAnswer: 'B) No, they do not have teeth',
      explanation: 'Correct! Adult platypuses do not have teeth. They chew their food using rough pads inside their mouths. (Only baby puggles are born with teeth!)'
    },
    {
      id: 10,
      question: 'Where does a baby platypus get its milk from?',
      options: ['A) From a bottle', 'B) From the mom\'s skin', 'C) From a store', 'D) It doesn\'t drink milk'],
      correctAnswer: 'B) From the mom\'s skin',
      explanation: 'Yes! The mom doesn\'t have nipples. Her milk oozes onto her skin like sweat, and the baby puggle laps it up.'
    }
  ]

  const toggleAnswer = (id: number) => {
    setRevealedAnswers(prev =>
      prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
    )
  }

  return (
    <div className="page-content">
      <h1>Platypus Quiz</h1>
      <p className="page-intro">
        Test your platypus knowledge! Click on each question to reveal the correct answer and learn why.
      </p>

      <div className="quiz-container">
        {questions.map(q => (
          <div key={q.id} className="quiz-question">
            <h3 className="question-number">Question {q.id}</h3>
            <p className="question-text">{q.question}</p>
            <ul className="options-list">
              {q.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            <button
              className="reveal-button"
              onClick={() => toggleAnswer(q.id)}
            >
              {revealedAnswers.includes(q.id) ? 'Hide Answer' : 'Show Answer'}
            </button>
            {revealedAnswers.includes(q.id) && (
              <div className="answer-section">
                <p className="correct-answer"><strong>Correct Answer:</strong> {q.correctAnswer}</p>
                <p className="explanation"><strong>Why?</strong> {q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Presentation
