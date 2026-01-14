import { useState } from "react";

const PRODUCTS = [
    {category: 'Фрукты', price: '100 р', stocked: true, name: 'Яблоки'},
    {category: 'Фрукты', price: '100 р', stocked: true, name: 'Груши'},
    {category: 'Фрукты', price: '180 р', stocked: false, name: 'Мандарины'},
    {category: 'Овощи', price: '45 р', stocked: true, name: 'Картофель'},
    {category: 'Овощи', price: '35 р', stocked: false, name: 'Капуста'},
    {category: 'Овощи', price: '30 р', stocked: true, name: 'Морковь'},
    { category: 'Ягоды', price: '200 р', stocked: true, name: 'Клубника' },
    { category: 'Ягоды', price: '180 р', stocked: false, name: 'Черника' },
    { category: 'Ягоды', price: '60 р', stocked: true, name: 'Малина' },


];

export default function App(){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [showFruits, setShowFruits] = useState(true);
    const [showVegetables, setShowVegetables] = useState(true);
    const [showBerries, setShowBerries] = useState(true);

    const filtered = PRODUCTS.filter(product => {
        const matchText = product.name
        .toLowerCase()
        .includes(filterText.toLowerCase());

        const matchStock = !inStockOnly || product.stocked;

        const matchCategory =
        (!showFruits && !showVegetables && !showBerries) ||
        (product.category === 'Фрукты' && showFruits) ||
        (product.category === 'Овощи' && showVegetables) ||
        (product.category === 'Ягоды' && showBerries) ;

        return matchText && matchStock && matchCategory;
    });

    const grouped = filtered.reduce((acc, product) => {
        acc[product.category] ??= [];
        acc[product.category].push(product);
        return acc;

    }, {});

    return (
        <div>
            <h1>Товары</h1>
            <form>
                 <input
                    type="text"
                    value={filterText} placeholder="Найти..."
                    onChange={(e) => setFilterText(e.target.value)}
                    />
                    <label>
                        <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        />
                    {' '}
                    Только в наличии
                </label>
                <label>
                        <input
                        type="checkbox"
                        checked={showFruits}
                        onChange={(e) => setShowFruits(e.target.checked)}
                        />
                    {' '}
                    Фрукты
                </label>
                 <label>
                        <input
                        type="checkbox"
                        checked={showVegetables}
                        onChange={(e) => setShowVegetables(e.target.checked)}
                        />
                    {' '}
                    Овощи
                </label>
                <label>
                        <input
                        type="checkbox"
                        checked={showBerries}
                        onChange={(e) => setShowBerries(e.target.checked)}
                        />
                    {' '}
                    Ягоды
                </label>
            </form>
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                <tbody>
                    {Object.entries(grouped).map(([category, products]) => (
                        <>
                            <tr key={category}>
                                <th colSpan="3">{category}</th>
                            </tr>

                            {products.map(({name, price, stocked}) => (
                                <tr key={name}>
                                    <td style={{color: stocked ? 'black' : 'red'}}>
                                        {name}
                                    </td>
                                    <td>{price}</td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// function FilterableProductTable([products]) {
//     const [filterText, setFilterText] = useState('');
//     const [inStockOnly, setInStockOnly] = useState(false);
    
//     return (
//         <div>
//             <SearchBar
//             filterText={filterText}
//             inStockOnly={inStockOnly}
//             onFilterTextChange={setFilterText}
//             onInStockOnlyChange={setInStockOnly}
//             />

//             <ProductTable
//             products={products}
//             filterText={filterText}
//             inStockOnly={inStockOnly}
//             />
//         </div>
//     )
// }

// function ProductCategoryRow({category}){
//     return(
//         <tr>
//             <th colSpan="2">
//                 {category}
//             </th>
//         </tr>
//     )
// }

// function ProductRow({product}) {
//     const name = product.stocked ? product.name:
//     <span style={{color:'red'}}>
//         {product.name}
//     </span>

//     return (
//         <tr>
//             <td>{name}</td>
//             <td>{product.price}</td>
//         </tr>
//     )
// }

// function ProductTable({products, filterText,inStockOnly}){
//     const rows = [];
//     let lastCategory = null;
//     products.forEach((product) =>{
//         if(product.name.toLowerCase().indexOf(
//             filterText.toLowerCase()
//         ) === -1
//     ) {return;}
//     if(inStockOnly && !product.stocked){return;}
//     if(product.category !==lastCategory) {
//         rows.push(
//             <ProductCategoryRow
//             category={product.category}
//             key={product.category}
//             />
//         )
//     }
//     rows.push(
//         <ProductRow
//         product={product}
//         key={product.name}
//         />
//     )
//     lastCategory = product.category;
//     })

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Название</th>
//                     <th>Цена</th>
//                 </tr>
//             </thead>
//             <tbody>{rows}</tbody>
//         </table>
//     )
// }

// function SearchBar({
//     filterText,
//     inStockOnly,
//     onFilterTextChange,
//     onInStockOnlyChange
// }) {
//     return(
//         <form>
//             <input
//             type="text"
//             value={filterText} placeholder="Найти..."
//             onChange={(e) => onFilterTextChange(e.target.value)}
//             />
//             <label>
//                 <input
//                 type="checkbox"
//                 checked={inStockOnly}
//                 onChange={(e) => onInStockOnlyChange(e.target.checked)}
//                 />
//             {' '}
//             Только товары в наличии
//          </label>
//         </form>
//     )
// }

// export default function App(){
//     return <FilterableProductTable products={PRODUCTS}/>;
// }