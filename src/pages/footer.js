import React from "react";
 class Footer extends React.Component{
     render(){
         return(
             <>
             <div className="row footer">
                 <div className="col-4 col-md-6 col-sm-12 col-xs-12">
                     <h4>Support</h4>
                     <ul>
                         <li><a href="">Help</a></li>
                         <li><a href="">Advisories</a></li>
                         <li><a href="">Status</a></li>
                         <li><a href="">Contact npm</a></li>
                     </ul>
                 </div>
                 <div className="col-4 col-md-6 col-sm-12 col-xs-12">
                     <h4>Company</h4>
                     <ul>
                         <li><a href="">About</a></li>
                         <li><a href="">Blog</a></li>
                         <li><a href="">Press</a></li>
                       
                     </ul>
                 </div>
                 <div className="col-4 col-md-6 col-sm-12 col-xs-12">
                     <h4>Terms & Policies</h4>
                     <ul>
                         <li><a href="">Policies</a></li>
                         <li><a href="">Terms of Use</a></li>
                         <li><a href="">Code of Conduct</a></li>
                         <li><a href="">Privacy</a></li>
                     </ul>
                 </div>
             </div>
             <div className="row">
                <label htmlFor=""> &copy; Prathamesh Thorat</label>
             </div>
             </>
         )
     }
 }





export default Footer;