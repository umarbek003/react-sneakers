import React, { useState } from "react";
import styles from './Card.module.scss'
const Card = ({items, onAddToCart}) => {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () =>{
    onAddToCart(items)
    setIsAdded(!isAdded)

  }
    return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/onliked.svg" alt="" />
      </div>
      <img width={133} height={112} src={items.imageUrl} alt="" />
      <h5>{items.title}</h5>
      <div className="d-flex justify-between align-center mt-15">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{items.price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked-plus.png': '/img/plus.png'} alt="" />
      </div>
    </div>
  );
};

export default Card;
