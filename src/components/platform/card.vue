<template>
    <div class="w-[335px] h-[335px] md:w-[400px] md:h-[400px] rounded-full  pt-[30px] md:pt-[50px] xl:w-[335px] xl:h-[335px] xl:pt-[30px]" :class="{'bg-[#D4FC68]':info?.bg_color === 'yellow', 'bg-primary-01':info?.bg_color === 'blue', 'bg-[#CB87FF]':info?.bg_color === 'purple'}">
        <img :src="require(`../../assets/img/platform/${info?.icon}.png`)" alt="" class="w-[100px] md:w-[130px] xl:w-[100px] block mx-auto mb-[13px]">
        <h4 class="text-[24px] text-center font-semibold tracking-[1.2px] mb-[13px]" :class="info?.txt_color === 'white'? 'text-white': 'text-primary-03'">{{ info?.name }}</h4>
        <p class="text-[18px] text-center font-normal tracking-[.9px] w-[80%] mx-auto" :class="info?.txt_color === 'white'? 'text-white': 'text-primary-03'">
           {{ info?.content }}</p>
    </div>
</template>
<script>
export default {
    name: 'Platform-card',
    props: {
        info: {
            type: Object,
            default: () => { },
        },
    },
}
</script>