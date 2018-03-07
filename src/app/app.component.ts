import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  hasRanderChart: boolean;
  radar: any;
  lineChart: any;
  data:any;
  lastData:any;
  private timer:any;

  constructor(private appService: AppService) {
    this.hasRanderChart = false;
    this.radar = null;
    this.lineChart = null;
    this.data = {};
    this.lastData = {};
  }

  // 每一秒更新时间差
  ngAfterViewInit() {
    this.timer = setInterval(() => {
      console.log('haha');
      this.getData();
    }, 1000);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appService.getData(60800001).subscribe((res:any) => {
      // 数据没有变化，就不刷新页面
      if(this.lastData !== {} && this.lastData === this.data){
        return;
      }
      this.data = res;
      this.lastData = res;

      let tempArr = [];
      let voltageArr = [];
      this.data.sampling_data && this.data.sampling_data.forEach(item => {
           tempArr.push(item.temp);
           voltageArr.push(item.voltage * 1000);
      });

      // 雷达图
      this.hasRanderChart = true;
      this.radar = {
        radar: {
          name: {
            textStyle: {
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          splitArea: {
            show: false
          },

          indicator: [
            {
              name: '电压稳定性',
              max: 6000,
              color: '#45EBCA'
            }, {
              name: '电压  \n有效性',
              max: 16000,
              color: '#45EBCA'
            }, {
              name: '温度   \n整体偏差',
              max: 30000,
              color: '#CB21D2'
            }, {
              name: '温度稳定性',
              max: 38000,
              color: '#CB21D2'
            }, {
              name: '  温度\n有效性',
              max: 42000,
              color: '#CB21D2'
            }, {
              name: '   电压\n整体偏差',
              max: 25000,
              color: '#45EBCA'
            }
          ]
        },
        series: [
          {
            type: 'radar',
            lineStyle: {
              width: 0
            },
            symbolSize: 0,
            label: {},
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#45EBCA' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#CB21D2' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            data: [
              {
                value: [
                  5000,
                  14000,
                  28000,
                  31000,
                  42000,
                  21000
                ]
              }
            ]
          }
        ]
      };

      this.lineChart = {
        legend: {
          data:[
            {name:'温度', icon:'rect', textStyle:{
              color:'#CB21D2'
            }},
            {name:'电压', icon:'rect', textStyle:{
              color:'#45EBCA'
            }},
          ],
          bottom:0,
          right:60,
        },

        xAxis : [
          {
            type : 'category',
            boundaryGap:['20%','20%'],
            data:[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
              38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
              51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
              64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
              90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
            ],
            splitNumber:5,
            interval:20,
            axisLine:{
              onZero: false,
              lineStyle:{
                color:'#fff',
                width:4
              }
            },
            axisTick:{
              alignWithLabel:true,
              length:8,
              lineStyle:{
                color:'#fff',
                width:3
              }
            }
          }
        ],
        yAxis: [
          {
            name: '(℃)',
            type: 'value',
            max:1000,
            splitLine:{
              show:false
            },
            //nameLocation:'start',
            scale:true,
            axisLine:{
              onZero: false,
              lineStyle:{
                color:'#fff',
                width:4
              }
            },
            axisTick:{
              alignWithLabel:true,
              length:8,
              lineStyle:{
                color:'#fff',
                width:3
              }
            }

          },
          {
            name: '(kV)',
            type: 'value',
            max:500,
            //nameLocation:'start',
            scale:true,
            splitLine:{
              show:false
            },
            axisLine:{
              onZero: false,
              lineStyle:{
                color:'#fff',
                width:4
              }
            },
            axisTick:{
              alignWithLabel:true,
              length:8,
              lineStyle:{
                color:'#fff',
                width:3
              }
            }

          }
        ],
        series: [
          {
            name:'温度',
            type:'line',
            symbolSize:0,
            animation: false,
            areaStyle: {
              opacity:0.3,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#CB21D2' // 0% 处的颜色
                }, {
                  offset: 1, color: '#041323' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            },
            itemStyle:{
              color:'#CB21D2'
            },
            lineStyle: {
              color:'#CB21D2',
              width:3
            },
            data: tempArr
          },
          {
            name:'电压',
            type:'line',
            yAxisIndex:1,
            symbolSize:0,
            animation: false,
            areaStyle: {
              opacity:0.3,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#45EBCA' // 0% 处的颜色
                }, {
                  offset: 1, color: '#041323' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            },
            itemStyle:{
              color:'#45EBCA'
            },
            lineStyle: {
              color:'#45EBCA',
              width:3
            },
            data: voltageArr
          }
        ]
      };
    });
  }
}
