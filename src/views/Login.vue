<template>
    <div class="container" :class="{ 'blur-background': showForgottenPasswordContainer }">
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
                           <p @click="toggleForgotPassword">forgot password?</p>
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
        <ResetLink v-if="sendPasswordResetLink" @close="togglePasswordResetLinkSent">
            <div class="reset-link-sent">
                <div class="sent-icon">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div class="sent-text">
                    <p>Password reset link sent</p>
                </div>
                <div class="close">
                    <i class="fa-duotone fa-solid fa-xmark" @click="togglePasswordResetLinkSent" > </i>
                </div>   
            </div>
        </ResetLink>

        <ForgotPassword v-if="showForgottenPasswordContainer" @close="toggleForgotPassword">
                <div class="close-pop">
                <i class="fa-duotone fa-solid fa-xmark" @click="toggleForgotPassword" > </i>
             </div>
            <div class="header">
                <h3> forgot password </h3>
                <p> Don't worry, it happens. Please provide the email address associated with your account</p>
            </div>
            <div class="image">
                <img src="/Password_Two Color (1) 1.png" alt="">
            </div>
            <div class="enter-email">
                <label for="email-address">
                    <p>Email address</p>
                    <section>
                    <input type="text" placeholder="yourMail@gmail.com" >
                    </section>
                </label>
            </div>
           <RouterLink :to="{name: 'create-new-password'}">
                <div class="submit">
                    <button @click.prevent="handleSubmitBtn">Submit</button>
                </div>
           </RouterLink>
            <div class="reset-link">
                <p>Can't find the link in your inbox? check your spam folder or 
                    <span @click="togglePasswordResetLinkSent">Resend link</span>
                </p>
            </div>
        </ForgotPassword>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import PaymentTrustBadges from '@/components/PaymentTrustBadges.vue';
import CreateAccount from './CreateAccount.vue';
import ForgotPassword from '@/components/ForgotPassword.vue';
import { ref } from 'vue';
import ResetLink from '@/components/ResetLink.vue';
import CreateNewPassword from '@/components/CreateNewPassword.vue';
import { useRouter } from 'vue-router';

    export default {
        name: 'login',
        components:{
            Footer,
            PaymentTrustBadges,
            ForgotPassword,
            ResetLink,
            CreateNewPassword
        },
        
        setup() {
            const router = useRouter();
            const showForgottenPasswordContainer = ref(false);
            const sendPasswordResetLink = ref(false);

            const toggleForgotPassword = () => {
                showForgottenPasswordContainer.value = !showForgottenPasswordContainer.value;
            };

            const togglePasswordResetLinkSent = () => {
                sendPasswordResetLink.value = !sendPasswordResetLink.value;
            };

            const handleSubmitBtn = ()=>{
                togglePasswordResetLinkSent();
                setTimeout( ()=> {
                    router.push({name:'create-new-password'});
                }, 500)
            };
            return {
                showForgottenPasswordContainer,
                toggleForgotPassword,
                sendPasswordResetLink,
                togglePasswordResetLinkSent,
                handleSubmitBtn
            };
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
    overflow-x: hidden;
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
.close-pop
{
    float: right;

    & i 
    {
        color: #5C5F62;
        cursor: pointer;
    }
}
.header 
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    text-align:center;
    margin: 1em 0;
    h3
    {
        color: #1F2937;
        font-weight: 700;
        font-size: 20px;
        
    }
    p
    {
        color: #4B5563;
        font-weight: 500;
        font-size: 16px;
    }
}
.image 
{
    display: flex;
    justify-content: center;
    
    img 
    {
        width: 200px;
    }

}
.enter-email
{
    width: 100%;
    & label
    {
        
        p 
        {
            color: #141519;
            font-weight: 400;
            font-size: 14px;
            line-height: 2px;
        }
         section 
        {
            border: 2px solid #9EA2B3;
            padding: 0.5em 0.1em;
            
            border-radius: 5px;
            & input
            {
            background: transparent;
            border: none;
            outline: none;
            
            width: 100%;
        
            &::placeholder
            {
                font-size: 12px;
                font-weight: 400
            }
            }
        }
}
}
.submit
{
    width: 100%;
    margin: 0.6em 0;

    & button 
    {
        width:100%;
        height: 35px;
        border: none;
        outline: none;
        background: #00B6AB;
        border-radius: 5px;
        font-weight: 600;
        font-size:16px ;
        color: #fff;
        cursor: pointer;
    }
}
.reset-link
{
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0.6em 0;
    & p 
    {
        color: #4B5563;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;

        & span 
        {
           color: #00B6AB;
        }
    }
}
.blur-background .main-content
 {
  filter: blur(15px);
  transition: filter 0.1s ease-in-out;
}
.reset-link-sent 
{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background-color: #95C9B4;
    padding: 0.08em 0.8em;
    border-radius: 5px;

    div i 
    {
        color: #5C5F62;
    }
    & .sent-icon
    {

    }
    & .sent-text
    {
        p 
        {
            color: #202223;
            font-weight: 400;
            font-size: 14px;
        }
    }
    & .close 
    {
        i 
        {
            cursor: pointer;
        }
    }

}
</style>