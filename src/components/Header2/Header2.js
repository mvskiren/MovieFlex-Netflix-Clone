import React from 'react';
import classes from './Header2.module.css';

const Header2=(props)=> {
    return (
        <div>
            <header>
           <div className={classes.logocontainer}>
                {/* <img src="./img/logo.svg" alt="logo" /> */}
                <h4 class="logo">three dots</h4>
           </div>
           <nav>
               <ul className={classes.navlinks}>
                   <li className={classes.navlink}><a >Specs</a></li>
                   <li className={classes.navlink} ><a >News</a></li>
                   <li className={classes.navlink}><a>Products</a></li>
               </ul>
           </nav>
           <div className={classes.cart}>
               
           </div>
       </header>
        </div>
    )
}
export default Header2;
