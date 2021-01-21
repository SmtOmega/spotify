import logo from '../asset/logo.svg'
import {FaHome, FaSearch, FaPlus} from 'react-icons/fa'
import {VscLibrary} from 'react-icons/vsc'

const Sidebar = () => {
  return (
    <aside className="aside-container">
      <div className="logo">
        <img src={logo} alt="Spotify Logo" />
      </div>
      <ul>
        <li className="active"><FaHome  className="icon"/> <span>Home</span></li>
        <li><FaSearch className="icon"/>Search</li>
        <li><VscLibrary className="icon" />Your Library</li>
      </ul>

      <div className="playlist">
        <h4>PlayLists</h4>
        <div className='aside-btn-container'>
          <button className="aside-btn"><FaPlus/></button>
          <span> Create PlayLists</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
