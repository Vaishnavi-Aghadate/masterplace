import React, { useState, useEffect } from "react";
import "./AuthModal.css";

const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setSuccessMessage("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Special handling for email field
    if (id === "email") {
      const filteredValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
      setFormData(prev => ({
        ...prev,
        [id]: filteredValue
      }));
    } else if (id === "password") {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
      checkPasswordStrength(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length === 0) {
      setPasswordStrength("");
      return;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    const strength = 
      (hasUpperCase ? 1 : 0) +
      (hasLowerCase ? 1 : 0) +
      (hasNumbers ? 1 : 0) +
      (hasSpecialChars ? 1 : 0) +
      (isLongEnough ? 1 : 0);

    if (strength <= 2) {
      setPasswordStrength("Weak");
    } else if (strength <= 4) {
      setPasswordStrength("Moderate");
    } else {
      setPasswordStrength("Strong");
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (!isLogin && formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
    }

    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (isLogin) {
          setSuccessMessage("Login successful! Redirecting...");
          setTimeout(() => {
            onLoginSuccess();
            onClose();
          }, 2000);
        } else {
          setSuccessMessage("Registration successful! You can now login.");
          setIsLogin(true);
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
          });
        }
      } catch (error) {
        setErrors({ submit: "An error occurred. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        
        <h2>{isLogin ? "Login" : "Register"}</h2>
        
        {successMessage && (
          <div className="success-message">
            {successMessage}
            <div className="progress-bar"></div>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {formData.password && (
              <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
                Password Strength: {passwordStrength}
              </div>
            )}
            {errors.password && <span className="error-message">{errors.password}</span>}
            <div className="password-hints">
              <span className={formData.password.length >= 8 ? "valid" : ""}>• 8+ characters</span>
              <span className={/[A-Z]/.test(formData.password) ? "valid" : ""}>• Uppercase</span>
              <span className={/[a-z]/.test(formData.password) ? "valid" : ""}>• Lowercase</span>
              <span className={/\d/.test(formData.password) ? "valid" : ""}>• Number</span>
              <span className={/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? "valid" : ""}>• Special char</span>
            </div>
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          )}
          
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : isLogin ? (
              "Login"
            ) : (
              "Register"
            )}
          </button>
        </form>
        
        <p className="toggle-auth-mode">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleAuthMode}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;