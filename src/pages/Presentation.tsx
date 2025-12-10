import { useState } from 'react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  correctLetter: string
  explanation: string
  wrongAnswerMessages: { [key: string]: string }
}

function Presentation() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'What is a baby platypus called?',
      options: ['A) A kitten', 'B) A puggle', 'C) A puppy', 'D) A cub'],
      correctAnswer: 'B) A puggle',
      correctLetter: 'B',
      explanation: 'That\'s right! A baby platypus is officially called a "puggle."',
      wrongAnswerMessages: {
        'A': 'Nice try! Kittens are baby cats. Platypuses are way more unique than that!',
        'C': 'Oops! Puppies are baby dogs. A platypus baby has a much sillier name!',
        'D': 'Not quite! Cubs are baby bears. The platypus baby has its own special name that sounds super cute!'
      }
    },
    {
      id: 2,
      question: 'Where does a platypus store its food before it eats it?',
      options: ['A) In a backpack', 'B) In its stomach', 'C) In its cheek pouches', 'D) In its pockets'],
      correctAnswer: 'C) In its cheek pouches',
      correctLetter: 'C',
      explanation: 'Correct! A platypus scoops up food and stores it in its cheek pouches while underwater. Then it swims to the top to eat.',
      wrongAnswerMessages: {
        'A': 'Ha! That would be funny to see! But platypuses don\'t wear backpacks. Think about body parts animals actually have!',
        'B': 'Good thinking, but remember—platypuses don\'t even HAVE a stomach! Where else could they store stuff?',
        'D': 'Clever guess! But platypuses don\'t have pockets like kangaroos. Their storage spot is built into their face!'
      }
    },
    {
      id: 3,
      question: 'What special body part does a male platypus have on its back leg?',
      options: ['A) A sharp spur with venom', 'B) An extra toe', 'C) A tiny wing', 'D) A super bouncy spring'],
      correctAnswer: 'A) A sharp spur with venom',
      correctLetter: 'A',
      explanation: 'Yes! Male platypuses have a sharp spur on their hind leg that can give a painful sting.',
      wrongAnswerMessages: {
        'B': 'Nope! An extra toe would be weird, but not that special. The real answer is much more dangerous!',
        'C': 'That would be AMAZING, but platypuses can\'t fly! Their special leg feature is used for defense.',
        'D': 'Ha! A bouncy spring would make them super jumpers, but that\'s not it. Think dangerous, not bouncy!'
      }
    },
    {
      id: 4,
      question: 'How does a platypus find food underwater when its eyes and ears are closed?',
      options: ['A) It uses a flashlight', 'B) It asks other fish for help', 'C) It uses its super-sensitive bill', 'D) It guesses where the food is'],
      correctAnswer: 'C) It uses its super-sensitive bill',
      correctLetter: 'C',
      explanation: 'That\'s right! Their bill works like a metal detector to feel tiny electric sparks from food hidden in the mud.',
      wrongAnswerMessages: {
        'A': 'LOL! Underwater flashlights would be cool, but platypuses don\'t carry tools! They have a built-in superpower instead.',
        'B': 'Nice thought, but fish aren\'t very helpful! Plus, platypuses need to hunt FAST. They use a special body part instead!',
        'D': 'That would be pretty bad at finding dinner! Nature gave them something WAY better than guessing!'
      }
    },
    {
      id: 5,
      question: 'What happens if you shine a special UV light on a platypus in the dark?',
      options: ['A) It turns invisible', 'B) It starts to dance', 'C) It glows in the dark (blue and green)', 'D) It falls asleep'],
      correctAnswer: 'C) It glows in the dark (blue and green)',
      correctLetter: 'C',
      explanation: 'Correct! Under a special UV light, a platypus\'s brown fur glows blue and green. It\'s like a built-in night light!',
      wrongAnswerMessages: {
        'A': 'Whoa! That would be a cool magic trick, but platypuses can\'t turn invisible. They do something almost as cool though!',
        'B': 'Ha! Dancing platypuses would be hilarious, but UV light doesn\'t make them boogie. It does make them look magical though!',
        'D': 'Nope! UV light doesn\'t put them to sleep. It actually reveals a hidden surprise in their fur!'
      }
    },
    {
      id: 6,
      question: 'A platypus is a mammal, but it does something very special that most other mammals don\'t do. What is it?',
      options: ['A) It flies in the sky', 'B) It lays eggs', 'C) It has purple fur', 'D) It eats only candy'],
      correctAnswer: 'B) It lays eggs',
      correctLetter: 'B',
      explanation: 'Yes! Along with the echidna, the platypus is one of the only mammals that lays eggs instead of having live babies.',
      wrongAnswerMessages: {
        'A': 'Nope! Bats are the only mammals that fly. Platypuses are amazing swimmers, but they stay on the ground!',
        'C': 'Ha! Purple fur would be awesome, but their fur is brown (and glows under UV light!). Think about how babies are born...',
        'D': 'LOL! They would get SO many cavities! Platypuses eat bugs and worms, not candy. Their special trait is about babies!'
      }
    },
    {
      id: 7,
      question: 'Why is a platypus called a "living fossil"?',
      options: ['A) Because it is made of rock', 'B) Because its family type has been on Earth since the dinosaurs', 'C) Because it looks like a dinosaur', 'D) Because it lives in a museum'],
      correctAnswer: 'B) Because its family type has been on Earth since the dinosaurs',
      correctLetter: 'B',
      explanation: 'An individual platypus doesn\'t live forever, but the platypus type of animal has been on Earth for millions of years.',
      wrongAnswerMessages: {
        'A': 'Ha! That would hurt! Platypuses are soft and furry, not made of rock. "Living fossil" means something else!',
        'C': 'Not quite! They don\'t really look like dinosaurs. The term "living fossil" is about how LONG they\'ve been around!',
        'D': 'Nope! Museums have fossils, but platypuses live in rivers in Australia. Think about TIME, not PLACE!'
      }
    },
    {
      id: 8,
      question: 'What is special about a platypus\'s fur?',
      options: ['A) It is made of feathers', 'B) It is waterproof', 'C) It is bright pink', 'D) It falls off in the summer'],
      correctAnswer: 'B) It is waterproof',
      correctLetter: 'B',
      explanation: 'That\'s right! Their fur is super thick and has two layers to keep them warm and dry, even when they are swimming underwater.',
      wrongAnswerMessages: {
        'A': 'Nope! Birds have feathers, but platypuses are mammals with FUR. Though they do have a bill like a bird... tricky!',
        'C': 'That would be wild! But their fur is brown, not pink. Think about what would help them swim in cold water!',
        'D': 'Nope! They keep their fur all year. Good thing too, because they need it for swimming! What would fur need to be for swimming?'
      }
    },
    {
      id: 9,
      question: 'Do adult platypuses have teeth?',
      options: ['A) Yes, they have lots of sharp teeth', 'B) No, they do not have teeth', 'C) Only the boy platypuses have teeth', 'D) They have teeth made of gold'],
      correctAnswer: 'B) No, they do not have teeth',
      correctLetter: 'B',
      explanation: 'Correct! Adult platypuses do not have teeth. They chew their food using rough pads inside their mouths. (Only baby puggles are born with teeth!)',
      wrongAnswerMessages: {
        'A': 'Not quite! Baby puggles have teeth, but they fall out as adults. Grown-up platypuses use something else to chew!',
        'C': 'Nope! Boy and girl platypuses are the same in this way—neither adults have teeth! They both use rough pads instead.',
        'D': 'Ha! Golden teeth would make them very fancy, but platypuses don\'t have ANY teeth as adults!'
      }
    },
    {
      id: 10,
      question: 'Where does a baby platypus get its milk from?',
      options: ['A) From a bottle', 'B) From the mom\'s skin', 'C) From a store', 'D) It doesn\'t drink milk'],
      correctAnswer: 'B) From the mom\'s skin',
      correctLetter: 'B',
      explanation: 'Yes! The mom doesn\'t have nipples. Her milk oozes onto her skin like sweat, and the baby puggle laps it up.',
      wrongAnswerMessages: {
        'A': 'LOL! Wild animals don\'t use bottles! Baby platypuses drink milk from their mom, but not in the normal way...',
        'C': 'Ha! Puggles don\'t go shopping! They get milk from mom, but she doesn\'t have nipples like most mammals!',
        'D': 'Nope! Platypuses ARE mammals, so babies definitely drink milk. But HOW they get it is super weird!'
      }
    }
  ]

  const selectAnswer = (questionId: number, answer: string) => {
    if (!submitted) {
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: answer
      }))
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetQuiz = () => {
    setSelectedAnswers({})
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getScore = () => {
    return questions.filter(q => {
      const selected = selectedAnswers[q.id]
      return selected && selected.startsWith(q.correctLetter)
    }).length
  }

  const getAnsweredCount = () => {
    return Object.keys(selectedAnswers).length
  }

  const isCorrect = (questionId: number) => {
    const question = questions.find(q => q.id === questionId)
    const selected = selectedAnswers[questionId]
    return selected && question && selected.startsWith(question.correctLetter)
  }

  return (
    <div className="page-content">
      <h1>Platypus Quiz</h1>

      {submitted ? (
        <div className="quiz-results">
          <h2>Quiz Results</h2>
          <p className="score-display">
            You got {getScore()} out of {getAnsweredCount()} correct!
          </p>
          {getAnsweredCount() < questions.length && (
            <p className="skipped-notice">
              You skipped {questions.length - getAnsweredCount()} question{questions.length - getAnsweredCount() !== 1 ? 's' : ''}
            </p>
          )}
          {getScore() === getAnsweredCount() && getAnsweredCount() > 0 && (
            <p className="perfect-score">Perfect score on the questions you answered!</p>
          )}
          {getAnsweredCount() === questions.length && getScore() === questions.length && (
            <p className="perfect-score">Perfect score! You're a platypus expert!</p>
          )}
          {getScore() >= getAnsweredCount() * 0.7 && getScore() < getAnsweredCount() && getAnsweredCount() > 0 && (
            <p className="good-score">Great job! You know a lot about platypuses!</p>
          )}
          {getScore() < getAnsweredCount() * 0.7 && getScore() >= getAnsweredCount() * 0.4 && getAnsweredCount() > 0 && (
            <p className="okay-score">Not bad! Keep learning about these amazing animals!</p>
          )}
          {getScore() < getAnsweredCount() * 0.4 && getAnsweredCount() > 0 && (
            <p className="low-score">Keep trying! Read through the facts to learn more!</p>
          )}
          {getAnsweredCount() === 0 && (
            <p className="no-answers">You didn't answer any questions! Give it a try!</p>
          )}
        </div>
      ) : (
        <p className="page-intro">
          Test your platypus knowledge! Select your answer for each question, then submit to see how you did.
        </p>
      )}

      <div className="quiz-container">
        {questions.map(q => {
          const selected = selectedAnswers[q.id]
          const isAnswerCorrect = isCorrect(q.id)
          const selectedLetter = selected ? selected.charAt(0) : ''

          return (
            <div key={q.id} className={`quiz-question ${submitted ? (!selected ? 'skipped' : isAnswerCorrect ? 'correct' : 'incorrect') : ''}`}>
              <h3 className="question-number">Question {q.id}</h3>
              <p className="question-text">{q.question}</p>
              <ul className="options-list">
                {q.options.map((option, index) => {
                  const optionLetter = option.charAt(0)
                  const isSelected = selected === option
                  const isCorrectOption = optionLetter === q.correctLetter

                  let className = 'option-item'
                  if (isSelected) className += ' selected'
                  if (submitted && isCorrectOption) className += ' correct-option'
                  if (submitted && isSelected && !isAnswerCorrect) className += ' wrong-option'

                  return (
                    <li
                      key={index}
                      className={className}
                      onClick={() => selectAnswer(q.id, option)}
                    >
                      {option}
                    </li>
                  )
                })}
              </ul>

              {submitted && (
                <div className={`answer-section ${!selected ? 'skipped-answer-section' : isAnswerCorrect ? 'correct-answer-section' : 'wrong-answer-section'}`}>
                  {!selected ? (
                    <>
                      <p className="feedback-skipped">You skipped this question</p>
                      <p className="correct-answer-reveal">
                        <strong>The correct answer is:</strong> {q.correctAnswer}
                      </p>
                      <p className="explanation">{q.explanation}</p>
                    </>
                  ) : isAnswerCorrect ? (
                    <>
                      <p className="feedback-correct">Correct!</p>
                      <p className="explanation">{q.explanation}</p>
                    </>
                  ) : (
                    <>
                      <p className="feedback-wrong">Not quite!</p>
                      <p className="explanation">{q.wrongAnswerMessages[selectedLetter]}</p>
                      <p className="correct-answer-reveal">
                        <strong>The correct answer is:</strong> {q.correctAnswer}
                      </p>
                      <p className="explanation">{q.explanation}</p>
                    </>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="floating-submit">
        {!submitted ? (
          <button
            className="submit-quiz-button ready"
            onClick={handleSubmit}
          >
            Submit Answers ({Object.keys(selectedAnswers).length}/{questions.length})
          </button>
        ) : (
          <button
            className="submit-quiz-button ready"
            onClick={resetQuiz}
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}

export default Presentation
