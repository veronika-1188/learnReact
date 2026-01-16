import './App.css';
import { useState } from 'react';

const cardImages = [
    {src: "../public/img/helmet-1.png"},
    {src: "../public/img/cure-1.png"},
    {src: "../public/img/dagger-1.png"},
    {src: "../public/img/potion-1.png"},
    {src: "../public/img/ring-1.png"},
    {src: "../public/img/shield-1.png"},

]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))
    }

  return (
    <div className="App">
        <h1>Игра "Найди пару"</h1>
        <button className='btn'>Новая игра</button>
    </div>
  );
}

export default App;
