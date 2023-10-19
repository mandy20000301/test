<template>
    <div>
        <div class="bg-[#EDEDED]">
            <div class="container">
                <h3 class="text-[36px] font-semibold tracking-[3.6px] text-primary-03 text-center pb-[25px]">嶄新網店架設平台</h3>
            </div>
        </div>
        <div class="half-bg">
            <div class="container">
                <div class="w-fit mx-auto xl:w-full xl:mx-0 grid gap-[25px] grid-cols-1 xl:grid-cols-3 xl:gap-[20px] ">
                    <PlatformCard v-for="i in info" :key="i.id" :info="i" />
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import PlatformCard from '@/components/platform/card.vue';
export default {
    name: 'Platform',
    components: {
        PlatformCard
    },
    data() {
        return {
            info: [
                {
                    id: '極速開店',
                    bg_color: 'yellow',
                    icon: 'icon1',
                    name: '極速開店',
                    content: 'XITA網店開戶介面容易，只要上傳幾張照片，5分鐘內便可立即有個人網店，即時接單'
                },
                {
                    id: '一站式管理',
                    bg_color: 'blue',
                    txt_color: 'white',
                    icon: 'icon2',
                    name: '一站式管理',
                    content: '隨時隨地睇到預約、營銷數據及客人資料，結合獨立會員系統，分析更詳細銷售數據'
                },
                {
                    id: '自動安排預約',
                    bg_color: 'purple',
                    icon: 'icon3',
                    name: '自動安排預約',
                    content: '由AI幫手提供可預約時間，交畀客人自己預約同取消，店主唔使再浪費精神處理，隨時做多幾單生意'
                },
            ]
        };
    },


}
</script>
<style lang="postcss" scoped>
.half-bg {
    @apply bg-[#EDEDED];

    @media screen and (min-width:1200px) {
        background-image: linear-gradient(to bottom, #EDEDED 0%, #EDEDED 50%, white 51%, white 100%);
    }
}
</style>