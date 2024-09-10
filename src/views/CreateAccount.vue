<template>
  <div>
   <div class="header">
    <Header/>
   </div>
   <main>
    <div class="create-account-field">
      <p>Start receiving payments for your business</p>
      <h1>Create a Swwipe account</h1>
      <div class="create-account-input-field">
        <label for="business-name">Business name
          <input v-model="businessName" type="text"  placeholder="Enter business name">
        </label>
        
        <label for="email-address">Email address
          <input v-model="emailAddress" type="email" name="" id="" placeholder="Enter email address" >
        </label>
        
        <label for="password">Password
          <input v-model="password" type="password" placeholder="create password" > <i class="material-icons">visibility_off</i>
        </label>

        <label for="password">Confirm Password
          <input v-model="confirmPassword" type="password" placeholder="Re-enter password" > <i class="material-icons">visibility_off</i>
        </label>

      </div>
    </div>
   </main>

  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { ref } from 'vue';


  export default {
    components:{
      Header
    },
    setup(){
      const businessName = ref('')
      const emailAddress = ref('')
      const password = ref('')
      const confirmPassword = ref('')

    }
  }
</script>

<style lang="sass" scoped>



</style>
