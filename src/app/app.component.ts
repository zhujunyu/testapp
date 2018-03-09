import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit, AfterViewInit {
  hasRanderChart: boolean;
  radar: any;
  lineChart: any;
  data: any;
  lastData: any;
  private timer: any;

  constructor(private appService: AppService) {
    this.hasRanderChart = false;
    this.radar = {};
    this.lineChart = {};
    this.data = {};
    this.lastData = {};
  }

  // 每5秒刷新一次页面
  ngAfterViewInit() {
    this.timer = setInterval(() => {
      this.getData();
    }, 5000);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appService.getData(60800001).subscribe((res: any) => {

      // 数据没有变化，就不刷新页面
      if (JSON.stringify(this.lastData) == JSON.stringify(res)) { // 简单快捷地比较对象属性是否相对的方法
        return;
      }

      // 深拷贝
      this.data = JSON.parse(JSON.stringify(res));
      this.lastData = JSON.parse(JSON.stringify(res));;

      const tempArr = [];
      const voltageArr = [];
      this.data.sampling_data && this.data.sampling_data.forEach(item => {
        tempArr.push(item.temp);
        voltageArr.push(item.voltage * 1000);
      });

      if (res.setting_current > res.predict_current) {
        this.data.setting_current_asc = true;
      } else if (res.setting_current < res.predict_current) {
        this.data.setting_current_desc = true;
      }

      if (res.setting_speed > res.predict_speed) {
        this.data.setting_speed_asc = true;
      } else if (res.setting_speed < res.predict_speed) {
        this.data.setting_speed_desc = true;
      }

      if (res.setting_pressure > res.predict_pressure) {
        this.data.setting_pressure_asc = true;
      } else if (res.setting_pressure < res.predict_pressure) {
        this.data.setting_pressure_desc = true;
      }

      if (res.setting_swaging_pressure > res.predict_swaging_pressure) {
        this.data.setting_swaging_pressure_asc = true;
      } else if (res.setting_swaging_pressure < res.predict_swaging_pressure) {
        this.data.setting_swaging_pressure_desc = true;
      }

      if (res.setting_lap_length > res.predict_lap_length) {
        this.data.setting_lap_length_asc = true;
      } else if (res.setting_lap_length < res.predict_lap_length) {
        this.data.setting_lap_length_desc = true;
      }

      if (res.setting_lap_compe > res.predict_lap_compe) {
        this.data.setting_lap_compe_asc = true;
      } else if (res.setting_lap_compe < res.predict_lap_compe) {
        this.data.setting_lap_compe_desc = true;
      }

      // 温度的最大值和最小值 tempArr
      let temp_max = Math.ceil(Math.max.apply(null, tempArr)/100)*100;
      let temp_min = Math.floor(Math.min.apply(null, tempArr)/100)*100;
      // 电压的最大值和最小值 voltageArr
      let voltage_max = Math.ceil(Math.max.apply(null, voltageArr)/100)*100;
      let voltage_min = Math.floor(Math.min.apply(null, voltageArr)/100)*100;

      if(this.data.current_machine_score === undefined || this.data.current_machine_score == ''){
        this.data.current_machine_score = '-';
      }
      // 雷达图
      this.hasRanderChart = true;
      this.radar = {
        tooltip : {
          formatter: "{b} : {c}"
        },

        series: [
          {
            name: '业务指标',
            type: 'gauge',
            data: [{value: this.data.seam_score, name: '焊接质量评分'}],
            axisTick:{
              show: false,
              lineStyle:{
                color: 'rgba(128, 128, 128, 0.5)'
              }
            },
            axisLine:{
              lineStyle:{
                color: [[this.data.seam_score_hard_spec/100, '#DE503A'], [this.data.seam_score_soft_spec/100, '#F8E71C'], [1, '#94C92B']],
                width: 20
              }
            },
            splitLine:{
              length: 20,
              lineStyle:{
                color:'rgba（0,0,0,0）'
              }
            },
            itemStyle: {
              opacity: 0.8
            },
            title: {
              color: '#ffffff',
              fontSize:18
            },
            detail: {
              fontSize: 100
            }
          }
        ]
      };
      // this.radar = {
      //   radar: {
      //     name: {
      //       textStyle: {
      //         borderRadius: 3,
      //         padding: [3, 5]
      //       }
      //     },
      //     splitArea: {
      //       show: false
      //     },
      //
      //     indicator: [
      //       {
      //         name: '电压稳定性',
      //         max: 5,
      //         color: '#45EBCA'
      //       }, {
      //         name: '电压  \n有效性',
      //         max: 5,
      //         color: '#45EBCA'
      //       }, {
      //         name: '温度   \n整体偏差',
      //         max: 5,
      //         color: '#CB21D2'
      //       }, {
      //         name: '温度稳定性',
      //         max: 5,
      //         color: '#CB21D2'
      //       }, {
      //         name: '  温度\n有效性',
      //         max: 5,
      //         color: '#CB21D2'
      //       }, {
      //         name: '   电压\n整体偏差',
      //         max: 5,
      //         color: '#45EBCA'
      //       }
      //     ]
      //   },
      //   series: [
      //     {
      //       type: 'radar',
      //       lineStyle: {
      //         width: 0
      //       },
      //       symbolSize: 0,
      //       label: {},
      //       areaStyle: {
      //         color: {
      //           type: 'linear',
      //           x: 0,
      //           y: 0,
      //           x2: 0,
      //           y2: 1,
      //           colorStops: [
      //             {
      //               offset: 0,
      //               color: '#45EBCA' // 0% 处的颜色
      //             }, {
      //               offset: 1,
      //               color: '#CB21D2' // 100% 处的颜色
      //             }
      //           ],
      //           globalCoord: false // 缺省为 false
      //         }
      //       },
      //       data: [
      //         {
      //           value: [
      //             this.data.v_rationality_level,
      //             this.data.v_length_level,
      //             this.data.t_volatility_level,
      //             this.data.t_rationality_level,
      //             this.data.t_length_level,
      //             this.data.v_volatility_level
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // };

      this.lineChart = {
        legend: {
          data: [
            {
              name: '温度', icon: 'rect', textStyle: {
              color: '#CB21D2'
            }
            },
            {
              name: '电压', icon: 'rect', textStyle: {
              color: '#45EBCA'
            }
            },
          ],
          bottom: 0,
          right: 60,
        },

        xAxis: [
          {
            type: 'category',
            boundaryGap: ['20%', '20%'],
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
              38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
              51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
              64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
              77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
              90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
            ],
            splitNumber: 5,
            interval: 20,
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#fff',
                width: 1
              }
            },
            axisTick: {
              alignWithLabel: true,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 1
              }
            }
          }
        ],
        yAxis: [
          {
            name: '(℃)',
            type: 'value',
            max: temp_max,
            min: temp_min,
            splitLine: {
              show: false
            },
            //nameLocation:'start',
            scale: true,
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#fff',
                width: 1
              }
            },
            axisTick: {
              alignWithLabel: true,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 1
              }
            }

          },
          {
            name: '(V)',
            type: 'value',
            max: voltage_max,
            min: voltage_min,
            //nameLocation:'start',
            scale: true,
            splitLine: {
              show: false
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#fff',
                width: 1
              }
            },
            axisTick: {
              alignWithLabel: true,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 1
              }
            }

          }
        ],
        series: [
          {
            name: '温度',
            type: 'line',
            symbolSize: 0,
            animation: false,
            areaStyle: {
              opacity: 0.3,
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
            itemStyle: {
              color: '#CB21D2'
            },
            lineStyle: {
              color: '#CB21D2',
              width: 3
            },
            data: tempArr
          },
          {
            name: '电压',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 0,
            animation: false,
            areaStyle: {
              opacity: 0.3,
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
            itemStyle: {
              color: '#45EBCA'
            },
            lineStyle: {
              color: '#45EBCA',
              width: 3
            },
            data: voltageArr
          }
        ]
      };
    });
  }

}
