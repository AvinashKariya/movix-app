import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
import Img from "../../../components/lazyLoadImages/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  //setting up input query value as state value and than navigate searcheresult
  const searchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  //call api to set random background everytime from usefetch at 11
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div className='heroBanner'>
      {!loading && (
        <div className='backdrop-img'>
          <Img src={background} />
        </div>
      )}

      <div className='opacity-layer'></div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'>Welcome</span>
          <span className='subTitle'>
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className='searchInput'>
            <input
              type='text'
              placeholder='Search for a movie or tv show...'
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyUp={searchQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
