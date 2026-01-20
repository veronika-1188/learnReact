import "./_cart-footer.scss"
import format from "../../utils/priceFormatter";

const CartFooter = ({total}) => {
    const {count, price} = total;
    return (
        <header className="cart-footer">
            <div className="cart-footer__count">{count} единицы</div>
            <div className="cart-footer__price">{format(price)} руб.</div>
        </header>
    )
}
export default CartFooter;