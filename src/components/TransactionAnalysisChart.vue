
<template>
    <div class="header">
    <h3>Payment overview</h3>
    <p>See how your business is performing</p>
</div>
    <div class="chart-container">
      <canvas ref="chartRef"></canvas>
    </div>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from 'vue'
  import { Chart, registerables } from 'chart.js'
  import { LineChart } from 'vue-chartjs'
  
  Chart.register(...registerables)
  
  export default defineComponent({
    name: 'Transaction-Analysis-Chart',
    components: { LineChart },
    props: {
      chartData: {
        type: Object,
        required: true
      },
      chartOptions: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      const chartRef = ref(null)
  
      onMounted(() => {
        const chart = new Chart(chartRef.value, {
          type: 'line',
          data: props.chartData,
          options: props.chartOptions
        })
      })
  
      return { chartRef }
    }
  })
  </script>
  
  <style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: 400px;
  }
  </style>
