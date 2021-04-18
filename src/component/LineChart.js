import * as echarts from "echarts"
import React from "react";

let myChart
class LineChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{display:'inline-block'}}>
                {/*{props.listData.idKey}*/}
                <div id={this.props.listData.idKey} style={{width:'300px',height:'300px'}}></div>
            </div>
        );
    }
    componentDidMount() {
        myChart = echarts.getInstanceByDom(document.getElementById(`${this.props.listData.idKey}`))
        if (myChart == null) {
            // 如果不存在，就进行初始化
            myChart = echarts.init(document.getElementById(`${this.props.listData.idKey}`));
        }
        myChart.setOption(this.props.listData.option)
        myChart.on('click', function (params) {
            console.log(myChart.id)
        });
        console.log(myChart.id)
    }
}
//
// function LineChart(props){
//     let myChart
//     myChart = echarts.getInstanceByDom(document.getElementById(`${props.listData.idKey}`))
//     if (myChart == null) {
//         // 如果不存在，就进行初始化
//         myChart = echarts.init(document.getElementById(`${props.listData.idKey}`));
//     }
//     myChart.setOption(props.listData.option)
//     myChart.on('click', function (params) {
//         console.log(params);
//     });
//     console.log(myChart.id)
//     return (
//         <div>
//             {/*{props.listData.idKey}*/}
//             <div id={props.listData.idKey} style={{width:'300px',height:'300px'}}></div>
//         </div>
//     );
//
// }

export default LineChart;
