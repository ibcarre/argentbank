import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
import { useSelector } from "react-redux"
import { useState } from "react";
import ChangeUserName from "../components/signin/changeUserName"
//{userDetails.baody.firstName} {userDetails.body.firstName}


export default function User(){
    const [nameForm, setnameForm] = useState(false)
    const {user, userInfo} = useSelector((state)=>state.user)
    if(!user){
        window.location.href = '/signin';
        return null;
    }
    return(
        <>
        <Header />
        <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />{userInfo?.body?.firstName} {userInfo.body.lastName}!</h1>
        {nameForm ? (<ChangeUserName result={setnameForm}/> ) : 
        (    <button
            onClick={()=>setnameForm(true)} class="edit-button">Edit Name</button>)}
      </div>
      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
        <Footer />
        </>
    )
}