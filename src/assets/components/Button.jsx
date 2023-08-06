import Button from "react-bootstrap/esm/Button";

const Boton = ({colorButton, textButton}) => {
    return (
        <>
            <Button variant={colorButton}>{textButton}</Button>
        </>
    );
};
export default Boton;