import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var echarts;

@Directive({
  selector: 'echart'
})
export class EChartOptionDirective implements OnChanges {
  @Input('chartType') chartType: any;
  @Input('chartSet') chartSet: number;

  public elment: any;

  constructor(private el: ElementRef) {}

  public ngOnChanges(changes: SimpleChanges) {
   this.elment = echarts.init(this.el.nativeElement);
   this.elment.setOption(this.chartType);
  }
}
