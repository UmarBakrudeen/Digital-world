import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import Marque from 'react-fast-marquee';
import BlogCards from "../../components/BlogCards";
import Slider from "../Slider";
import ProductCard from "../../components/ProductCard";
// import SpecialProduct from "../components/SpecialProduct";

const Home = ({ cart, setCart }) => {
  return (
    <Fragment>

      <Slider />

      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="header__add__content">
            <div className="left__ad">
              <div className="main-banner position-relative p-3">
                <img
                  src="/Assets/images/main-banner-1.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content">
                  <h4> SUPERCHARGED FOR PROS. </h4>
                  <h5> iPad S13+ Pro. </h5>
                  <p> </p>
                </div>
              </div>
            </div>
            <div className="left__ad">
              <div className="right__ads">
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-01.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Best Sake </h4>
                    <h5> iPad S13+ Pro. </h5>
                    <p>
                      From 900 or <br /> 11000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRAIVAL </h4>
                    <h5> But IPad Air </h5>
                    <p>
                      From 900 or <br /> 11000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-03.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRAIVAL </h4>
                    <h5> But IPad Air </h5>
                    <p>
                      From 900 or <br /> 11000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="/Assets/images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> NEW ARRAIVAL </h4>
                    <h5> But IPad Air </h5>
                    <p> From 900 or 11000 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services ">
                <div className="services__items">
                  <img src="/Assets/images/service.png" alt="Services" />
                  <div>
                    <h6> Free Shipping </h6>
                    <p> From all order over 700 </p>
                  </div>
                </div>
                <div className="services__items">
                  <img src="/Assets/images/service-02.png" alt="Services" />
                  <div>
                    <h6> Daily Surprise Offers </h6>
                    <p> Save upto 25% off </p>
                  </div>
                </div>
                <div className="services__items">
                  <img src="/Assets/images/service-03.png" alt="Services" />
                  <div>
                    <h6> Support </h6>
                    <p> Shop with an export </p>
                  </div>
                </div>
                <div className="services__items">
                  <img src="/Assets/images/service-04.png" alt="Services" />
                  <div>
                    <h6> Affordable Prices </h6>
                    <p> Get Factory Default Price </p>
                  </div>
                </div>
                <div className="services__items">
                  <img src="/Assets/images/service-05.png" alt="Services" />
                  <div>
                    <h6> Secure Payments </h6>
                    <p> 100% Producted </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories">
                <div className="category__items">
                  <div>
                    <h6> Music & Gaming </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="https://imgs.search.brave.com/Rk1Psbkf2ta_bcfFAmMNRrIe0XPxKGJlEjTDIlvWpcs/rs:fit:1200:1158:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy81L0FwcGxl/LWlQaG9uZS0xMi1Q/TkctRG93bmxvYWQt/SW1hZ2UucG5n" alt="" className="img-fluid" />
                </div>
                <div className="category__items">
                  <div>
                    <h6> Smart Tv </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="https://imgs.search.brave.com/yz12FqBBjHXRu2WRp7PjFjccWAw9dOsfN-OD2G6nneM/rs:fit:1200:1072:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1Lzkz/Lzk4Lzg1OTM5ODA3/MTkzNTdhYmMwMjFl/OTRjNTUyNDIwN2Nh/LnBuZw"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="category__items">
                  <div>
                    <h6> Smart Watches </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="https://imgs.search.brave.com/Rk1Psbkf2ta_bcfFAmMNRrIe0XPxKGJlEjTDIlvWpcs/rs:fit:1200:1158:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy81L0FwcGxl/LWlQaG9uZS0xMi1Q/TkctRG93bmxvYWQt/SW1hZ2UucG5n"
                    alt="headphone"
                    className="img-fluid"
                  />
                </div>
                <div className="category__items">
                  <div>
                    <h6> Cameras </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="https://imgs.search.brave.com/Q3ZbKvzTTtKHOgBOg0jDZCcEcLJ3XYmnZ8sVk4zql-o/rs:fit:1200:919:1/g:ce/aHR0cHM6Ly9pMDEu/YXBwbWlmaWxlLmNv/bS93ZWJmaWxlL2ds/b2JhbGltZy9wcm9k/dWN0cy9wYy9yZWRt/aS1ub3RlLTgvc2Vj/dGlvbi0wNF9zbGlk/ZXJfMS5wbmc"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="category__items">
                  <div>
                    <h6> Music & Gaming </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="https://imgs.search.brave.com/6-GRFoxjnYepTxfeP1mng2_lu2M8_UmCLZhilQMtaXY/rs:fit:820:520:1/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS9k/b3dubG9hZC9lbGVj/dHJvbmljcy84NTU4/NS1nYW1pbmctbGFw/dG9wLW11bHRpbWVk/aWEtZ2FtZS1jb21w/dXRlci12aWRlby10/ZWNobm9sb2d5LnBu/Zw"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="category__items">
                  <div>
                    <h6> Smart Tv </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="https://imgs.search.brave.com/McATdvwmsHvXA1ENB4rS421uP8cdRVj-8K5QcYJG2iw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9HYW1p/bmctSGVhZHNldC1Q/TkctSEQtSW1hZ2Ut/MS5wbmc"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="category__items">
                  <div>
                    <h6> Smart Watches </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="https://imgs.search.brave.com/_IhaUdN-JT2xebKoXBkEFoEY8_pRcc_DTVJqGz9AAU0/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2FtZXBhZC9n/YW1lcGFkX1BORzk1/LnBuZw"
                    alt="headphone"
                    className="img-fluid"
                  />
                </div>
                <div className="category__items">
                  <div>
                    <h6> Cameras </h6>
                    <p> 10 Items </p>
                  </div>
                  <img src="Assets/images/camera.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Product */}

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Featured Collection
              </h3>
            </div>
            <div className="product__content">
              <ProductCard cart={cart} setCart={setCart} />
            </div>
          </div>
        </div>
      </section>

      {/* Famous Wrapper */}
      {/* <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 ">
              <div className="famous-card bg-black position-relative">
                <img src="https://www.pngplay.com/wp-content/uploads/15/iPhone-14-Transparent-Image.png"
                  className="img-fluid bg-black" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5> Smart Phone</h5>
                  <h6> Smart Phone 14 Pro </h6>
                  <p> From 2500  0r 250/mo. for 10 mon</p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="famous-card  position-relative">
                <img src="https://www.pngmart.com/files/Android-TV-Download-PNG-Image.png"
                  className="img-fluid mt-40" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-black"> Studio Display </h5>
                  <h6 className="text-black"> 600 nits of Brightness </h6>
                  <p className="text-black"> 27-inch 5K Retna display  </p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="famous-card  position-relative">
                <img src="http://cdn.shopify.com/s/files/1/0137/0292/2286/products/1.png?v=1638005392"
                  className="img-fluid " alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-black"> Big Screen</h5>
                  <h6 className="text-black"> Smart Watch Series 7 </h6>
                  <p className="text-black"> From 2500  0r 250/mo. for 10 mon</p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="famous-card  position-relative">
                <img src="https://cdn.shopify.com/s/files/1/0075/7753/4528/products/dxvf_d849b77f-ac96-4866-b9e4-958a220f8d5d_580x.jpg?v=1608294639"
                  className="img-fluid " alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-black"> Home Speaker </h5>
                  <h6 className="text-black"> Room-filling sound </h6>
                  <p className="text-black"> From 2500  0r 250/mo. for 10 mon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section> */}

      {/* Special Product */}

      {/* <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Special Products </h3>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Popular Product  */}
      {/* <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Product </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section> */}

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marque className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="Assets/images/brand-01.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="Assets/images/brand-02.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="Assets/images/brand-03.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="Assets/images/brand-04.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="Assets/images/brand-05.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="Assets/images/brand-06.png" alt="Brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="Assets/images/brand-07.png" alt="Brand" />
                  </div>
                </Marque>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <h3 className="section-heading">
            Our Latest Blogs
          </h3>
          <BlogCards />
        </div>
      </section>
    </Fragment >
  );
};

export default Home;
