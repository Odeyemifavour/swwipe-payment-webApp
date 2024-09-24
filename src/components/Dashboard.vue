<template>
    <div class="dashboard">
        <div class="dashboard-header">
            <header>
                <div>
                    <h3 class="dashboard-header-text">dashboard</h3>
                </div>
                <div class="notification-and-switch-acct">
                    <div class="notification">
                        <i class="material-icons"> notifications</i>
                        <div class="notify"> 12</div>
                    </div>
                    <div class="switch-account">
                        <div class="profile">
                            <section class="profile-pic">
                                <img src="/Ellipse.png" alt="">
                                <div class="active"></div>
                            </section>
                            <section class="profile-name">
                                <p>arnnette block</p>
                            </section>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="dashboard-content"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.dashboard-header header 
{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF
}
.dashboard-header-text
{
    color: #374151;
    font-weight: 800;
    font-size: 20px;
    text-transform: capitalize;
}
.notification-and-switch-acct
{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
.profile
{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
.notification {
  position: relative;
  
  i {
    font-size: 30px;
    cursor: pointer;
  }

  .notify {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 18px;
    height: 18px;
    background-color: red;
    color: white;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
  }
}
.profile-pic {
  position: relative;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .active {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    border: 2px solid white;
  }
}
.profile-name p
{
    color: #2A3342;
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
}
</style>