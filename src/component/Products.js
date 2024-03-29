import React, { useState, useEffect } from "react";
import '../component/Products.css';
import prodImage from "../assets/1.jpg"
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);

    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const prodID = params.get('id');

    console.log("data12", prodID)

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('https://testfeapi-production.up.railway.app/api/products')
            console.log("data13", response?.data?.data)
            setData(await response?.data?.data);
        }
        getProducts();
    }, [])
    console.log('data', data)

    const Loading = () => {
        return (
            <>
                <h2 className="text-center">Loading.....</h2>
            </>
        )
    }

    const purProdHandler = async () => {
        try {
            const purchaseProd = `https://testfeapi-production.up.railway.app/api/purchase/${prodID}`;
            const response = await axios.post(purchaseProd);

            console.log("response12", response)

            if (response.status === 200) {
                toast.success("product purchase successfully");
            }

        } catch (err) {
            toast.error("Something went wrong");
        }
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {data.map((item) => {
                            return (
                                <div className="col-lg-3 col-md-4 mb-4">
                                    <div className="card" key={item._id}>
                                        <div className="p_content">
                                            <div className="p_img">
                                                <img src={prodImage} alt="Product Img" />
                                            </div>
                                            <div className="p_name">
                                                {item.name}
                                            </div>
                                            <p className="p_desc">{item.name}...</p>

                                            <div className="P_cart">
                                                <div className="P_amount">$ {item.price}</div>
                                                <NavLink to={`/product?id=${item._id}`}>
                                                    <button className="btn btn-outline-success" onClick={purProdHandler} >Buy Now</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 Heading_design">
                        <h1>Latest Product</h1><hr />
                    </div>
                </div>
                <div className=" row justify-content-center">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
            <ToastContainer />


        </>
    )
}
export default Products;