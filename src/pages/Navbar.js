import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="">Products</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Documentation</a></li>
                </ul>

            </nav>
        )
    }
}

export default Navbar;
