import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const tabs = [{
    route: "/",
    label: "Data Entry"
  },{
    route: "/matches",
    label: "Match Data"
  },{
    route: "/teams",
    label: "Team Data"
  }]
  
const Navigation = (props) => {
	return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light sticky-top" 	role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Entropy 138 Scouting</a>
        </div>
      </nav>
        {props.children}
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
            <Nav className="w-100">
            <div className=" d-flex flex-row justify-content-around w-100">
                {
                tabs.map((tab, index) =>(
                    <NavItem key={`tab-${index}`}>
                    <NavLink to={tab.route} className="nav-link" activeclassname="active">
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                        <FontAwesomeIcon size="lg"/>
                        <div>{tab.label}</div>
                        </div>
                    </NavLink>
                    </NavItem>
                ))
                }
            </div>
            </Nav>
      </nav>
    </div>
  )
};

export default Navigation;
