<template>
    <main>
        <aside class="right"> 
            <SideBar/>
        </aside>
        <div class="main-content">
            <Dashboard/>
        </div>
    </main>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
import SideBar from '@/components/SideBar.vue';

    export default {
        name:'accountManagement',
        components: {
            SideBar,
            Dashboard
        }
        
    }
</script>
 
<style lang="scss" scoped>
main 
{
    display: grid;
    grid-template-columns: 16rem auto;
    width: 100%;
    margin: auto;
    background-color: #fff;
}
.right
{
   height: 100vh;
   margin-left: 1em;
   border-radius: 4px;
}
.main-content
{
    background: whitesmoke;
    height: 100vh;
}
a 
{
    text-decoration: none;
}
</style>