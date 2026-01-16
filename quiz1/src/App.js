import './index.css';
import cat from './assets/cat.png'
import React from 'react';


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
  {
    title: 'Состояние в react может быть обновлено вызовом метода setState. Эти вызовы',
    variants: ['синхронные', 'асинхронные', 'являются асинхронными, но при необходимости могут быть сделаны синхронными '],
    correct: 1,
  },
  {
    title: 'Как много компонентов может быть в react-приложении?',
    variants: ['Не более 10', 'Неограниченное количество', 'Не более 300'],
    correct: 1,
  }
];

function Result({correct}) {
    const percentGood = (correct * 100) / questions.length;
    console.log(percentGood);
    let marka = 2;
    if (percentGood > 50 && percentGood <= 60){
        marka=3;
    } else if (percentGood > 60 && percentGood <= 70) {
        marka=4;
    }else if(percentGood > 70 && percentGood <= 100) {
        marka=5;
    }
    
    return (
        <div className='result'>
            <img className='result__img' src={cat}/>
            <h2 className='result__title'>Вы верно ответили на {correct} из {questions.length}. Оценка {marka}</h2>
            <a href='/'><button className='result__btn'>Попробовать снова</button></a>
        </div>
    );
}

// function marka ({correct}){
    
// }

function Test({step, question, onClickVariant}) {
    const percentage = Math.round(step / questions.length*100);
    return(

        <div className='test'>
            <div className='test__progress'>
                <div style={{width: `${percentage}%`}} className='progress-inner'></div>
            </div>
            <h1 className='test__question'>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                    <li className='answer' onClick={() => onClickVariant(index)} key={text}>{text}</li>
                ))
                }
                
                
            </ul>
        </div>

    )
}

function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    
    const question = questions[step];
    const onClickVariant = (index) => {
        setStep(step + 1);

        if(index === question.correct) {
            setCorrect(correct + 1);
        }
    }

  return (
    <div className="App">
        {
            step != questions.length ?
            (<Test step={step} question={question} onClickVariant={onClickVariant}/>)
            :
            (<Result correct={correct}/>)
        }
    </div>
  );
}

export default App;

