import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../service/page-title.service';
import {DateAdapter, NativeDateAdapter} from '@angular/material/core';
import {HttpClient} from '@angular/common/http';
import {WorldBriefService} from '../service/world-brief.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  data = [
    {name: '感染者数', value: null},
    {name: '死亡者数', value: null},
    {name: '回復者数', value: null},
  ];
  worldBriefService: WorldBriefService | null;

  view: any[] = [1400, 200];

  colorScheme = {
    domain: ['#C7B42C', '#A10A28', '#5AA454']
  };

  constructor(
    private pageTitleService: PageTitleService,
    private dateAdapter: DateAdapter<NativeDateAdapter>,
    public http: HttpClient,
  ) {
    this.pageTitleService.onNotifyPageTitleChanged('世界');
    dateAdapter.setLocale('ja');
  }

  ngOnInit(): void {
    this.worldBriefService = new WorldBriefService(this.http);
    this.worldBriefService.getList()
      .then(response => {
        this.data[0].value = response.confirmed;
        this.data[1].value = response.deaths;
        this.data[2].value = response.recovered;
        this.data = [...this.data];
      })
      .catch(err => {
        console.log(err);
      });
  }
}
