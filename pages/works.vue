<template>
    <div class="container mx-auto">
        <div class="my-10">
            <p class="text-5xl text-center">Works</p>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="lg:w-1/3 md:w-1/2 mx-6 md:px-3 lg:mx-0" v-for="i in 6" :key="i">
                <Card/>
            </div>
        </div>
    </div>
</template>

<script>
const Card = () => import('~/components/Card');
export default {
    components:{
        Card
    }

}
</script>

<style>

</style>
