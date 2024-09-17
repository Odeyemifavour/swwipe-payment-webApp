<template>
    <div class="container">
        <main>
            <div class="main-content">
                <div class="leftCol">
                    <div class ="main-header">
                        <img  src="/Union.png" alt="">
                        <img src="/Swwipe.png" alt="">
                    </div>     
                    <section class="back">
                        <img src="/Vector (7).png" alt="">
                        <p>Back</p>
                    </section>

                    <section class="login-field">
                        <div class="login-header">
                            <h1>Login</h1>
                        </div>
                        <div class="login-body">
                            <label for="email">
                                <p>Email Address</p>
                                <section>
                                    <input type="email" placeholder="Enter email address" >
                                </section>
                            </label>
                            <label for="password">
                                <p>Password</p>
                                <section class="password-section">
                                    <input type="password" placeholder="Enter password">
                                    <i class="material-icons">visibility_off</i>
                                </section>
                            </label>
                        </div>
                        <div class="forgot-password-qstn">
                            <p>forgot password?</p>
                        </div>
                        <div class="stay-signed-in">
                            <input type="checkbox" name="" id="">
                            <p>Stay signed into your Swwipe account</p>
                        </div>
                        <div class="login-btn">
                            <button>Login to your account</button>
                        </div>
                        <div class="create-account">
                            <p class="create-account-qstn"> Don't have a Swwipe account?</p>
                            <section>
                                <RouterLink :to="{name: 'createAccount'}">
                                    <p>Create account <img src="/Vector (6).png" alt=""> </p>
                                    
                                </RouterLink>
                            </section>
                        </div>
                    </section>
               
                </div>

               <div class="rightCol">
                <PaymentTrustBadges/>
               </div>
            </div>
        </main>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import PaymentTrustBadges from '@/components/PaymentTrustBadges.vue';
import CreateAccount from './CreateAccount.vue';

    export default {
        name: 'login',
        components:{
            Footer,
            PaymentTrustBadges
        }
    }
</script>

<style lang="scss" scoped>
.container
{
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
}
main
{
    width: 100%;
    margin: auto;

    & .main-content
    {
        width: 100%;
        display: flex;
        flex-direction: row;

        justify-content: center;
        gap: 20px;
    }
}
.main-content .leftCol,  .main-content .rightCol
{
    width: 50%;
}
.main-content .leftCol
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}
.main-content .rightCol
{
    background: #FFF6F5;
}
.main-header, .back,  .login-field
{
   width: 50%;
   margin: auto;
}
.back
{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: #1F2937;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    margin-bottom: 2em;
}
.login-header h1
{
    color: #1F2937;
    font-weight: 800;
    font-size: 30px
}
.login-body label 
{
    & p
    {
        color: #141519;
        font-weight: 400;
        font-size: 14px;
        line-height: 2px;
    }
    & section 
    {
        border: 2px solid #9EA2B3;
        padding: 0.5em 0.2em;
        width: 100%;
        border-radius: 5px;

        & input
        {
        background: transparent;
        border: none;
        outline: none;
        &::placeholder
        {
            font-size: 12px;
            font-weight: 400
        }
        }
    }
    & .password-section
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
.forgot-password-qstn
{
    display:flex;
    float:right;
    cursor: pointer;
    & p 
    {
        color:#00B6AB;
        font-weight: 600;
        font-size: 14px;
    }
}
.stay-signed-in
{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;

    & p
    {
        color:#4B5563;
        font-weight: 400;
        font-size: 14px;
        width: 100%;
    }
}
.login-btn 
{
    width: 100%;

    & button 
    {
        width: 100%;
        padding: 0.5em 0.2em;
        background: transparent;
        border: none;
        background-color:#00B6AB ;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer;
        border-radius: 5px;
    }
}
.create-account
{
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    & .create-account-qstn
    {
        color: #4B5563;
        font-weight: 600;
        font-size: 13px;
    }
    & section 
    {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
     
        & p 
        {
            font-size: 13px;
            color: #00B6AB;
            font-weight: 600;
        }
    }
}
</style>