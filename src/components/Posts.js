
function Posts({fecha,likes,actor,descripcion,imagen,num_comentarios}) {

    return (
        <div className='container' style={{paddingBottom:"20px"}}>
            <div className='row'>
                <div className="card col-12 col-sm-12">
                    <img src={imagen} className="card-img-top" style={{paddingTop:"10px"}} alt="Post 1" />
                    <div className="card-body container">
                        <div className='row'>
                            <div className="col-6 col-sm-3">
                                <h6 className="card-title">{fecha}</h6>
                            </div>
                            <div className="col-6 col-sm-3" style={{textAlign:"right"}}>
                                <a href="#" className="btn btn-danger">
                                    <i className="fa-solid fa-heart" style={{ color: "#fafafa" }}>{likes}K</i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title autor">@{actor}</h5>
                        <p className="card-text fw-light" style={{textAlign:"justify"}}>{descripcion}</p>
                    </div>
                    <div className="card-footer">
                        <i className="fa-thin fa-comment">Comments ({num_comentarios})</i>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Posts;