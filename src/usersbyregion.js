import { Bar } from 'vue-chartjs'
import database from './firebase.js'

export default {
    extends: Bar,
    data: function () {
        return {
            datacollection: {
                labels: ["All Regions", "Central", "East", "North", "South", "West"],
                datasets: [{
                    label: "Users by regions",
                    data: [],
                    backgroundColor:'#16A085'
                }]
            },
            options: {
                legend: { display: false },
                title: {
                display: true,
                text: 'Groups by Region'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods: {
        fetchItems: function () {
            database.collection('region').get().then(querySnapShot => {
                querySnapShot.forEach(doc => { 
                    this.datacollection.datasets[0].data.push(doc.data().count)
                })
            this.renderChart(this.datacollection, this.options)
            })
        }
        },
        created () {
        this.fetchItems()
    }
}
