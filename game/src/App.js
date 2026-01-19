import './App.css';
import { useState, useEffect } from 'react';
import './components/SingleCard';
import SingleCard from './components/SingleCard';


const cardImages = [
    {src: "/img/helmet-1.png", matched: false},
    {src: "/img/cure-1.png", matched: false},
    {src: "/img/dagger-1.png", matched: false},
    {src: "/img/potion-1.png", matched: false},
    {src: "/img/ring-1.png", matched: false},
    {src: "/img/shield-1.png", matched: false}
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))
        
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card) => {
        if (card===choiceOne || card === choiceTwo || card.matched){
            return;
        }else if(!choiceOne){
            setChoiceOne(card)
        } else if(!choiceTwo){
            setChoiceTwo(card)
        }
    }

    useEffect(() => {
        if (choiceOne && choiceTwo){
            setDisabled(true)
            if(choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src == choiceOne.src){
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else{
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo]
)

const resetTurn = () => {
    setChoiceOne(null) 
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
}

useEffect(() => {shuffleCards()}, [])
const endGame = () => {
    let num = 0;
    cardImages.forEach((card) => {
        if (card.matched===true){
            num++;
        }
    })

    if(num===0){
        return <p> игра окончена</p>;
    } else {
        return false;
    }

}
  return (
    <div className="App">
        <h1>Игра "Найди пару"</h1>
        <button className='btn' onClick={shuffleCards}>Новая игра</button>
        <div className='card-grid'>
            {cards.map(card =>(
                <SingleCard key={card.id} card={card} handleChoice={handleChoice} 
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}/>
            ))}
        </div>
        <p>Количество поворотов &#32;{turns}</p>
        {endGame()}
    </div>
  );
}

export default App;
