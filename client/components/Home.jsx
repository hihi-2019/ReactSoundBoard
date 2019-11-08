import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import cow from "../../public/images/001-cow.png"
import car from "../../public/images/006-racing.png"
import santa from "../../public/images/011-santa-claus.png"
import ross from "../../public/images/ross.jpg"

const Home = (props) =>{
    return (
        <div className="grid">
            <div className="row">
                <div className="column">
                    <Link to="/animals"><img src={cow}></img></Link>
                </div>
                <div className="column">
                    <Link to="/vehicles"><img src={car}></img></Link>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <Link to="/christmas"><img src={santa}></img></Link>
                </div>
                <div className="column">
                    <Link to="/ross"><img id="ross" src={ross}></img></Link>
                </div>
            </div>
            
            
            
        </div>
        
    )
}

export default Home