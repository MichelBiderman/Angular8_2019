import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dive-detail',
  templateUrl: './dive-detail.component.html',
  styleUrls: ['./dive-detail.component.scss']
})
export class DiveDetailComponent implements OnInit {
// States
  titre:string;
  nom:string;
  photo:string;
  photoB:string;
  isBig:boolean;
  description:string;
  constructor(private _routeActive:ActivatedRoute,
              private _routeur:Router) { }

  ngOnInit() {
    this.titre =`Plongée N° : ${this._routeActive.snapshot.params['id']}`;
    // paramètres ici :

    this._routeActive.queryParams.subscribe(
      params => {
        this.photo=params['divePhoto']
        this.photoB=params['divePhotoB']
        this.nom=params['diveNom']
        this.description=params['diveDescription']
      }
    )//fin du subscribe
    if(this.photoB === ''){
      this.isBig = true;
    }else{this.isBig = false;}
    
  }
//------------------ méthodes ici ---------------------
  goBack() {
    this._routeur.navigateByUrl('/liste-des-plongees');
  }
}
