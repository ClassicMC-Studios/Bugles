import logo from './logo.svg';
import './w3.css';
function Card(){
    return(
        <div className="w3-quarter w3-card w3-margin w3-border w3-border-black">
            <header className='w3-white w3-border-bottom w3-border-black w3-padding'><b>The Bugle</b></header>
            <body className='w3-white'>A brass instrument that is commonly used for the military and boy scouts<br/>
            <img src={logo} alt="Bugle" width={90}/>
            </body>
            <footer className="w3-white">Wikipedia</footer>
        </div>
    );
};
export default Card;