<template>
 <main>
 <div class="leftCol">
  <div class="password-requirements">
    <PasswordRequirement v-if="showRequrements" :password="password" :requirements="requirements" />
  </div>
  <div class="create-account-container">
    
    <section class="header-logo">
      <img src="/Union.png" alt="">
      <img src="/Swwipe.png" alt="">
    </section>

    <section class="header-text">
      <p>Start receiving payments for your business</p>
      <h1>Create a Swwipe account</h1>
    </section>

    <section class="form-field">
      <label for="business-name">
        <p>Business name</p>
        <section>
          <input type="text" placeholder="Enter business name" v-model="businessName">
        </section>
      </label>
    
      <label for="email-address">
        <p>Email address</p>
        <section>
          <input type="text" placeholder="Enter email address" v-model="emailAddress" >
        </section>
      </label>

      <!-- <label for="password">
        <p>Password</p>
        <section class="password-section">
          <input type="password" placeholder="Create password" v-model="password" @focus="showRequrements = true"  >
          <i class="material-icons" >visibility_off</i>
        </section>
      </label>

      <label for="password">
        <p>Confirm password</p>
        <section class="password-section">
          <input type="password" placeholder="Re-enter password" v-model="confirmPassword">
          <i class="material-icons">visibility_off</i>
        </section>
      </label> -->
      <label for="password">
      <p>Password</p>
      <section class="password-section">
        <input :type="passwordVisible ? 'text' : 'password'" placeholder="Create password" v-model="password" @focus="showRequrements = true">
        <i class="material-icons" @click="togglePasswordVisibility">{{ passwordVisible ? 'visibility' : 'visibility_off' }}</i>
      </section>
    </label>

    <label for="confirm-password">
      <p>Confirm password</p>
      <section class="password-section">
        <input :type="passwordVisible ? 'text' : 'password'" placeholder="Re-enter password" v-model="confirmPassword">
        <i class="material-icons" @click="togglePasswordVisibility">{{ passwordVisible ? 'visibility' : 'visibility_off' }}</i>
      </section>
      <p v-if="passwordMismatch" class="error-message">Passwords do not match</p>
    </label>

    </section>
    
    <section class="terms-and-conditions">
      <p>By Creating an account, you agree to Swwipe's <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
    </section>

    <section class="create-account-btn">
      <button type="submit"> create account</button>
    </section>

    <section class="login-here">
      <p>Already have a Swwipe account?</p>
      <p>
       <RouterLink :to="{name: 'login'}">
        <span class="login">Login</span>
        <span><img src="/Vector (6).png" alt=""></span>
       </RouterLink>
      </p>
      <RouterView/>
    </section>
  </div>
 </div>
 <div class="rightCol">
  <div class="payment-trustBadges">
            <PaymentTrustBadges/>
        </div>
 </div>

 </main>
 <div class="footer">
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import PasswordRequirement from '@/components/PasswordRequirement.vue';
import PaymentTrustBadges from '@/components/PaymentTrustBadges.vue';
import { watch } from 'vue';
import { ref } from 'vue';

  export default {
    name:'createAccount',
    components:{
      PasswordRequirement,
      PaymentTrustBadges,
      Footer
    },
    setup(){
      const businessName = ref('');
      const emailAddress = ref('');
      const password = ref('');
      const confirmPassword = ref('');
      const showRequrements = ref(false);
      const passwordVisible = ref(false);
      const requirements = ref({
        passwordLengthRequired: {
          description: 'At least 10 characters', check: (password) => password.length >=10, pass: false
        },
        oneUppercaseRequired: {
          description: 'At least 1 uppercase', check: (password) => /[A-Z]/.test(password), pass: false
        },
        twoUppercaseRequired: {
          description: 'At least 2 uppercase', check: (password) => /[A-Z].*[A-Z]/.test(password), pass: false
        },
        digitRequired: {
          description: 'At least 1 digit', check: (password) => /\d/.test(password), pass: false
        },
        symbolRequired: {
          description: 'At least 1 symbol', check: (password) => /[!@#$%^&*(),.?":{}|<>_-]/.test(password), pass: false
        }
      })
// watch
      watch(password, (newPassword) => {
        Object.keys(requirements.value).forEach(key => {
        requirements.value[key].pass = requirements.value[key].check(newPassword);
      });
  });

   const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    // const passwordMismatch = computed(() => {
    //   return password.value !== confirmPassword.value && confirmPassword.value !== '';
    // }); 

      return{
        businessName,
        emailAddress,
        password,
        showRequrements,
        requirements,
        passwordVisible,
        togglePasswordVisibility,
        
      }
    }
    
  }
</script>

<style lang="scss" scoped>
main
{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px
}
.leftCol, .rightCol
{
  width: 50%;
}
.leftCol 
{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.rightCol
{
  background: #FFF6F5;
}
.create-account-container
{
  width: 60%;
  margin: auto;
}
.header-logo
{
  padding: 0.2em 0;
}
.header-text {
  line-height: 10px;
  
  & p{
    font-size: 16px;
    font-weight: 600;
    color: #4B5563;
  }
  & h1{
    font-size: 25px;
    font-weight: 800;
    color: #1F2937;
    width:100%;
}
}
.form-field
{
  display: flex;
  flex-direction: column;

  & label
  {
    margin: 0.5em 0;
  }
  & label p
  {
    font-size: 12px;
    font-weight: 400;
    color: #1F2937;
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
    width: 280px;
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
    & i 
    {
      cursor: pointer;
    }
  }

}
.terms-and-conditions
{
  font-size: 12px;
  font-weight: 700;
  width: 90%;

  & p span
  {
    color: #00B6AB;
  }
}
.create-account-btn button
{
  width: 280px;
  padding: 0.6em 0.1em;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: #9EA2B3;
}
.login-here
{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  & p:first-child
  {
    color: #4B5563;
    font-size: 14px;
    font-weight: 500;
  }
  & p:nth-child(2){
   
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 3px;
    flex-direction: row;
    align-items: center;
    
  }
}
.login-here .login
{
  color: #00B6AB;
  text-decoration: none;
}
.payment-trustBadges
{
   
   
}
.footer{
    margin-top: 0.2em;
}
</style>