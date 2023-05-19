 function Body (props) {
    const image = props.imageURL;
    return (
        <div>
            <img src={image} />
        </div>
    )
 }

 export default Body;