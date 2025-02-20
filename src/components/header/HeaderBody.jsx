import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/US.jpg";
import Burger from "../burger/Burger";
import { MdOutlineClose } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
const HeaderBody = () => {

  const [isActiveBurger , setIsActiveBurger] = useState(window.innerWidth < 1024)
  const [isSerchActive  , setIsSearchActive] = useState(false)
  const ref = useRef(null)



  const handleSearchClick = () => {
    setIsSearchActive(!isSerchActive)
  }
  const handleCloseSearch = () => {
    setIsSearchActive(false)
  }

  const  handleResize = () => {
    setIsSearchActive(false)
    if(window.innerWidth <= 1024) setIsActiveBurger(true)
    else setIsActiveBurger(false)

  }

  useEffect(() => {
    window.addEventListener('resize' , handleResize)
    window.addEventListener('scroll' , handleCloseSearch)
    return () => {
      window.removeEventListener('resize' , handleResize)
      window.removeEventListener('scroll' , handleCloseSearch)
    }
  },[])

  


  return (


    <div className="header_body">
      <div className="header_body__container container">
        {isActiveBurger ? <Burger/> : <nav className="navigation">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/decor"}>Decor</Link>
            </li>
            <li>
              <Link to={"/ceramics"}>Ceramics</Link>
            </li>
            <li>
              <Link to={"/jewellery"}>Jewellery</Link>
            </li>
            <li>
              <Link to={"/skincare"}>Skincare</Link>
            </li>
          </ul>
        </nav>}
        
        <Link to={'/'} className="logo">
          <h2>Handmade</h2>
        </Link>
        <div className="controls">
          <ul>
            <li className={isSerchActive ?'search active' :  "search"}>
              <div className="search-container">
                <label htmlFor="prodSearch" className="input-txt" >
                  <input type="text" name="" ref={ref}  id="prodSearch" className="input" />
                  <button className="search-btn" onClick={handleSearchClick}>
                    <span>
                      <BiSearch />
                    </span>
                  </button>
                  <button className="close">
                    <span>
                    <MdOutlineClose />
                    </span>
                  </button>
                </label>
              </div>
            </li>
            {!isActiveBurger && <li>
              <button>
                <img src={img} alt="" width={20} />
              </button>
            </li>}
            {!isActiveBurger && <li className="right">
              <Link to={'/'}>
                <svg
                  width="12"
                  height="17"
                  viewBox="0 0 12 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16.5H10.5V15C10.5 14.4033 10.2629 13.831 9.84099 13.409C9.41903 12.9871 8.84674 12.75 8.25 12.75H3.75C3.15326 12.75 2.58097 12.9871 2.15901 13.409C1.73705 13.831 1.5 14.4033 1.5 15V16.5H0V15C0 14.0054 0.395088 13.0516 1.09835 12.3483C1.80161 11.6451 2.75544 11.25 3.75 11.25H8.25C9.24456 11.25 10.1984 11.6451 10.9017 12.3483C11.6049 13.0516 12 14.0054 12 15V16.5ZM6 9.75C5.40905 9.75 4.82389 9.6336 4.27792 9.40746C3.73196 9.18131 3.23588 8.84984 2.81802 8.43198C2.40016 8.01412 2.06869 7.51804 1.84254 6.97208C1.6164 6.42611 1.5 5.84095 1.5 5.25C1.5 4.65905 1.6164 4.07389 1.84254 3.52792C2.06869 2.98196 2.40016 2.48588 2.81802 2.06802C3.23588 1.65016 3.73196 1.31869 4.27792 1.09254C4.82389 0.866396 5.40905 0.75 6 0.75C7.19347 0.75 8.33807 1.22411 9.18198 2.06802C10.0259 2.91193 10.5 4.05653 10.5 5.25C10.5 6.44347 10.0259 7.58807 9.18198 8.43198C8.33807 9.27589 7.19347 9.75 6 9.75ZM6 8.25C6.79565 8.25 7.55871 7.93393 8.12132 7.37132C8.68393 6.80871 9 6.04565 9 5.25C9 4.45435 8.68393 3.69129 8.12132 3.12868C7.55871 2.56607 6.79565 2.25 6 2.25C5.20435 2.25 4.44129 2.56607 3.87868 3.12868C3.31607 3.69129 3 4.45435 3 5.25C3 6.04565 3.31607 6.80871 3.87868 7.37132C4.44129 7.93393 5.20435 8.25 6 8.25Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link to={'/'}>
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.25 6V4.5C3.25 3.50544 3.64509 2.55161 4.34835 1.84835C5.05161 1.14509 6.00544 0.75 7 0.75C7.99456 0.75 8.94839 1.14509 9.65165 1.84835C10.3549 2.55161 10.75 3.50544 10.75 4.5V6H13C13.1989 6 13.3897 6.07902 13.5303 6.21967C13.671 6.36032 13.75 6.55109 13.75 6.75V15.75C13.75 15.9489 13.671 16.1397 13.5303 16.2803C13.3897 16.421 13.1989 16.5 13 16.5H1C0.801088 16.5 0.610322 16.421 0.46967 16.2803C0.329018 16.1397 0.25 15.9489 0.25 15.75V6.75C0.25 6.55109 0.329018 6.36032 0.46967 6.21967C0.610322 6.07902 0.801088 6 1 6H3.25ZM3.25 7.5H1.75V15H12.25V7.5H10.75V9H9.25V7.5H4.75V9H3.25V7.5ZM4.75 6H9.25V4.5C9.25 3.90326 9.01295 3.33097 8.59099 2.90901C8.16903 2.48705 7.59674 2.25 7 2.25C6.40326 2.25 5.83097 2.48705 5.40901 2.90901C4.98705 3.33097 4.75 3.90326 4.75 4.5V6Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </li> }
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
