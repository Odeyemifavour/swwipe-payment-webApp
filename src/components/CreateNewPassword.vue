<template>
    <div>
        <div class="password-created-successfully" v-if="verifyPasswordSent" @close="togglePasswordSent">
               <div class="pop-up">
                <div class="checked-icon">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div class="text">
                    <p>Password created successfully</p>
                </div>
                <div class="close">
                    <i class="fa-duotone fa-solid fa-xmark" v-if="verifyPasswordSent" @click="closePasswordSent" >  </i>
                </div>   
               </div>
        </div>
    </div>
    <div class="container">
        <div class="logo">
            <img src="/Union.png" alt="">
            <img src="/Swwipe.png" alt="">
        </div>
       <div class="content">
        <section class="header-text">
            <h1>Create new password</h1>
            <p>Create a new password to login to your account</p>
        </section>
        <section class="content-img">
            <img src="/Password_Two Color (1) 1.png" alt="">
        </section>
        <section class="form">
            <form action="">
                <label for="password">
                    <p>New Password</p>
                    <section class="password-section">
                        <input placeholder="Enter new password" type="password" v-model="newPassword">
                        <i class="material-icons" @click="togglePasswordVisibility">{{ passwordVisible ? 'visibility' : 'visibility_off' }}</i>
                    </section>
                    </label>

                    <label for="confirm-password">
                    <p>Confirm password</p>
                    <section class="password-section">
                        <input type="password" placeholder="Re-enter new password" v-model="confirmNewPassword">
                        <i class="material-icons" @click="togglePasswordVisibility">{{ passwordVisible ? 'visibility' : 'visibility_off' }}</i>
                    </section>
                    <p v-if="passwordMismatch" class="error-message">Passwords do not match</p>
                </label>
            </form>
        </section>
        <section class="create-password">
            <button @click="togglePasswordSent" class="create-password-btn">create password</button>
        </section>
        <section class="login">
            <p>Go back to 
               
                    <RouterLink :to="{name:'login'}">
                        <span>Login</span>
                    </RouterLink>
          
            </p>
        </section>
       </div>
    </div>
    <!-- <div class="footer">
        <Footer/>
    </div> -->
</template>

<script>
import { ref } from 'vue';
import Footer from './Footer.vue';


    export default {
        name: 'create-new-password',
      components:{
        Footer
      },
      setup(){
        const newPassword = ref('');
        const confirmNewPassword = ref('');
        const verifyPasswordSent = ref(false);
        const togglePasswordSent = ()=> {
            verifyPasswordSent.value =! verifyPasswordSent.value;
              if(verifyPasswordSent.value = true){
                verifyPasswordSent.value = verifyPasswordSent.value
        }
        }

        const closePasswordSent = ()=>{
            if(verifyPasswordSent.value = true){
                verifyPasswordSent.value =! verifyPasswordSent.value
            }
        }

        return{
            newPassword,
            confirmNewPassword,
            verifyPasswordSent,
            togglePasswordSent,
            closePasswordSent
        }
      }
      
    }
</script>

<style lang="scss" scoped>
    .password-created-successfully
    {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
        justify-content: flex-end;
        

        & .pop-up 
        {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid #95C9B4;
        gap: 10px;
        margin: 1em 1.5em;
        padding: 0 1em;
        background-color: #95C9B4;
        border-radius: 2px;

        div .fa-xmark
        {
            color: #5C5F62;
            cursor: pointer;
        }
        div p
        {
            color: #202223;
            font-weight: 400;
            font-size: 14px;
        }
        .checked-icon i
        {
            color: green;
        }
        }
    }
    .container
    {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: 35%;
        margin: auto;
        padding: 1.5em 0;
    }
    .content 
    {
        border: 2px solid #E5E7EB;
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-top: 1em;
        border-radius: 5px;

        & section 
        {
            width: 100%;
            margin: auto;
        }
    }
    .header-text
     {
         display: flex;
         flex-direction: column;
         text-align: center;
         line-height: 1px;

         h1 
         {
            color: #20102B;
            font-weight: 700;
            font-size: 22px;
         }
         p
         {
            font-weight: 400;
            font-size: 14px;
            color: #6B7280;
         }
     }
    .content-img 
    {
        display: flex;
        justify-content: center;
    } 
    .form form
    {

        display: flex;
        flex-direction: column;
        gap: 10px;
        
        & label
        {
            margin: 0.5em 0;
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: auto;
        }
        & label p
        {
            font-size: 14px;
            font-weight: 400;
            color: #141519;
            line-height: 2px
        }
        & label .password-section
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        & label section 
        {
            border: 2px solid #9EA2B3;
            padding: 0.5em 0.1em;
            width: 100%;
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
            & i 
            {
            cursor: pointer;
            }
        }
    }
    .create-password 
    {
      margin: auto;
      display: flex;
      justify-content: center;
      padding: 1em 0;
      
      button 
      {
        width: 80%;
        margin: auto;
        padding: 0.8em 0.1em;
        cursor: pointer;
        background: #00B6AB;
        border: none;
        outline: none;
        border-radius: 4px;
        font-weight: 600;
        font-size: 16px;
        color: #fff;
      }
    }
    .login
    {
        display: flex;
        justify-content: center;
        font-weight: 500;
        font-size: 14px;
        p span 
        {
            color: #00B6AB;
            cursor: pointer;
        }
    }
    
</style>