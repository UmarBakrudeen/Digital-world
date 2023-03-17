import React, { Fragment } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <Fragment>
            <div className="col-3">
                <Link className="product-card">
                    <div className="wishlist-icon">
                        <Link>
                            <img src="Assets/images/wish.svg" alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src="Assets/images/watch.jpg" className='img-fluid' alt="product images" />
                        <img src="Assets/images/watch-1.png" className='img-fluid' alt="product images" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand"> Hawels </h6>
                        <h5 className="product-title">
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price"> Rs.100 </p>
                    </div>
                    <div className="action-bar">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="Assets/images/prodcompare.svg" alt="Compare" />
                            </Link>
                            <Link>
                                <img src="Assets/images/view.svg" alt="View" />
                            </Link>
                            <Link>
                                <img src="Assets/images/add-cart.svg" alt="addcart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment >
    )
}

export default ProductCard