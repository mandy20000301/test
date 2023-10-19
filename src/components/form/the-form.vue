<template>
    <div class="form-box py-[30px] xl:py-[72px]">
        <div class="container xl:flex xl:justify-between xl:items-start">
            <div class="xl:w-[30%]">
                <h3 class="text-primary-04 text-[64px] font-semibold tracking-[3.2px] mb-[25px]">$0成本</h3>
                <h3 class="text-primary-04 text-[36px] font-semibold tracking-[3.6px] mb-[25px]">開設獨有園地</h3>
                <p class="text-white text-[18px] tracking-[.9px] mb-[25px]">XITA基本服務為$0，只按你嘅生意及預約數量收費，避免一開始收取大額月費年費，真真正正與創業家同行，零成本展開自由生活態度，共同迎接事業高峰！</p>
            </div>
           <!-- form -->
            <div class="xl:w-1/2">
                <div class="mb-[25px]">
                    <p class="text-white text-[14px] font-semibold tracking-[.7px]">名字</p>
                    <input class="w-full rounded-[10px] bg-white px-2 py-3 outline-none"/>
                </div>
                <div class="mb-[25px]">
                    <p class="text-white text-[14px] font-semibold tracking-[.7px]">電話</p>
                    <input class="w-full rounded-[10px] bg-white px-2 py-3 outline-none"/>
                </div>
                <div class="mb-[25px]">
                    <p class="text-white text-[14px] font-semibold tracking-[.7px]">電郵</p>
                    <input class="w-full rounded-[10px] bg-white px-2 py-3 outline-none"/>
                </div>
                <button class="btn-yellow w-full">聯絡我們</button>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Form',
}
</script>
<style scoped lang="postcss">
.form-box{
    background-image: linear-gradient(115deg, #5B61F4 60%, #5257DC 60%);
    @media screen and (min-width:1200px) {
        background-image: linear-gradient(115deg, #5B61F4 43%, #5257DC 43%);
    }
}
</style>