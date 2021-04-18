import LineChart from './component/LineChart'
function App() {
  return (
    <div className="App">
      {
        data.lineChartState.map((item,index)=>{
          return <LineChart listData={item} key={index} />
        })
      }

    </div>
  );
}
const data = {
  lineChartState:[
    {
      "name": "linechart1",
      "clickState":false,
      "display": false,
      'idKey':0,
      "x": 270,
      "y": 160,
      "w": 300,
      "h": 300,
      "minWidth":300,
      "minHeight":300,
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }
    },
    {
      "name": "linechart2",
      "clickState":false,
      "display": false,
      'idKey':1,
      "x": 270,
      "y": 160,
      "w": 300,
      "h": 300,
      "minWidth":300,
      "minHeight":300,
      menuSetting:{
        // 'xSetting':
      },
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }
    },
    {
      "name": "linechart3",
      "clickState":false,
      "display": false,
      'idKey':2,
      "x": 270,
      "y": 160,
      "w": 300,
      "h": 300,
      "minWidth":300,
      "minHeight":300,
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      }
    }
  ]
}
export default App;
