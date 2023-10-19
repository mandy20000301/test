<template>
    <div class="py-10 bg-[#EDEDED]">
        <div data-aos="fade-left" data-aos-duration="1500" class="container xl:grid xl:grid-cols-4">
            <h3 class="text-primary-01 text-[36px] font-semibold tracking-[3.6px] text-center mb-[55px]">合作伙伴</h3>
            <div class="w-[40%] mx-auto mb-10 last-of-type:mb-0 xl:mb-0" v-for="i in info" :key="i.id">
                <img :src="require(`../../assets/img/partner/${i?.image}.png`)" :alt="info?.id" class="" :class=" i?.image === 'aws'? 'w-[80%] mx-auto xl:w-full': 'w-full'">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Partner',
    data() {
        return {
            info:[
                {
                    id:'stripe',
                    image:'stripe',
                },
                {
                    id:'aws',
                    image:'aws',
                },
                {
                    id:'cloudflare',
                    image:'cloudflare',
                },
            ]
        }
    },
}
</script>