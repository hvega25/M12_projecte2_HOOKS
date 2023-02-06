import '../styles/pastisser.css'
import pastisser from '../images/pastisser.jpg'
const Pastisser = () => {
    return (
        <div className='hola1'>
            <Informacion Nombre="Herson" Ocupacion="Pastisser" texto="Lorem ipsum dolor sit amet" />
            <Informacion Nombre="Jonathan" Ocupacion="Fleca" texto="consectetur adipiscing elit" />
        </div>
    );
};

const Informacion = (props) => {
    return (
        <div className='hola'>
            <img src={pastisser}></img>
            <div>
            <h2> {props.Nombre}</h2>
            <h2> {props.Ocupacion}</h2>
            <h2> {props.texto}</h2>
            </div>
        </div>
    );
} 

export default Pastisser;
