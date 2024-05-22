import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/login/main.css";
import "../../styles/login/login.css";
import "../../styles/login/signup.css";
import "../../styles/login/forgot_pass.css";
import "../../assets/arrow.png";
import "../../assets/padlock.png";



const Login = () => {
  const [isForgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [isResetPasswordVisible, setResetPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordDisclaimer, setShowPasswordDisclaimer] = useState(false);
  const [showConfirmPasswordDisclaimer, setShowConfirmPasswordDisclaimer] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameList] = useState([
    "user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10", "user11", "user12", "user13", "user14", "user15"
  ]);
  const [usernameIndex, setUsernameIndex] = useState(0);

  const toggleForgotPassword = () => {
    setForgotPasswordVisible(prevState => ({
      isForgotPasswordVisible: !prevState.isForgotPasswordVisible,
      isResetPasswordVisible: false
    }));
  };

  const goBack = () => {
    setForgotPasswordVisible(false);
    setResetPasswordVisible(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
  
    if (name === "newPassword" || name === "confirmPassword") {
      setNewPassword(value);
      const isValidPassword = checkPasswordStrength(value);
      const doPasswordsMatch = value === confirmPassword;

      if (!doPasswordsMatch && confirmPassword) {
        setShowConfirmPasswordDisclaimer(true);
      } else {
        setShowConfirmPasswordDisclaimer(false);
      }

      if (!isValidPassword && value) {
        setShowPasswordDisclaimer(true);
      } else {
        setShowPasswordDisclaimer(false);
      }
    } else {
      setUsername(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isForgotPasswordVisible) {
      setResetPasswordVisible(true);
    } else {
      // Logica pentru autentificare
    }
  };

  const checkPasswordStrength = password => {
    const isValid = password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password) && /[\W_]/.test(password);
    return isValid;
  };

  const checkPasswordMatch = () => {
    const match = newPassword === confirmPassword;
    return match;
  };

  const handleSubmitSignUp = e => {
    e.preventDefault();
  
    const isValidPassword = checkPasswordStrength(newPassword);
    const doPasswordsMatch = checkPasswordMatch();
  
    if (!isValidPassword) {
      setShowPasswordDisclaimer(true);
    }
  
    if (!doPasswordsMatch) {
      setShowConfirmPasswordDisclaimer(true);
    }
  
    if (isValidPassword && doPasswordsMatch) {
      // Logica pentru înregistrare
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const generateUsername = () => {
    const nextUsernameIndex = (usernameIndex + 1) % usernameList.length;
    const nextUsername = usernameList[nextUsernameIndex];
    setUsername(nextUsername);
    setUsernameIndex(nextUsernameIndex);
  };

  const toggleLogin = () => {
    // Implementarea logicii de comutare a vizibilității formularului de login
  };

    return (
      <div className="container-body">
      <div className="container-log">
        <input type="checkbox" id="chk" aria-hidden="true" />

        {/* Sign Up Form */}
        <div className="signup">
          <form onSubmit={handleSubmitSignUp}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="email" name="email" placeholder="Email" required />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="new-password"
                name="newPassword"
                placeholder="New password"
                required
                onChange={handleChange}
              />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              onChange={handleChange}
            />
            <div className="signup-disclaimer" style={{ display: showPasswordDisclaimer ? "block" : "none" }}>Password must be at least 8 characters long, contain a number, a special character and an uppercase letter!</div>
            <div className="signup-disclaimer" style={{ display: showConfirmPasswordDisclaimer ? "block" : "none" }}>The password confirmation does not match!</div>
            <button type="submit">Sign up</button>
          </form>
        </div>

        {/* Login Form */}
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true" onClick={toggleLogin}>Login</label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          
          <div className="wrapper">
            <input type="text" name="username" placeholder="Username" value={username} readOnly required/>
            <button type="button" onClick={generateUsername}> New </button>
          </div>
          
          <button type="submit">Login</button>
        </form>
        <NavLink to="#" onClick={toggleForgotPassword}>Forgot Password?</NavLink>
      </div>

        {/* Reset Form */}
        <div className="overlay" id="forgot-password-overlay" style={{ display: isForgotPasswordVisible ? 'block' : 'none' }}>
          <div id="forgot-password-div" style={{ display: isForgotPasswordVisible ? 'block' : 'none' }}>
            <img src="padlock.png" alt="Padlock" id="forgot-password-img" />
            <div className="back-btn" id="back-btn-forgot" onClick={goBack}>
              <img src="arrow.png" alt="Back" />
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="forgot-email">Reset your password</label>
              <div id="verification-process">Enter your email for the verification process</div>
              <input
                type="email"
                id="forgot-email"
                name="forgot_email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div id="reset-password-form" style={{ display: isResetPasswordVisible ? 'block' : 'none' }}>
            <img src="padlock.png" alt="Padlock" id="reset-password-img" />
            <div className="back-btn" id="back-btn-reset" onClick={goBack}>
              <img src="arrow.png" alt="Back" />
            </div>
            <form onSubmit={handleSubmitSignUp}>
              <label htmlFor="reset-code">Reset your password</label>
              <input type="text" id="reset-code" name="reset_code" placeholder="Code" required />
              <input
                type={showPassword ? "text" : "password"}
                id="new-password"
                name="newPassword"
                placeholder="New password"
                required
                onChange={handleChange}
              />
              <input
                type={showPassword ? "text" : "password"}
                id="confirm-password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                onChange={handleChange}
              />
              <div className="reset-disclaimer" style={{ display: showPasswordDisclaimer ? "block" : "none" }}>Password must be at least 8 characters long, contain a number, a special character and an uppercase letter!</div>
              <div className="reset-disclaimer" style={{ display: showConfirmPasswordDisclaimer ? "block" : "none" }}>The password confirmation does not match!</div>
              <button type="submit">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Login;
