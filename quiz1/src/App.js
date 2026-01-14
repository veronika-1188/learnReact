import './index.css';
import cat from './assets/cat.png'


const questions = [
  {
    title: ' Какая компания разработала React JS?',
    variants: ['Facebook', 'Google', 'Twitter'],
    correct: 0,
  },
  {
    title: 'Где правильно выведен компонент через рендер (представим, что компонент называется Test)',
    variants: ['<Test>', '<Test/>', '<test/>'],
    correct: 1,
  },
  {
    title: 'Что такое React?',
    variants: ['MVC-фреймворк', 'Back-end платформа', 'JavaScript библиотека'],
    correct: 2,
  },
];

function Result() {
    return (
        <div className='result'>
            <img src={cat} />
            <h2>Вы верно ответили на 3 из 3</h2>
            <button>Попробовать снова</button>
        </div>
    )
}

function Test() {
    return(
        <>
        <div>
            
        </div>
        </>
    )
}

function App() {
  return (
    <div className="App">
        
    </div>
  );
}

export default App;

