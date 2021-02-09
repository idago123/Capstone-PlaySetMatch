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
  return (
    <div>
      <h1>
        A match-making, scheduling tool and social platform for tennis players.
      </h1>
      <h1> Play: </h1>
      <h2> whenever, wherever and with whomever you want. </h2>
      <h1> Set: </h1>
      <h2> a schedule to find the perfect time and place to meet.</h2>
      <h1> Match: </h1>
      <h2>with the perfect practice buddy. </h2>
    </div>
  );
};
export default Home;
