<template>
    <div class="bg-white rounded-[16px] p-[30px] xl:p-[40px] w-[335px] xl:w-auto relative flex flex-col justify-around">
        <p class="text-primary-03 mb-10 text-[16px] tracking-[.8px]">{{ info?.content }}</p>
        <div>
            <p class="text-primary-03 text-[18px] tracking-[.9px]">{{ info?.name }}</p>
            <p class="text-primary-03 text-[13px] tracking-[.65px]">{{ info?.job }}</p>
        </div>
        <div class="bg-[#D9D9D9] w-12 h-12 rounded-full absolute bottom-[30px] right-[30px] xl:hidden"></div>
    </div>
</template>
<script>
export default {
    name: 'Concept-card',
    props: {
        info: {
            type: Object,
            default: () => { },
        },
    },
}
</script>