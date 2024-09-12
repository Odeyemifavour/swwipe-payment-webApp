<template>
    <div class="content">
        <div class="create-account">
            <CreateAccount/>
        </div>
        <div class="payment-trustBadges">
            <PaymentTrustBadges/>
        </div>
    </div>
    <div class="footer">
        <Footer/>
    </div>
</template>

<script>
import PaymentTrustBadges from './components/PaymentTrustBadges.vue';
import CreateAccount from './views/CreateAccount.vue';
import Footer from './components/Footer.vue';

    export default {
       components:{
        CreateAccount,
        PaymentTrustBadges,
        Footer
       }
    }
</script>
    
<style lang="scss" scoped>
.content
{
    // border: 2px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.content >div
{

    width: 50%;
    
}

.payment-trustBadges
{
    background: #FFF6F5;
   
}
.footer{
    margin-top: 0.2em;
}
</style>