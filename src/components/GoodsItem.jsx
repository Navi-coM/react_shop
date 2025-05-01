const GoodsItem = (props) => {
  const { id, name, description, price, images, addToCart=Function.prototype } = props;
  const full_background = images?.full_background;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name}/>
       
      </div>
      <div className="card-content">
      <span className="card-title">
           {name}
        </span>
            {description}
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart({
          id,
          name,
          price
        })}>Buy</button>
        <span className="right">{price} $</span>
      </div>
    </div>
  );
};


export { GoodsItem };

