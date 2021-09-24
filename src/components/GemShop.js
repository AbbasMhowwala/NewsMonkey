import React from "react";
import { useEffect, useState } from "react";
import GemItem from "./GemItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

//import newsContext from '../context/newsContext';

const GemShop = (props) => {
  const [listProduct, setlistProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateProducts = async () => {
    props.setProgress(0);
    const url = `http://35.85.133.40:8080/api/productList?Country=${props.country}&category=${props.category}&page=${page + 1}&language=${props.language}`;
    setLoading(true);
    // let data = await fetch(url);
    // props.setProgress(30);
    // let parseData = await data.json();
    // props.setProgress(70);
    // setlistProduct(parseData.listProduct);
    // setTotalResults(parseData.totalResults);
    setLoading(false);
    // props.setProgress(100);
  };
  useEffect(() => {
    updateProducts();
    fetchMoreProduct();
    //eslint-disable-next-line
  }, []);
  const fetchMoreProduct = async () => {
    const url = `http://35.85.133.40:8080/api/productList?country=${props.country}&category=${props.category}&page=${page + 1}&language=${props.language}`;
    setPage(page + 1);
    axios.get(url).then((res) => {
      setlistProduct(res.data.data.results);
      console.log(res.data.data.results)
    });

  };
  return (
    <>
      <h1 className="newshead">
        News Monkey - Top {capitalizeFirstletter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {listProduct?.map((element) => (
            <div className="col-md-4">
              <GemItem product_name={element.product_name ? element.product_name : ""} metal_name={element.metal_name ? element.metal_name.slice(0, 88) : ""} img_url={element.img_url ? element.img_url : ""}
                stone1={element.stone1 ? element.stone1 : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
GemShop.defaultProps = {
  country: "in",
  //pageSize: 8,
  category: "genral",
  language: "en",
};
GemShop.propTypes = {
  country: PropTypes.string,
  //pageSize: PropTypes,
  category: PropTypes.string,
  language: PropTypes.string,
};
export default GemShop;
