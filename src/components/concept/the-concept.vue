<template>
    <div class="relative bg-[#EDEDED] xl:pb-[136px]">
        <div class="bg-primary-01 py-10 xl:pt-[100px] xl:pb-[139px] concept-box">
            <div class="container">
                <h3 class="text-primary-04 text-[36px] font-semibold tracking-[3.6px] mb-[25px] xl:mb-[49px] text-center">XITA團隊理念</h3>
                <p class="text-white font-medium tracking-[2.2px] mb-[25px] xl:w-[500px] xl:mx-auto xl:text-center">
                    我哋相信早在體驗服務前，由搜尋同預約起，客人同商戶嘅關係已經建立，每一步都影響客人對商戶評價，所以XITA首要宗旨係達成雙方完美體驗。</p>
                <p class="text-white text-[16px]  tracking-[.8px] font-semibold text-center xl:text-left mb-[25px] xl:mb-[16px]">XITA用戶真實評價</p>
            </div>
            <!--swiper mobile -->
            <div class="container-left xl:container  overflow-scroll">
                <div class="overflow-scroll w-fit flex xl:hidden">
                    <!-- 1 -->
                    <ConceptCard v-for="i in info" :key="i?.id" :info="i" class="mr-[30px] last-of-type:mr-0" />
                </div>
            </div>
        </div>
         <!-- desktop -->
         <div class="container hidden xl:block -mt-[120px]">
            <div class="grid xl:grid-cols-3 gap-[22px]">
                <ConceptCard v-for="i in info" :key="i?.id" :info="i" />
            </div>
        </div>
    </div>
</template>
<script>
import ConceptCard from '@/components/concept/card.vue';
export default {
    name: 'Concept',
    components: {
        ConceptCard
    },
    data() {
        return {
            info:[
                {
                    id:'Tony',
                    name:'Tony',
                    job:'專業髮型師',
                    content:'“ 啱啱裸辭開店時，預算有限，因為要畀坊間平大額入場費而卻步。好彩見到XITA 0成本開店，好快就走出comfort zone，試下自己做老闆！”'
                },
                {
                    id:'Jennifer',
                    name:'Jennifer',
                    job:'專業烘焙師',
                    content:'“ XITA無論喺booking或者sales tracking上都幫到好大忙，開舖同埋管理即時簡單好多。”'
                },
                {
                    id:'Carmen',
                    name:'Carmen',
                    job:'專業美容師',
                    content:'“ 平時人手預約真係好煩，但XITA幾個製用5分鐘就開到舖，一畀客人就即時排晒位，由系統自動Manage！”'
                },
            ]
        }
    },
}
</script>
<style lang="postcss" scoped>
::-webkit-scrollbar {
    display: none;
}
.concept-box {
    @media screen and (min-width:1200px) {
        background-image: url(/public/img/concept/concept_bg.png);
        background-repeat: no-repeat;
        background-size:contain;
        background-position:left;
    }
}
</style>