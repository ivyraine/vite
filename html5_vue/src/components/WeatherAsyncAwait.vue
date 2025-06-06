<template>
    <!-- Wx(天氣現象)、MaxT(最高溫度)、MinT(最低溫度)、CI(舒適度)、PoP(降雨機率) -->
    <div>
        <h1 style="text-decoration: underline;">{{description}}</h1>

        <div v-for="record in CWArecords" class="location-card">
            <h2>{{record.locationName}}</h2>
            <div class="weather-info">
                <p class="weather-item">天氣現象 (Wx): {{record.weatherElement[0].time[0].parameter.parameterName}}</p>
                <p class="weather-item">降雨機率 (PoP): {{record.weatherElement[1].time[0].parameter.parameterName}}%</p>
                <p class="weather-item">
                    氣溫: {{record.weatherElement[2].time[0].parameter.parameterName}}℃ ~
                          {{record.weatherElement[4].time[0].parameter.parameterName}}℃
                </p>
                <p class="weather-item">舒適度 (CI): {{record.weatherElement[3].time[0].parameter.parameterName}}</p>
            </div>
        </div> 
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import $ from "jquery";

const description = ref('')
const CWArecords = ref([])

// 非同步放在生命週期的 onMounted() 階段
onMounted(async () => {  
    const url = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-6A37E9AC-8AEB-4D14-9BAC-A5C370BD9AB7'
    try{

        let res = await fetch(url)
        let jsonData = await res.json()

        description.value = jsonData.records.datasetDescription
        CWArecords.value = jsonData.records.location

    }catch(error){
        console.log(`取得氣象資料時發生錯誤: ${error}`)
    }
})
</script>

<style scoped>
    .location-card{
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    .location-card h2{
        margin-top: 0;
        color: #333;
    }
    .location-card p{
        margin-bottom: 5px;
    }
    .weather-info{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .weather-item{
        background-color: #eee;
        border-radius: 5px;
        padding: 8px;
        font-size: 18px;
    }
</style>