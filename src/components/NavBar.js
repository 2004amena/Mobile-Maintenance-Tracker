import '../styles/NavBar.css';
import logo from '../assets/MLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">

      
      <div className="navbar-inner">

        {/* LEFT SIDE (Logo + Brand + Hidden Links) */}
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link to="/">
            <img src={logo} alt="not found" />
          </Link>
          <h2>Mobile Guardian</h2>

          {/* Hidden mobile dropdown links */}
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/SubmitRequest">Submit Request</Link>
            <Link to="/Track">Track</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>

        {/* RIGHT SIDE (Desktop links + Burger button) */}
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/SubmitRequest">Submit Request</Link>
          <Link to="/Track">Track</Link>
          <Link to="/Contact">Contact</Link>
          <button onClick={toggleNavBar}>
            <ReorderIcon />
          </button>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
