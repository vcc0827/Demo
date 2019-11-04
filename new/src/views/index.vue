<template>
    <div>
        <div class="echartsTest">
        <hex-chart></hex-chart>
        </div>
        <div class="timeTest" v-if="!showTime">
            <!-- <time-Test></time-Test> -->
        </div>
    </div>
</template>

<script>
import timeTest from './home/timeTest.vue'
import hexChart from './home/Hex.vue'
export default {
    data(){
        return{
            showTime: true
        }
    },
    components: {
        // timeTest,
        hexChart
    }

}
</script>

<style scoped>

</style>