<template>
    <div class="payment-trustBadges">

        <div class="payment-method-image">
            <img src="/Component 7.png" alt="">
        </div>

        <div class="payment-info">
            <h1>Let your customers pay however they want</h1>
            <p>With Swwipe every business enjoy multiple seamless, fast, and easy payments from their customers</p>
        </div>

        <div class="payment-reviews">
            <div class="review-profile-pic">
                <img src="/Ellipse 1.png" alt="">
                <img src="/Ellipse 2.png" alt="">
                <img src="/Ellipse 3.png" alt="">
            </div>

            <div class="review-text">
                <p>5000+</p>
                <p>businesses use Swwipe</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  .payment-trustBadges
  {
    width: 60%;
    margin: auto 0;
    padding: 0 2em;

    & .payment-method-image
    {
      
        & img
        {
            width: 350px;
        }
    }
  }
  .payment-info
  {
    width: 100%;

    & h1 
    {
        color: #4B5563;
        font-weight: 800;
        width: 100%;
    }
    & p 
    {
        font-size: 14px;
        font-weight: 400;
        color: #1F2937;
    }
  }
  .payment-reviews {
            
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            padding: 1em 0
        }

        .review-profile-pic {
            display: flex;
            align-items: center;
        }

        .review-profile-pic img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid white;
            margin-right: -15px; /* Negative margin for overlap */
        }

        .review-text {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }

        .review-text p {
            margin: 0;
            
           
        }

        .review-text p:first-child {
            font-weight: bold;
            font-size: 12px;
        }
        .review-text p:nth-child(2){
            color: #667085;
            font-size: 12px;
        }
</style>