<template>
    <div class="reset-password">
        <div class="reset-link-sent-container">
            <slot/>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.reset-password
{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: flex-end;
    width: 100%;
   
    & .reset-link-sent-container
    {
       padding: 1em 6em;
    }
}
</style>