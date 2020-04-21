import { Bar } from 'vue-chartjs'
import database from './firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ['All Venues', 'Cafe', 'Library', 'Zoom'],
            datasets: [{
                label: "Groups by Venue",
                data: [],
                backgroundColor:'#JS2'
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Groups by Venue'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('venue').get().then(querySnapShot => {
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