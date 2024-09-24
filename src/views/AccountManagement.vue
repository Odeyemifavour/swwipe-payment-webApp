<template>
    <main>
        <aside class="right"> 
            <SideBar/>
        </aside>
        <div class="main-content">
            main content
        </div>
    </main>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

    export default {
        name:'accountManagement',
        components: {
            SideBar
        }
        
    }
</script>
 
<style lang="scss" scoped>
main 
{
    display: grid;
    grid-template-columns: 16rem auto;
    width: 96%;
    margin: auto;
    gap: 1.8em;
    background-color: #fff;
}
.right
{
   height: 100vh;
}
.main-content
{
    border:2px solid red
}
</style>