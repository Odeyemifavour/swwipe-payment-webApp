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
          width: 80%;
          line-height: 16px;
          padding-top: 0.8em;
    }
}
</style>