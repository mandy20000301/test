<template>
    <div class="h-[370px] xl:h-[567px] bg-black box">

    </div>
</template>
<script>
export default {
    name: 'Woman',
}
</script>
<style>
.box {
    background-image: url(/public/img/woman/bg_mobile.png);
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    @media screen and (min-width:600px) {
        background-image: url(/public/img/woman/bg.png);
    }
}
</style>