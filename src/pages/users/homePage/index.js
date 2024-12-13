// trang này dùng để hiển thị trang chủ của người dùng
import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.jpg";
import cat5Img from "assets/users/images/categories/cat-5.jpg";
import feature1Img from "assets/users/images/featured/feature-1.jpg";
import feature2Img from "assets/users/images/featured/feature-2.jpg";
import feature3Img from "assets/users/images/featured/feature-3.jpg";
import feature4Img from "assets/users/images/featured/feature-4.jpg";
import feature5Img from "assets/users/images/featured/feature-5.jpg";
import feature7Img from "assets/users/images/featured/feature-7.jpg";
import feature8Img from "assets/users/images/featured/feature-8.jpg";
import feature9Img from "assets/users/images/featured/feature-9.jpg";

import "./style.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Fedamancy",
    },
    {
      bgImg: cat2Img,
      name: "Solitude",
    },
    {
      bgImg: cat3Img,
      name: "Opacarophile",
    },
    {
      bgImg: cat4Img,
      name: "Flechazo",
    },
    {
      bgImg: cat5Img,
      name: "Senendipity",
    },
  ];

  const featProducts = {
    all: {
      tittle: "Toàn bộ",
      products: [
        {
          img: feature1Img,
          name: "Tivi",
          price: 20000,
        },
        {
          img: feature2Img,
          name: "Salad",
          price: 10000,
        },
        {
          img: feature3Img,
          name: "Crown",
          price: 12000,
        },
        {
          img: feature4Img,
          name: "Oranges",
          price: 15000,
        },
        {
          img: feature5Img,
          name: "Pizza",
          price: 30000,
        },
        {
          img: feature7Img,
          name: "Chair",
          price: 31000,
        },
        {
          img: feature8Img,
          name: "meal",
          price: 32000,
        },
        {
          img: feature9Img,
          name: "Pool",
          price: 40000,
        },
      ],
    },
    Food: {
      tittle: "Food",
      products: [
        {
          img: feature2Img,
          name: "Salad",
          price: 10000,
        },
        {
          img: feature4Img,
          name: "Oranges",
          price: 15000,
        },
        {
          img: feature5Img,
          name: "Pizza",
          price: 30000,
        },
        {
          img: feature8Img,
          name: "meal",
          price: 32000,
        },
      ],
    },
    Love: {
      tittle: "Love",
      products: [
        {
          img: feature1Img,
          name: "Tivi",
          price: 20000,
        },
        {
          img: feature3Img,
          name: "Crown",
          price: 12000,
        },
        {
          img: feature7Img,
          name: "Chair",
          price: 31000,
        },
        {
          img: feature9Img,
          name: "Pool",
          price: 40000,
        },
      ],
    },
  };
  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    // object.keys(data) trả về mảng các key của object, các key như là all, hehe
    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}> {data[key].tittle} </Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3" key={j}>
            <div className="featured_item">
              <div
                className="featured_item_pic"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <ul className="featured_item_pic_hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                
                  </li>
                </ul>
              </div>
              <div className="featured_item_text">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          //map có tác dụng duyệt qua mảng tabPanel để render ra các tabPanel, tabPanel là các sản phẩm như hình ảnh, tên, giá
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <>
      {/*Categories Begin*/}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Categories End*/}

      {/*Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>

      {/*Featured End */}
    </>
  );
};

export default memo(HomePage);
