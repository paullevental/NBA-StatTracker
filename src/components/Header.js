import "../styles/Header.css";
import nbaLogo from '../images/nba-logo-black-transparent.png';
import { Link } from 'react-router-dom'; 
import "../styles/Fonts.css"


export default function Header() {

  return (

    <header className="header">
      <ul className="nav_list">
        <div className="nav_list_container">
          <img id="nba_logo" src={nbaLogo}/>
          <li><Link to="/Name">Name</Link></li>
          <li><Link to="/Team">Team</Link></li>
          <li><Link to="/Country">Country</Link></li>
          <li><Link to="/College">College</Link></li>
        </div>
      </ul>
    </header>

  );

}
