import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../moduels/IMovies";
import { IOmdbResponse } from "../moduels/IOmdbResponse";

export function Movies(){
    const[movies,setMovies]=useState<IMovie[]>([]);
    useEffect(()=>{
        if(movies.length!==0)return;
        axios.get<IOmdbResponse>("http://www.omdbapi.com/?apikey=f699cb81&s=fight")
        .then((response)=>{
            setMovies(response.data.Search);
        });

    });

    return(<div>
        <h2>List of Movies</h2>
        <div className="container-fluid mt-5">
          <div className="row text-center">
            { movies.map((currentUser, index) => {
                
                  return (
                     <Link  className="col"  to={"/exMovies/"+  currentUser.imdbID}>
                    <div className="col-10 col-md-4 mt-5 show" key={index}>
                      <div className="card p-2">
                        <div className="d-flex align-items-center">
                          <div className="image">
                            {" "}
                            <img
                              src={currentUser.Poster}
                              className="rounded"
                              width="155"
                            />{" "}
                          </div>
                          <div className="ml-3 w-100">
                            <h5 className="mb-0 mt-0 textLeft">
                              {currentUser.Title}{" "}
                            </h5>
                            {/* <span className="text-left">{type }</span> */}
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                              <div className="d-flex flex-column">
                                <span className="articles">Year</span>
                                {currentUser.Year}
                                <span className="number1"></span>{" "}
                              </div>
                              {/* <div className="d-flex flex-column">
                                <span className="followers">Year</span>
                                {currentUser.Year}
                                <span className="number2"></span>{" "}
                              </div> */}
                              <div className="d-flex flex-column">
                                <span className="rating">Id</span>
                                {currentUser.imdbID}
                                <span className="number3"></span>{" "}
                              </div>
                            </div>
                            {/* <div className="d-flex flex-column">
                              <h6 className="mt-2 text-left  ex">Discription:</h6>
  
                              <p className="ptag">{currentUser.description}</p>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                     </Link>
                  );
              })
            }
          </div>
        </div>
      </div>
      
    );
  }
  
