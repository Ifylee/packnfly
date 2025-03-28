import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginLogout = () => {
  // State to track if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Motion transition properties
  const transitionProps = {
    opacity: isLoggedIn ? 1 : 0, // Fade in when logged in, fade out when logged out
    y: isLoggedIn ? 0 : -20, // Slide in when logged in, slide out when logged out
    transition: { type: 'spring', stiffness: 200, damping: 25 }, // Spring-based animation
  };

  // Handler for logging in
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handler for logging out
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <motion.div style={{ display: 'inline-block' }} {...transitionProps}>
        {isLoggedIn ? (
          <div>
            <p>Welcome, you're logged in!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please log in.</p>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LoginLogout;