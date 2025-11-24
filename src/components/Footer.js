import '../styles/Footer.css';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className="footer">
      <div className="socialMedia">
       <Link to="http://www.instagram.com">
          <InstagramIcon />
        </Link> 
        <Link to="http://www.twitter.com">
        <TwitterIcon />
       </Link>
        <Link to="http://www.facebook.com">
          <FacebookIcon />
          </Link>
          <Link to="https://www.linkedin.com/">
        <LinkedInIcon /> </Link>
      </div>
      <p> &copy; 2025 Lebanese International University </p>
    </div>
        </>
    );
}
export default Footer