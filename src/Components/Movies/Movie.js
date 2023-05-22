function Movies (props) {

    {props.map( props => {

        return( <div className="moviesPics" 
                style={{
                backgroundImage: `${props.poster}`}}
    ></div> )
    }

       
    )

}
}

export default Movies ;