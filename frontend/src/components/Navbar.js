import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import ProfileBadge from "./ProfileBadge";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  const handleProfileBadge = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ExpenseSplittr</h1>
        </Link>
        <nav>
          {user && (
            <div className="user-info">
              <ProfileBadge user={user} />
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
