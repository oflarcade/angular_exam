import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { Announce } from './announce';
@Injectable({
  providedIn: 'root'
})
export class AnnounceServiceService {
  constructor(private http: HttpClient) {
    this.getAllAnnounces().subscribe(data => {
      console.log(data);
    });
  }


  public getAllAnnounces(): Observable<Announce[]> {
    return this.http.get("../assets/annonces.json");
  }
}
