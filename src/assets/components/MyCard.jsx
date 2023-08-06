import Card from 'react-bootstrap/Card';
import Boton from './Button';


const MyCard = ({image, title,description, colorButton, textButton}) => {
    return (
    <>
   
    <Card style={{ width: "500px"}}>
        <Card.Img variant="top" src={image} style={{ width: "300px", height:"300px" }}/>
        <Card.Body>
            <Card.Title> <h2>{title}</h2> </Card.Title>
            <Card.Text style={{  maxHeight: "300px",overflow: "hidden" }}>{description}</Card.Text>
            <Boton colorButton={colorButton} textButton={textButton} />
        </Card.Body>
        </Card>
   
      
    </>
    );
};
    


export default MyCard;