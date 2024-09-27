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
        <div class="dashboard-content">
            <div class="dashboard-content-top">
                <section class="welcome">
                    <p class="welcome-msg">Welcome <span>Tonia</span> </p>
                    <p class="overview-msg">Here's an overview of your payments</p>
                </section>
                <section class="date-and-refresh">
                    <div class="date">
                        <input type="date">
                    </div>
                    <div class="refresh-dashboard">
                        <i class="material-icons"> sync</i>
                        <p>refresh dashboard</p>
                    </div>

                </section>
            </div>
            <div class="dashboard-content-bottom">
                <!-- aside right -->
               <div class="payment-info">
                   <section class="transaction-dashboard">
                        <div class="description">
                            <p class="header">dashboard</p>
                            <p class="text">Here's an overview of your payments</p>
                        </div>
                        <div class="account-status">
                            <div class="amount-collected">
                                <p class="description">Amount collected</p>
                                <section>
                                    <p>₦0.00</p>
                                    <i class="material-icons"> visibility_on</i>
                                </section>
                                <p class="wallet-balance">Wallet Balance: <span> ₦0.00</span></p>
                            </div>
                            <div class="total-payment money">
                                <section>
                                    <p>total payment</p>
                                    <img src="/money-recive.png" alt="">
                                </section>
                                <p class="amount">$198,298</p>
                            </div>
                            <div class="total-withdrawal money">
                                <section>
                                    <p>total withdrawal</p>
                                    <img src="/money-send.png" alt="">
                                </section>
                                <p class="amount">$198,298</p>
                            </div>
                        </div>
                    </section>
                    <section class="account-activity bottom">
                        <div class="view-transaction activity">
                            <div class="header">
                                <h4>Recent payments</h4>
                                <p>Showing your transactions in the past hour</p>
                            </div>
                            <div class="transaction-history">
                                <div>
                                    <section class="details">
                                        <img src="/money-recive.png" alt="">
                                        <div class="transaction-info">
                                            <p class="transaction-method">USSD</p>
                                            <p class="transaction-date">July 22, 9:42 PM</p>
                                            <p class="transaction-source">Initiated on  web </p>
                                        </div>
                                    </section>
                                    <section class="payment-summary">
                                        <p class="payment-amount">+N2,000</p>
                                        <p class="payment-status">successful</p>
                                    </section>
                                </div>
                                <div>
                                    <section class="details">
                                        <img src="/money-recive.png" alt="">
                                        <div class="transaction-info">
                                            <p class="transaction-method">USSD</p>
                                            <p class="transaction-date">July 22, 9:42 PM</p>
                                            <p class="transaction-source">Initiated on  web </p>
                                        </div>
                                    </section>
                                    <section class="payment-summary">
                                        <p class="payment-amount">+N2,000</p>
                                        <p class="payment-status">successful</p>
                                    </section>
                                </div>
                                <div>
                                    <section class="details">
                                        <img src="/money-recive.png" alt="">
                                        <div class="transaction-info">
                                            <p class="transaction-method">USSD</p>
                                            <p class="transaction-date">July 22, 9:42 PM</p>
                                            <p class="transaction-source">Initiated on  web </p>
                                        </div>
                                    </section>
                                    <section class="payment-summary">
                                        <p class="payment-amount">+N2,000</p>
                                        <p class="payment-status">successful</p>
                                    </section>
                                </div>
                                <div>
                                    <section class="details">
                                        <img src="/money-recive.png" alt="">
                                        <div class="transaction-info">
                                            <p class="transaction-method">USSD</p>
                                            <p class="transaction-date">July 22, 9:42 PM</p>
                                            <p class="transaction-source">Initiated on  web </p>
                                        </div>
                                    </section>
                                    <section class="payment-summary">
                                        <p class="payment-amount">+N2,000</p>
                                        <p class="payment-status">successful</p>
                                    </section>
                                </div>
                            </div>
                            <div class="btn">
                                <button>View all transactions</button>
                            </div>

                        </div>
                        <div class="payment-overview activity">
                          <TransactionAnalysisChart  :chart-data="chartData" :chart-options="chartOptions"  />
                         
                        </div>
                    </section>
               </div>

               <!-- aside left -->
               <div class="payment-channel">
                payment channel
               </div>
            </div>
        </div>
    </div>
</template>


<script>

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
.dashboard-content
{
    background: #fff;
    // border: 2px solid red;
    margin-top: 6em;
    margin-right: 2em;
    margin-left: 2em;
    border-radius: 4px;
}
.dashboard-content-top
{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    margin: auto;

    .welcome
    {
        line-height: 5px;
        .welcome-msg
        {
            color: #374151;
            font-weight: 800;
            font-size: 20px;
        }
        .overview-msg
        {
            color: #374151;
            font-weight: 500;
            font-size: 14px;
        }
    
    }
}

