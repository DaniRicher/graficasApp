import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Other'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ /*350, 450, 100, 150*/] ,
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe(data=>{

    //   this.doughnutChartData={
    //     labels:Object.keys(data),
    //     datasets:[{data:Object.values(data),
    //       backgroundColor: ['#6405F0','#0724E3', '#05A0F0','#00F5D8','#FC543F']
    //     }]
    //   }
    // })
    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe(({labels, datasets})=>{
      this.doughnutChartData={labels, datasets};
    })
  }

}
