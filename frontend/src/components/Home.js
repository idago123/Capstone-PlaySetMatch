import React, { useEffect, useState, useContext } from 'react';
// // import PropTypes from 'prop-types';
// import axios from 'axios';
// import UserContext from '../context/UserContent';
// import { useHistory } from 'react-router-dom';
// // import Matches from './Matches';
// import Match from './Match';

// // here we will need something that says: if user exists, show these matches
// const Home = (props) => {
//   // create button, if button is clicked. call the prop and iterate through matches, match should hace its own component
//   console.log(props.userMatches);
//   const { userData, setUserData } = useContext(UserContext);
//   //   return <h1> homepage</h1>;
//   const userMatchesList = props.userMatches.map((user, i) => {
//     return (
//       <li key={i}>
//         <Match
//           username={user.username}
//           availability={user.availability}
//           skillLevel={user.skillLevel}
//           bio={user.bio}
//           city={user.city}
//           zipcode={user.zipcode}
//         />
//       </li>
//     );
//   });
//   return (
//     <div>
//       {/* {(userData.user && (props.userMatches.length > 0)) ( */}

//       {props.userMatches.length > 0 ? (
//         <button onClick={userMatchesList}> Check Matches </button>
//       ) : (
//         <h1> No matches found</h1>
//       )}
//     </div>
//   );
// };
// export default Home;

const Home = (props) => {
  return <h1> this is the homepage </h1>;
};
export default Home;
