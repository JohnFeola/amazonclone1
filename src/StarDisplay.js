function StarDisplay(props) {
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<p>⭐</p>);
    }

    return(
        <div className="product__rating" style={{display:'flex'}}>
            {stars}
        </div>
    )
}


export default StarDisplay;