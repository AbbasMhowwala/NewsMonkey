import React from 'react'

const ShopItem = (props)=> {
    let{pname, desc, picture, price} = props;
    return (
        <div className="my-3">
            <div className="card card-shop">
            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{source}</span> */}
                <img className="card-img-top" src={!picture?"https://i.stack.imgur.com/y9DpT.jpg": picture} alt="Image" />
                <div className="card-body">
                    <h5 className="card-title">{pname} </h5>
                    <p className="card-text">{desc}</p>
                    <h5 className="card-title">${price}</h5>
                    {/* <a href={url} className="btn btn-primary btn-sm">Read More</a> */}
                </div>
            </div>
        </div>
    )
}

export default ShopItem
