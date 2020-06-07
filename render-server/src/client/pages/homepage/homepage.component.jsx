import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ auth }) => {
  return (
    <div className="center-align">
      <h3>Rick and Morty App with React SSR</h3>
      {
        auth.current_user ? <div>
          Go to <Link to="/characters">Characters Page</Link>        
        </div> : <div>
          Go to <Link to="/signin">Sign In Page</Link>
        </div>
      }
    </div>
  );
};
const mapStateToProps = ({ auth }) => ({ auth });
export default {
  component: connect(mapStateToProps)(Home)
};
