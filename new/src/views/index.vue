<template>
    <div>
        <div class="echartsTest">
        
        </div>
        <div class="timeTest" v-if="!showTime">
            <time-Test></time-Test>
        </div>
    </div>
</template>

<script>
import timeTest from './home/timeTest.vue'
export default {
    data(){
        return{
            shwoTime: true
        }
    },
    components: {
        timeTest
    }

}
</script>

<style scoped>

</style>