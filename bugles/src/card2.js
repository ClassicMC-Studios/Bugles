import './w3.css';
import logo from './logo.svg';
function Card2(){
    return(
        <div className="w3-quarter w3-card w3-margin ">
            <header className='w3-light-blue w3-padding'><b>eSharp</b></header>
            <body className='w3-blue'>A Javascript based game engine that is desinged for html canvas<br/>
            <img src={logo} alt="Bugle" width={100}/>
            </body>
            <footer className="w3-white">Beta</footer>
        </div>
    );
};
export default Card2;