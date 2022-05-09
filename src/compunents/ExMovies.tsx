import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExMovies } from "../moduels/IExMovies";

export function ExMovies(){
    let param = useParams();
    const[ExMovies,setExMovies]= useState<IExMovies>();
    useEffect(()=>{
 axios.get<IExMovies>("http://www.omdbapi.com/?apikey=f699cb81&i=" + param.id)
 .then((responce)=>{
setExMovies(responce.data);
 });

    },[]);
    return(<div className="col-10 col-md-4 mt-5 show" >
    <div className="card card2 p-2 col ">
      <div className="d-flex align-items-center">
        <div className="image">
          {" "}
          <img
            src={ExMovies?.Poster}
            className="rounded"
            width="155"
          />{" "}
        </div>
        <div className="ml-3 w-100">
          <h5 className="mb-0 mt-0 textLeft">
            {ExMovies?.Title}{" "}
          </h5>
          {/* <span className="text-left">{type }</span> */}
          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
            <div className="d-flex flex-column">
              <span className="articles">Year</span>
              {ExMovies?.Director}
              <span className="number1"></span>{" "}
            </div>
            {/* <div className="d-flex flex-column">
              <span className="followers">Year</span>
              {currentUser.Year}
              <span className="number2"></span>{" "}
            </div> */}
            <div className="d-flex flex-column">
              <span className="rating">Id</span>
              {ExMovies?.imdbRating}
              <span className="number3"></span>{" "}
            </div>
          </div>
          {<div className="d-flex flex-column">
            <h6 className="mt-2 text-left  ex">Discription:</h6>

            <p className="ptag">{ExMovies?.Plot}</p>
          </div>}
        </div>
      </div>
    </div>
  </div>);
}