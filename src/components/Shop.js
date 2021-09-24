import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem';
import Spinner from './Spinner';
import axios from 'axios';

const Shop = (props)=> {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)    
    const updateProducts =  async ()=>{
        props.setProgress(0);
        const url = `http://192.168.18.153:8000/product_list`;
        setLoading(true)
        let data =  await fetch(url);
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        setProducts(parseData.products)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        updateProducts();
        fetchMoreProduct();
        //eslint-disable-next-line
    }, [])
    const fetchMoreProduct = async () => {        
        const url = `http://192.168.18.153:8000/product_list`;
        setPage(page+1)
        axios.get(url)
        .then((res=>{
            setProducts(res.data.data)
        }))      
    }    
    return (
        <>
            <h1 className="newshead">News Monkey - Shop</h1>
            {loading && <Spinner />}
            <div className="container">
                <div className="row">
                {products?.map((element)=>
                    <div className="col-md-4">
                        <ShopItem pname={element.pname ? element.pname: ""} desc={element.desc?element.desc.slice(0, 88): ""} picture={element.picture?element.picture: ""} 
                        price={element.price?element.price: ""}  />   
                    </div>
                )}  
                </div>
            </div>
        </>
        )
}
export default Shop
