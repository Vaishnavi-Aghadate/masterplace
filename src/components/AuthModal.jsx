import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Special handling for email field to prevent unwanted characters
    if (id === "email") {
      // Only allow characters that are valid in emails
      const filteredValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
      setFormData(prev => ({
        ...prev,
        [id]: filteredValue
      }));
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

  const validate = () => {
    const newErrors = {};
    // More strict email regex that disallows problematic special characters
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (!isLogin && formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email (only letters, numbers, ., _, -, and @ allowed)";
    } else if (formData.email.includes("..")) {
      newErrors.email = "Email cannot contain consecutive dots";
    } else if (formData.email.startsWith(".") || formData.email.endsWith(".")) {
      newErrors.email = "Email cannot start or end with a dot";
    } else if (formData.email.indexOf("@") === -1) {
      newErrors.email = "Email must contain @ symbol";
    } else if (formData.email.indexOf("@") !== formData.email.lastIndexOf("@")) {
      newErrors.email = "Email can only contain one @ symbol";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters with at least one letter and one number";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log(isLogin ? "Login submitted" : "Register submitted", formData);
        setIsSubmitting(false);
        onClose(); // Close modal on successful submission
      }, 1500);
    }
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        
        <h2>{isLogin ? "Login" : "Register"}</h2>
        
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
            {errors.password && <span className="error-message">{errors.password}</span>}
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