import Count from "../Count/Count";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import "./_product.scss"
import format from "../../utils/priceFormatter";

const Product = ({product, deleteProduct, increase, desrease, changeValue, checkedProduct, isChecked}) => {
    const {img, title, priceTotal, count, id} = product

    const handle = () => {
        
        checkedProduct(id)
        console.log(isChecked)
        isChecked = !isChecked
        console.log(isChecked)
        
    }
    
    return(

  <section className="product">
                        <input type="checkbox" onClick={()=>{checkedProduct(id)}} checked={isChecked} onChange={handle}/>
                        <div className="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
                        <div className="product__title">{title}</div>
                        <div className="product__count">
                          <Count 
                          count={count} 
                          increase={increase} 
                          desrease={desrease}
                          changeValue={changeValue}
                          id={id}/>
                        </div>
                        <div className="product__price">{format(priceTotal)} руб.</div>
                        <div className="product__controls">
                            <ButtonDelete deleteProduct={deleteProduct} id={id}/>
                        </div>
                    </section>
                    )
}

export default Product;