<template>
    <div class="forgot-password">
        <div class="forgot-password-container">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.forgot-password
{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    background-color: #E5E7EB;
    width: 30%;
    height: 520px;
    border-radius: 5px;
    margin: auto;
    
    & .forgot-password-container
    {
    //    display: flex;
    //    flex-direction: column;

          width: 80%;
          padding:20px;
          line-height: 16px;

    }
}
</style>