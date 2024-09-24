<template>
    <div class="side-bar">
        <div class="profile-info" >
           <div class="profile">
                <div class="profile-pic">
                    <img src="/Oval.png" alt="profile-pic">
                    <div class="active"></div>
                </div>
                <div class="profile-text">
                    <div class="profile-name"> 
                    <p> Tonia Stores</p>
                    </div>
                    <div class="business-type"> 
                        <p>fashion</p>
                    </div>
                </div>
           </div>
           <div class="other-options">
                <i class="material-icons"> arrow_drop_down</i>
           </div>
        </div>


        <div class="user-menu" >
           <section>
            <ul>
                <li>
                    <i class="material-icons"> home</i>
                    <span>Home</span>
                </li>
                <li>
                    <i class="material-icons"> dashboard</i>
                    <span>Dashboard</span>
                </li>
                
            </ul>
           </section>

           <section>
            <ul>
                <h5>transactions</h5> 
                <li>
                    <i class="material-icons"> payment</i>
                    <span>Payment</span>
                </li>
                <li>
                    <i class="material-icons"> monetization_on</i>
                    <span>Withdrawal</span>
                </li>
                
            </ul>
           </section>

           <section>
            <ul>
                 <h5>reports</h5>
                <li>
                    <i class="material-icons"> receipt</i>
                    <span>wallet statement</span>
                </li>
                <li>
                    <i class="material-icons"> handshake</i>
                    <span>settlement</span>
                </li>
                <li>
                    <i class="material-icons"> tune</i>
                    <span>terminal</span>
                </li>
                <li class="location">
                    <i class="material-icons"> place</i>
                    <span>locations</span>
                    <span class="location-fig">15</span>
                </li>
                
            </ul>
           </section>

           <section>
            <ul>
                 <h5>others</h5>
                <li>
                    <i class="material-icons"> flag</i>
                    <span>disputes</span>
                </li>
                <li>
                    <i class="material-icons"> settings</i>
                    <span>settings</span>
                </li>
                <li>
                    <i class="material-icons"> headset_mic</i>
                    <span>help and support</span>
                </li>
                
            </ul>
           </section>

        </div>
    </div>
    <footer>
        <p>Swwipe retail App. version 1.2.1</p>
        <p>(4.8) 56 reviews</p>
    </footer>
</template>

<script>
    export default {
        name:'sideBar',
    }
</script>

<style lang="scss" scoped>
.side-bar {
    display: flex;
    flex-direction: column;

    .profile-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 3em ;

        .profile {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 2px;
        }
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
    top: 0;
    right: 0;
    border: 2px solid white;
  }
}

.profile-text {
    line-height: 4px;

    .profile-name p {
        color: #082C4C;
        font-weight: 700;
        font-size: 14px;
    }
    .business-type p {
        color: #385374;
        font-weight: 400;
        font-size: 12px;
    }    
}

.user-menu {
    display: flex;
    flex-direction: column;
    margin: 0.7em 0;
    padding-left: 0;
   
    section ul {
        padding-left: 0; 
        margin-left: 0; 
    }

    section ul li {
        list-style-type: none;
    }
}

section {
    display: flex;
    flex-direction: column;
    
    h5 {
        color: #6D7175;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 12px;
        text-align: left;
        margin: 0 0 0.5em 0;
    }
}

section ul {
    display: flex;
    flex-direction: column;
}

section ul li {
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: 10px;
    margin: 0.1em 0;
    text-transform: capitalize;
    padding: 0.5em ;
    border-radius: 5px;
    transition: all 0.5s;
    
    i {
        color: #6B7280;
        font-size: 15px;
    }

    span {
        font-weight: 500;
        color: #1F2937;
        font-size: 14px;
    }
}
section ul li:hover
{
    background: #F1F3F9;
    cursor: pointer;
    i {
        color: #009289;
      
    }

    span {
        color: #009289;
        }

}
section ul .location 
{
    display: flex;
    flex-direction: row;
    align-items: center;

    .location-fig
    {
        background-color: #E4E5E7;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-weight: 400;
        font-size: 12px;
        margin-left: 60px
    }
}
footer p 
{
    color: #9CA3AF;
    font-weight: 400;
    font-size: 14px;
    
}
</style>