<template>
    <div class="container mx-auto">
        <div class="my-10">
            <p class="text-5xl text-center">Works</p>
        </div>
        <div class="flex mb-4">
            <div class="w-1/3" v-for="i in 3" :key="i">
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
