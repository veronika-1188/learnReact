import "./_cart-header.scss"

const CartHeader = ({deleteAll, checkAll}) => {
    return (
        <header className="cart-header">
            <input type="checkbox" onClick={checkAll}/>
            <div className="cart-header__title">наименование</div>
            <div className="cart-header__count">количество</div>
            <div className="cart-header__cost">стоимость</div>
            <button onClick={deleteAll}>Удалить выбранные</button>
        </header>
    )
}
export default CartHeader;