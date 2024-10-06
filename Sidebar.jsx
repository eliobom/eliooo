import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <i className=""></i> 
          </Link>
        </li>
        <li>
          <Link to="/">
          </Link>
        </li>
        <li>
          <Link to="/">
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
