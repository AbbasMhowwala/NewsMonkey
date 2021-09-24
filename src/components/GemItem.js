import React from 'react'

const GemItem = (props)=> {
    let{product_name, metal_name, img_url, stone1} = props;
    return (
        <div className="my-3">
            <div className="card card-shop">
            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{source}</span> */}
                <img className="card-img-top" src={!img_url?"https://i.stack.imgur.com/y9DpT.jpg": img_url} alt="Image" />
                <div className="card-body">
                    <h5 className="card-title">{product_name} </h5>
                    <p className="card-text">{metal_name}</p>
                    <h5 className="card-title">{stone1}</h5>
                </div>
            </div>
        </div>
    )
}

export default GemItem
