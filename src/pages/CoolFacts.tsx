import { useState } from 'react'

interface FactCard {
  id: number
  category: string
  front: string
  back: string
}

function CoolFacts() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const facts: FactCard[] = [
    {
      id: 1,
      category: 'Mind-Blowing Body Tricks',
      front: 'The Missing Tummy',
      back: 'Did you know the platypus has NO stomach? They are one of the only animals on Earth that lost their stomach. Food goes straight from their mouth to their intestines.'
    },
    {
      id: 2,
      category: 'Mind-Blowing Body Tricks',
      front: 'The Sixth Sense (Superpower!)',
      back: 'How do they hunt with their eyes, ears, and nose closed underwater? They use Electroreception! Their bill works like a metal detector, feeling the tiny electrical sparks made by shrimp moving in the mud.'
    },
    {
      id: 3,
      category: 'Mind-Blowing Body Tricks',
      front: 'Glow-in-the-Dark',
      back: 'If you shine a special UV "black light" on a platypus, it doesn\'t look brown—it glows Blue and Green! This is called biofluorescence.'
    },
    {
      id: 4,
      category: 'Mind-Blowing Body Tricks',
      front: 'Milk "Sweat"',
      back: 'Platypus moms don\'t have nipples like dogs or cows. Instead, milk oozes out of special patches on their skin (like sweat!), and the babies lap it up.'
    },
    {
      id: 5,
      category: 'Danger Zone',
      front: 'Venomous Kicks',
      back: 'Don\'t get too close! The male platypus has a sharp, hollow spur on his back legs. It delivers a stinging venom (poison) that is super painful.'
    },
    {
      id: 6,
      category: 'Danger Zone',
      front: 'No Teeth? No Problem!',
      back: 'Adult platypuses have zero teeth. They chew their food using rough, gravelly pads inside their mouths. Fun Fact: Baby puggles are actually born with teeth, but they fall out as soon as they grow up!'
    },
    {
      id: 7,
      category: 'Time Travelers & DNA',
      front: 'The Dino-Buddy',
      back: 'We call them "Living Fossils" because they have been on Earth for over 100 million years. That means the platypus was swimming in rivers while the T-Rex was walking on land!'
    },
    {
      id: 8,
      category: 'Time Travelers & DNA',
      front: 'The DNA Puzzle',
      back: 'When scientists looked at platypus DNA, they were shocked. It contains a mix of genes from Reptiles, Birds, and Mammals. It\'s like a genetic jigsaw puzzle!'
    },
    {
      id: 9,
      category: 'Time Travelers & DNA',
      front: 'The "Monotreme" Club',
      back: 'Along with their cousin the Echidna, they are the only mammals in the world that lay eggs. Scientists call this special group Monotremes.'
    },
    {
      id: 10,
      category: 'Cute & Cuddly Stats',
      front: 'Baby Name Alert',
      back: 'A baby platypus isn\'t called a pup or a kitten—it\'s officially called a "Puggle!"'
    },
    {
      id: 11,
      category: 'Cute & Cuddly Stats',
      front: 'Natural Wetsuit',
      back: 'Their fur is super thick (packed with 900 hairs in every tiny spot!). It has two layers to trap air, keeping the platypus warm and completely dry—even after swimming for hours.'
    },
    {
      id: 12,
      category: 'Cute & Cuddly Stats',
      front: 'The Hungry, Hungry Puggle',
      back: 'Because they don\'t have a stomach to hold food, they get hungry fast. A platypus has to eat 20-30% of its own body weight every single day. That\'s like an 80-pound kid eating 50 hamburgers for lunch!'
    }
  ]

  const toggleCard = (id: number) => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    )
  }

  const getCategoryEmoji = (category: string) => {
    if (category.includes('Mind-Blowing')) return '🧠'
    if (category.includes('Danger')) return '⚠️'
    if (category.includes('Time Travelers')) return '🦕'
    if (category.includes('Cute')) return '🦦'
    return ''
  }

  return (
    <div className="page-content">
      <h1>Cool Facts</h1>
      <p className="page-intro">
        <strong>You Won't Believe This!</strong> Think you know everything about the platypus? Think again!
        Here are the weirdest, coolest, and wildest facts to share with your friends.
        Click each card to reveal the amazing fact!
      </p>

      <div className="facts-grid">
        {facts.map(fact => (
          <div
            key={fact.id}
            className={`flip-card ${flippedCards.includes(fact.id) ? 'flipped' : ''}`}
            onClick={() => toggleCard(fact.id)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="card-emoji">{getCategoryEmoji(fact.category)}</span>
                <h3 className="card-title">{fact.front}</h3>
                <p className="card-hint">Click to reveal!</p>
              </div>
              <div className="flip-card-back">
                <p className="card-fact">{fact.back}</p>
                <p className="card-hint">Click to flip back</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoolFacts
