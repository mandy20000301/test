<template>
    <div class="container pb-[30px] xl:pb-0">
        <h3 class="text-[36px] font-semibold tracking-[3.6px] text-primary-03 text-center mb-[25px]">功能完美貼合期待</h3>
        <!-- 1 -->
        <div class="mb-[60px] xl:mb-0 xl:flex xl:flex-wrap xl:items-center xl:justify-between">
            <div class="img-box xl:w-1/2 xl:mr-[43px]  mb-[25px] xl:mb-0 relative">
                <img src="../../assets/img/function/feature1.png" alt="" class="w-full">
                <div class="icon-box absolute left-[10%] top-[10%] w-[13%]">
                    <img src="../../assets/img/function/icon1.png" alt="" class="w-full">
                </div>
            </div>
            <div class="txt-box xl:w-1 xl:grow">
                <h4 class="text-primary-01 text-center text-[30px] font-semibold tracking-[1.5px] mb-[25px] xl:text-left xl:mb-12">開店容易火速接單</h4>
                <p class="text-[18px] font-normal tracking-[.9px]">XITA除咗有預約功能之外，更有公司介紹、員工經驗評價、服務質素及客人回應，只要上載幾張相至各部份，就可以建立有全面體驗嘅網店，呈現時尚、個人化及專業品牌形象，1小時內即可發佈，即時接單，展開公司新一頁。</p>
            </div>
        </div>
        <!-- 2 -->
        <div class="mb-[71px] xl:mb-0 xl:flex xl:flex-wrap xl:items-center xl:justify-between">
            <div class="img-box xl:w-1/2 mb-[25px] xl:mb-0">
                <img src="../../assets/img/function/feature2.png" alt="" class="w-full">
            </div>
            <div class="txt-box xl:w-1 xl:grow xl:-order-1 xl:mr-[57px]">
                <h4 class="text-primary-01 text-center text-[30px] font-semibold tracking-[1.5px] mb-[25px] xl:mb-[48px] xl:text-left">接單4步搞掂Booking</h4>
                <p class="text-[18px] font-normal tracking-[.9px]">預約唔使急但最緊要快！XITA任何Booking都係四下之內搞掂, 自然商戶可以「爆Book一周」！</p>
                <ol class="text-[18px] font-normal tracking-[.9px]">
                    <li>由揀服務提供商戶、</li>
                    <li>服務內容或分店、日子</li>
                    <li>同確認都係快速搞掂仲要具備詳細内容參考</li>
                    <li>等客人自己即時比對</li>
                </ol>
            </div>
        </div>
        <!-- 3 -->
        <div class="xl:flex xl:flex-wrap xl:items-center xl:justify-between">
            <div class="img-box xl:w-1/2 xl:mr-[57px]  mb-[25px] xl:mb-0">
                <img src="../../assets/img/function/feature3.png" alt="" class="w-full">
            </div>
            <div class="txt-box xl:w-1 xl:grow">
                <h4 class="text-primary-01 text-center text-[30px] font-semibold tracking-[1.5px] mb-[25px] xl:mb-[48px] xl:text-left">用戶為先管理介面</h4>
                <p class="text-[18px] font-normal tracking-[.9px]">XITA介面以簡潔為主，商戶隨時為網店加減內容，不論商戶及客人都可以快速了解業務詳情。與此同時，系統將由AI計算後，提供簡單銷售或客人報告，商戶對生意自然一目了然，有助日後進行營銷策略。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Function',
}
</script>
<style scoped lang="postcss">
 ul {
  @apply list-disc pl-5;
 }
 ol{
    @apply pl-5 list-decimal;
 }
 @keyframes float {
    0% {
        transform: translatey(0px);
    }

    50% {
        transform: translatey(-20px);
    }

    100% {
        transform: translatey(0px);
    }
}

.icon-box {
    transform: translatey(0px);
    animation: float 4s ease-in-out infinite;
}

</style>