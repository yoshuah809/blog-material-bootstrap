import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar
      expand="lg"
      primary
      bgColor="dark"
      className="text-uppercase fw-bold"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <img className="w-25" src="/images/logo.JPG" alt="logo" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="text-primary"
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>

        <MDBCollapse show={showBasic}>
          <MDBNavbarNav right className="mb-2 mb-lg-0">
            <MDBNavbarItem active>
              <Link aria-current="page" to="/">
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/addBlog">Add Blog</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/about">About</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Header = () => {
//   const [show, setShow] = useState(true);
//   function pl() {
//     setShow(!show);
//     alert(show);
//   }

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-primary bg-dark fw-bold text-uppercase">
//         <div className="container-fluid">
//           <div className="navbar-brand">
//             <img className="w-25" src="/images/logo.JPG" alt="logo" />
//           </div>
//           <button
//             className="navbar-toggler text-light"
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarExample01"
//             aria-controls="navbarExample01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => pl()}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//           {show && (
//             <div className="collapse navbar-collapse" id="navbarExample01">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item active">
//                   <Link className="nav-link" aria-current="page" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/addBlog">
//                     Add Blog
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link" to="/about">
//                     About
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
