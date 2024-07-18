import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "../utils/firebase-conflig";
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre"

const Movies = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres   = useSelector((state) => state.netflix.genres);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("in use effect")
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    // console.log(genresLoaded)
    if (genresLoaded){
        dispatch(fetchMovies({ genres, type: "movies" }));
    }
  },[genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [user, setUser] = useState(undefined);
  
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate("/login");
  });

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>    
  );
};
const Container = styled.div`
.data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }`;

export default Movies;
