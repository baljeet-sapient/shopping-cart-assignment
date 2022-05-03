import Carousel from "nuka-carousel";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerDataStart } from "../../redux/banners/banners.action";
import { size, get } from "lodash";
import "./banner.styles.scss";

const Index = () => {
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => {
    return state.banners.bannerData;
  });

  useEffect(() => {
    dispatch(fetchBannerDataStart());
  }, []);

  return (
    <section className="banner__container">
      <Carousel>
        {size(bannerList) > 0 &&
          bannerList.map((banner, index) => (
            <div key={get(banner, "id", index)} className="carousel_img">
              <img
                src={get(banner, "bannerImageUrl", "/")}
                alt={get(banner, "bannerImageAlt", "banner image")}
              />
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default Index;
