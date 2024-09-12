<template>
 <main>
  <div class="password-requirements">
    
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
          <input type="text" placeholder="Enter business name">
        </section>
      </label>

      <label for="email-address">
        <p>Email address</p>
        <section>
          <input type="text" placeholder="Enter email address">
        </section>
      </label>

      <label for="password">
        <p>Password</p>
        <section class="password-section">
          <input type="text" placeholder="Create password">
          <i class="material-icons">visibility_off</i>
        </section>
      </label>

      <label for="password">
        <p>Confirm password</p>
        <section class="password-section">
          <input type="text" placeholder="Re-enter password">
          <i class="material-icons">visibility_off</i>
        </section>
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
        <span>Login</span>
        <span><img src="/Vector (6).png" alt=""></span>
      </p>
    </section>
  </div>

 </main>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
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
  & p:first-child
  {
    color: #4B5563;
    font-size: 14px;
    font-weight: 500;
  }
  & p:nth-child(2){
    color: #00B6AB;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 3px;
    flex-direction: row;
    align-items: center;
  }
}
</style>