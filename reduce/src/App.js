const expenses = [
  { id: 1, category: 'еда', amount: 500, date: '2024-01-15' },
  { id: 2, category: 'транспорт', amount: 300, date: '2024-01-15' },
  { id: 3, category: 'еда', amount: 800, date: '2024-01-16' },
  { id: 4, category: 'развлечения', amount: 1200, date: '2024-01-16' },
  { id: 5, category: 'транспорт', amount: 250, date: '2024-01-17' }
];

const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

const byCategory = expenses.reduce((groups, expense) => {
    const category = expense.category;
    groups[category] = (groups[category] || 0) + expense.amount;
    return groups;
}, {});

const mostExpensive = expenses.reduce((max, current) => 
    current.amount>max.amount ? current : max, expenses[0]
);

const foodExpenses = expenses.filter(e => e.category === 'еда');
const foodAverage = foodExpenses.length > 0
? foodExpenses.reduce((sum, e) => sum + e.amount, 0) / foodExpenses.length
: 0;

const countByCategory = expenses.reduce((counts, expense) => {
    counts[expense.category] = (counts[expense.category] || 0) + 1;
    return counts;
}, {});


function App() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial'}}>
        <h1>Учет расходов</h1>

        <div style={{marginBottom: '30px', padding:'15px', borderRadius:'10px'}}>
            <h1>1.Общая сумма рассходов</h1>
            <p>{totalAmount}руб.</p>
        </div>
        <div style={{marginBottom:'30px', padding:'15px', borderRadius:'10px'}}>
            <h2>2.Сумма по категориям</h2>
            <ul>
                {Object.entries(byCategory).map(([category, amount])=> (
                    <li key={category} style={{margin:'10px 0'}}>
                        <strong>{category}:</strong>{amount} руб.
                        <span style={{marginLeft:'10px', color:'#666'}}>
                            ({countByCategory[category]}покупок)
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <div style={{marginBottom:'30px', padding:'15px', borderRadius:'10px'}}>
            <h2>3.Самая дорогая покупка</h2>
            <div style={{backgroundColor: 'white', padding:'15px', borderRadius:'5px', border: '1px solid #ddd'}}>
                <p><strong>Категория:</strong>{mostExpensive.category}</p>
                <p><strong>Сумма:</strong>{mostExpensive.amount}</p>
                <p><strong>Дата:</strong>{mostExpensive.date}</p>
            </div>
        </div>
         <div style={{marginBottom:'30px', padding:'15px', borderRadius:'10px'}}>
            <h2>4.Статистика по категории "еда"</h2>
            <p><strong>Средний чек:</strong>{foodAverage} руб.</p>
                <p><strong>Всего потрачено:</strong>{byCategory['еда'] || 0} руб.</p>
                <p><strong>Количество покупок:</strong>{countByCategory['еда']}</p>
                <h3 style={{marginTop: '15px'}}>Все покупки в категории "еда"</h3>
                <ul>
                    {foodExpenses.map(expense => (
                        <li key={expense.id} style={{margin:'5px 0'}}>
                            {expense.date}: {expense.amount} руб.
                        </li>
                    ))}
                </ul>
        </div>
        <div style={{backgroundColor:'#f8f9fa', padding: '15px', borderRadius:'10px'}}>
            <h2>Дополнительная аналитика:</h2>
            <p><strong>Самая частая категория:</strong>{
                Object.entries(countByCategory).reduce((max, current) => 
                    current[1] > max[1] ? current : max
                )[0]
            }</p>

            <p><strong>Доля расходов на еду:</strong>{
                ((byCategory['еда']/totalAmount)*100).toFixed(1)
            }% от общих расходов</p>

            <p><strong>Средняя стоимость покупки:</strong>{
                (totalAmount/expenses.length).toFixed(0)
            } руб.</p>
        </div>

    </div>
  );
}

export default App;
