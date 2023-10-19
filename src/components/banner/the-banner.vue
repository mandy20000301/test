<template>
    <div class="container xl:flex xl:flex-wrap xl:items-center xl:justify-between">
        <!-- img -->
        <div class="relative pb-[60px] xl:w-[60%]  xl:mr-[105px]">
            <img src="../../assets/img/banner/banner.png" alt="" class="w-full">
            <div class="icon-box absolute right-[15%] top-[20%] w-[10%]">
                <img src="../../assets/img/banner/icon1.png" alt="" class="w-full">
            </div>
            <div class="icon-box absolute left-[15%] bottom-[33%] w-[13%]">
                <img src="../../assets/img/banner/icon2.png" alt="" class="w-full">
            </div>
            <div class="icon-box absolute right-[32%] bottom-[0%] w-[13%]">
                <img src="../../assets/img/banner/icon3.png" alt="" class="w-full">
            </div>
        </div>
        <!-- txt -->
        <div class="xl:grow xl:w-1">
            <h2 class=" text-primary-01 text-center text-[48px] font-semibold  tracking-[2.4px] mb-[25px] xl:text-left xl:mb-[14px]">自動預約系統<br>管理不再費時!</h2>
            <p class="text-primary-03 mb-[25px] xl:mb-[40px]">XITA係以用戶體驗為先嘅開網店平台，3小時開店、1站式管理預約、4個步驟即刻完成客人預約，最緊要係費用由$0起！可以０成本設立個人網店，做到真正生活態度；想知XITA點用，立即搶試免費體驗！</p>
            <button class="btn-xl mx-auto xl:mx-0">立即體驗</button>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
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