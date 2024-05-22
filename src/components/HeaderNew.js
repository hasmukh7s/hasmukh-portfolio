import { Outlet, Link } from "react-router-dom";

const HeaderNew = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Date">Blogs</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/PostDetails">PostDetails</Link>
            
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default HeaderNew;