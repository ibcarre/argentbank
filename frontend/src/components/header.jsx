import { Link } from "react-router-dom"
import ArgentBankLogo from "../img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userDetails } from "../Redux/UserSlice";

export default function Header(){
  const {user, userInfo} = useSelector((state)=> state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if(user){
      dispatch(userDetails());
    }
}, [dispatch, user]);
    return (
      <>
      <header>
      <nav className="main-nav">
        <Link to ="/" class="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {user ? (
            <>
          <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          {userInfo?.body?.firstName}
        </a>
        <a class="main-nav-item" href="./">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
        </>) : (          <Link to ="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>)}
        </div>
      </nav>
      </header>
    </>
      )
  }