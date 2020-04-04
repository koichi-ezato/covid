import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PageTitleService} from '../service/page-title.service';
import {JapanService} from '../service/japan.service';
import {DateAdapter, NativeDateAdapter} from '@angular/material/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.css']
})
export class JapanComponent implements OnInit {
  data = [
    {name: '感染者数', series: []},
    {name: '死亡者数', series: []},
    {name: '回復者数', series: []}
  ];
  japanService: JapanService | null;


  view: any[] = [1400, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '日付';
  showYAxisLabel = true;
  yAxisLabel = '人数';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(
    private pageTitleService: PageTitleService,
    private dateAdapter: DateAdapter<NativeDateAdapter>,
    public http: HttpClient,
  ) {
    this.pageTitleService.onNotifyPageTitleChanged('日本');
    dateAdapter.setLocale('ja');
  }

  ngOnInit(): void {
    this.japanService = new JapanService(this.http);
    this.japanService.getList()
      .then(response => {
        Object.keys(response).forEach(key => {
          const d = key.split('/');
          this.data[0].series.push({value: response[key].confirmed,
            name: Moment('20' + d[2] + '/' + d[0] + '/' + d[1]).format('YYYY年MM月DD日')});
          this.data[1].series.push({value: response[key].deaths,
            name: Moment('20' + d[2] + '/' + d[0] + '/' + d[1]).format('YYYY年MM月DD日')});
          this.data[2].series.push({value: response[key].recovered,
            name: Moment('20' + d[2] + '/' + d[0] + '/' + d[1]).format('YYYY年MM月DD日')});
        });
        this.data = [...this.data];
      })
      .catch(err => {
        console.log(err);
      });
  }
}
