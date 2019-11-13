import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnounceServiceService } from '../announce-service.service';
import { Announce } from '../announce';
@Component({
  selector: 'app-announces-component',
  templateUrl: './announces-component.component.html',
  styleUrls: ['./announces-component.component.css']
})
export class AnnouncesComponentComponent implements OnInit {

  list: Announce[];
  constructor(private announceService: AnnounceServiceService ) { }

  ngOnInit() {
    this.announceService.getAllAnnounces()
    .subscribe((data: Announce[]) => {
      this.list = data;
    }) 
  }
}
