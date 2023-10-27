import classes from "../styles/Product.module.css"

function Product({product}) {
    return (
        <div className={classes.product}>
            <img src={product.imageUrl} alt="product" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <ul>
                <li>
                    <span className={classes.property}>Цвет</span>
                    <span>{product.color}</span>
                </li>
                <li>
                    <span className={classes.property}>Категория</span>
                    <span>{product.category}</span>
                </li>
                <li>
                    <span className={classes.property}>Цена</span>
                    <span>{product.price}</span>
                </li>
                <li>
                    <span className={classes.property}>Рейтинг</span>
                    <span>{product.rating}</span>
                </li>
            </ul>
        </div>
    );
}
  
export default Product;