<template>
    <div class="password-requirements-field">
        <p>REQUIREMENTS</p>
        <ul>
            <li v-for="(req,key) in requirements" :key="key">
                <input type="checkbox" :id="key" v-model="req.pass">
                <label :for="key">{{ req.description }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            password: String,
            requirements: Object
        }
    }
</script>

<style lang="scss" scoped>
div
{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    margin-left: 15px;
    background-color: #1F2937;
    color: #D1D5DB;
    border-radius: 5px;
    line-height: 5px;
}
ul
{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    & li
    {
        font-size: 12px;
        width: 100%;
    }
}

</style>
<!-- At  least 10 characters
 at least 1 uppercase letter
at least 2 upper case letter
at least 1 digit
at least one symbol -->