.date-and-refresh
{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
     
    div 
    {
        border:1px solid #DCDEE6;
        height: 20px;
        display: flex;
        justify-content: center;
        padding: 0.1em 0.5em;
        border-radius: 4px;
    }
}
.date
{
    input 
    {
        background: transparent;
        border: none;
        color: #8A8A8A;
    }
}
.refresh-dashboard
{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    i 
    {
        color: #8A8A8A;
        font-size: 16px;
    }
    p 
    {
        color: #8A8A8A;
        font-weight: 600;
        font-size: 12px;
    }

}
.dashboard-content-bottom 
{
    display: grid;
    grid-template-columns: 46rem auto;
    width: 98%;
    margin: auto;
    gap: 0.8em;
    // border: 2px solid red;
}
.payment-info .transaction-dashboard
{
    border: 2px solid #F1F3F9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.description
{
    line-height: 4px;
    .header 
    {
        color: #082C4C;
        font-weight: 500;
        font-size: 18px;
        text-transform: capitalize;
    }

    .text 
    {
        color: #8798AD;
        font-weight: 400;
        font-size: 12px;
    }
}
.account-status
{
    display: grid;
    grid-template-columns: 18rem auto auto;
    gap: 0.1em;
    margin-top: 0.8em;

    div 
    {
        border: 1px solid #EDEEF2;
        padding: 0 0.5em;
        line-height: 0.1px;
        border-radius: 7px;
        height: 65px;
    }
}
.account-status .amount-collected
{
    display: flex;
    flex-direction: column;
    background-image: url('/Account Card (1).svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
   
}
.amount-collected .description
{
    color: #C9F8F5;
    font-weight: 500;
    font-size: 12px;
}
.amount-collected section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding: 0; 
    margin: 0; 
    line-height: 1; 
    
    p {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 14px;
        margin: 0; 
    }
    
    i {
        color: #59D3CC;
        font-size: 15px;
    }
}

.amount-collected .wallet-balance
{
    color:#C9F8F5;
    font-weight: 400;
    font-size: 12px;

    span 
    {
        color:#FFFFFF;
        font-weight: 700;
        font-size: 12px;
    }
}
.total-payment, .total-withdrawal
{
    display: flex;
    flex-direction: column;
    justify-content: center;

    .amount
    {
        color: #141519;
        font-weight: 600;
        font-size: 20px;
    }
}
.money section
{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p 
    {
        color: #6B6F80;
        font-weight: 600;
        font-size: 14px;
        text-transform: capitalize;
    }

}
.payment-info .account-activity
{
    border: 2px solid #F1F3F9;
    border-radius: 8px;
    padding: 15px;
    display: grid;
    margin-top: 1em;
    grid-template-columns: 16rem auto;
    gap:8px;
    .activity
    {
        border: 2px solid #F1F3F9;
        border-radius: 4px;
    }
}
.view-transaction
{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.view-transaction .header
{
    line-height: 4px;
    padding:0 0.3em;
    h4
    {
    color: #082C4C;
    font-weight:500 ;
    font-size: 14px;
    }
    p 
    {
    color: #8798AD;
    font-weight:400 ;
    font-size: 12px;
    }
}
.view-transaction .transaction-history
{
    display: flex;
    flex-direction: column;

    div 
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #F1F3F9;
        margin: 0.2em 0.3em;
        border-radius: 5px;
        padding:0 0.3em;
        height: 80px;


        .details
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
        

            div 
            {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
}
.transaction-history div .details .transaction-info
{
   line-height: 1px;

   .transaction-method
   {
    color: #374151;
    font-weight:600 ;
    font-size: 12px;
   }
   .transaction-date
   {
    color: #6B7280;
    font-weight:600 ;
    font-size: 12px;
    
   }
   .transaction-source
   {
    color: #9CA3AF;
    font-weight:500 ;
    font-size: 12px;
   }
}
.transaction-history div .payment-summary
{
    line-height: 4px;
    .payment-amount
    {
    color: #4B5563;
    font-weight:800 ;
    font-size: 14px;
    }
    .payment-status
    {
    color: #2D9017;
    font-weight:500 ;
    font-size: 12px;
    }
}
.view-transaction .btn
{
    width: 100%;
    margin-top: 0.4em ;

    button 
    {
        width: 100%;
        height: 40px;
        border: 1px solid #00B6AB;
        font-weight: 600;
        font-style: 16px;
        color: #00B6AB;
        background: transparent;
        border-radius: 4px;
        cursor: pointer;
    }
}
</style>
