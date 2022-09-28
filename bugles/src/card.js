import logo from './logo.svg';
import './w3.css';
function Card(){
    return(
        <div className="w3-quarter w3-card w3-margin ">
            <header className='w3-gray w3-padding'><b>The Bugle</b></header>
            <body>A brass instrument that is commonly used for the military and boy scouts<br/>
            <img src={logo} alt="Bugle" width={100}/>
            </body>
            <footer className="w3-gray">Beta</footer>
        </div>
    );
};
export default Card;