import { Link, Navigate} from "react-router-dom";

function Favoritos (props) {

    let token = localStorage.getItem("token");


    return (
        <> 
            {!token && <Navigate to="/login" />}
            
            <div className="row favorites">
            <h2 className="section-title">FAVORITES</h2>
            <br/>
            {!props.favorites.length && <div className="col-12">Here you can add your favorite movies.</div>}
                {
                    props.favorites.map((oneMovie) => {
                        return(
                            <div className="col-3 favs-card" key={oneMovie.id}>
                                <div className="card">
                                    <img src={oneMovie.imgUrl} className="card-img-top" alt="movie poster" />
                                    <button 
                                        onClick={props.addRemoveFavs} 
                                        className="favourite-btn"
                                        data-movie-id={oneMovie.id}>
                                        ❤️
                                    </button>
                                    
                                    <div className="card-body">
                                        <h5 className="card-title movie-title">{oneMovie.title.substring(0, 30)}</h5>
                                        <p className="card-text">{oneMovie.overview.substring(0, 100)}...</p>
                                        <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                    
        </div>
        </>
       
    )
}

export default Favoritos;