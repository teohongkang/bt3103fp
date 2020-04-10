import { Bar } from 'vue-chartjs'
import database from './firebase.js'

export default {
    extends: Bar,
    data: function () {
        return {
            datacollection: {
                labels: ["All Regions", "North", "South", "East", "West"],
                datasets: [{
                    label: "Users by regions",
                    data: [],
                    backgroundColor:'#AA6'
                }]
            },
            options: {
                legend: { display: false },
                title: {
                display: true,
                text: 'Groups by region'
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
                //this.datacollection.labels.push(doc.data().country)
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
