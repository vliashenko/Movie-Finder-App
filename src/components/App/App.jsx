import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Appbar from "../Appbar/Appbar";

import Loader from "components/Loader/Loader";
import { Container } from "./App.styled";

const HomeView = lazy(() => import("view/HomeView" /* webpackChunkName: "home" */));
const MovieView = lazy(() => import("view/MovieView" /* webpackChunkName: "Movie" */));
const CastView = lazy(() => import("view/CastView" /* webpackChunkName: "Cast" */));
const ReviewView = lazy(() => import("view/ReviewView" /* webpackChunkName: "Review" */));
const SearchMovieView = lazy(() => import("view/SearchMovieView"))

export const App = () => {
  return (
    <>  
      <Appbar/>
      
      <Suspense fallback={<Loader/>}>
        
        <Container>
          
          <Routes>

            <Route exact path="/" element={<HomeView/>}/>

            <Route path="/movies" element={<SearchMovieView/>}/>

            <Route path="/movies/:id" element={<MovieView/>}>
              <Route path="cast" element={<CastView/>}/>
              <Route path="reviews" element={<ReviewView/>}/>
            </Route>

            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        
        </Container>
      
      </Suspense>
    </>
  );
};
