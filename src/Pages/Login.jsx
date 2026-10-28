import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    setStatus(
      "Sign-in is not connected to an account service yet. No account was accessed."
    );
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-welcome">
          <img
            src="/images/rodrigo-dos-reis-DkTuGvgPotA-unsplash.jpg"
            alt="Fresh bananas"
          />
          <div className="login-welcome-overlay">
            <span className="login-welcome-badge">
              <ShieldCheck size={16} aria-hidden="true" />
              Freshness you can trust
            </span>
            <p>Welcome back to</p>
            <h2>Fresh Fruits</h2>
            <span>Good choices start with something fresh.</span>
          </div>
        </div>

        <div className="login-panel">
          <span className="login-icon">
            <LockKeyhole size={23} aria-hidden="true" />
          </span>
          <h1>Welcome back</h1>
          <p className="login-description">
            Sign in to continue to your Fresh Fruits account.
          </p>

          <form onSubmit={handleLogin}>
            <div className="login-field">
              <label htmlFor="login-email">Email address</label>
              <span className="input-box">
                <Mail size={18} aria-hidden="true" />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setStatus("");
                  }}
                  required
                />
              </span>
            </div>

            <div className="login-field">
              <label htmlFor="login-password">Password</label>
              <span className="input-box">
                <LockKeyhole size={18} aria-hidden="true" />
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setStatus("");
                  }}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((isVisible) => !isVisible)}
                >
                  {showPassword ? (
                    <EyeOff size={18} aria-hidden="true" />
                  ) : (
                    <Eye size={18} aria-hidden="true" />
                  )}
                </button>
              </span>
            </div>

            <button className="login-submit" type="submit">
              Sign in
            </button>
            <p className="login-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>

          <p className="login-help">
            Just browsing? <Link to="/products">Explore our fruits</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
