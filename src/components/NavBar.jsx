import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{props.leftTitle}</a>

        <p className="mx-2">
          Welcome <span className="text-green-700">{props.nameDetails}</span>
        </p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={props.rightTitleLink}>{props.rightTitle}</Link>
          </li>
          <li>
            <Link
              onClick={() => {
                props.endTitle == 'Logout' ? localStorage.clear() : 0;
              }}
              to={props.endTitleLink}
            >
              {props.endTitle}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
