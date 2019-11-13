import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
  isPath: boolean;
  url: '/estimate';
  position: string;
  nbr: number;
  count: number = 0;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.url === this.router.url ? this.isPath = true : this.isPath = false;
  }
  estimer() {
    if (this.position == 'haut') {
      if (this.nbr <= 30) {
        this.count = 10;
      }
      else {
        this.count = 20;
      }
    }
    if (this.position == 'bas') {
      if (this.nbr <= 30) {
        this.count = 5;
      }
      else {
        this.count = 15;
      }
    }
  }
}
