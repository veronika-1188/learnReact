import "./_cart.scss"
import CartHeader from "../CartHeader/CartHeader";
import Product from "../Product/Product";
import CartFooter from "../CartFooter/CartFooter";
import data from "./../../data.js"
import { useEffect, useState } from "react";

const Card = () => {
    const [cart, setCart] = useState(data);
    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr)=> prev + curr.priceTotal, 0),
        count: cart.reduce((prev, curr)=> prev + curr.count, 0)
    })
    const [isChecked, setIsChecked] = useState(false)
    // let allIsCheck = false
    // const [allIsCheck, setAllIsCheck] = useState(false);



    const checkedProduct = (id) => {
        
         cart.map((product) =>{
            
            if(product.id === id) {
                 product.check = !product.check

                //  console.log(id)
            }
           
            
         })
    }


    const checkAll = () => {
        setIsChecked(!isChecked)

        
        cart.map((product) =>{
            product.check = !isChecked

         })
    }
    

    const deleteAll = () =>{
        cart.map((product)=>{
            console.log(product)
            if (product.check === true){
                deleteProduct(product.id);
            }
        })
    }
    

    // useEffect(() => {
       
    // }, [cart])

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
            count: cart.reduce((prev, curr) => prev + curr.count, 0)
        });
    }, [cart])

    const deleteProduct = (id) =>{
        setCart((cart) => cart.filter((product) => id !== product.id));
    }

    const increase = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1,
                        priceTotal: (product.count + 1) * product.price,
                    };
                }
                return product;
            })
        })
    }

    const desrease = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count -1 : 1;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price,
                    };
                }
                return product;
            })
        })
    }

    const changeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id) {
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }
                return product
            })
        })
    }


    const products = cart.map((product) => {
        
        // if (product.check === true){
        //     check_c = true
        // }
        console.log(2)
        return <Product 

        product={product} 
        key={product.id} 
        deleteProduct={deleteProduct} 
        increase={increase}
        desrease={desrease}
        changeValue={changeValue}
        checkedProduct={checkedProduct}
        isChecked={isChecked}/>
    });
    return (
        <section className="cart">
            <CartHeader deleteAll={deleteAll} checkAll={checkAll}/>
            {products}
            <CartFooter total={total}/>
        </section>
    )
}
export default Card;