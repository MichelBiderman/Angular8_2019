import { Component, OnInit } from '@angular/core';
import { DivesService } from '../dives.service';

@Component({
  selector: 'app-dive-list',
  templateUrl: './dive-list.component.html',
  styleUrls: ['./dive-list.component.css']
})
export class DiveListComponent implements OnInit {
// States du composant:
 stateTitre:string="Liste des plongées";
 stateDiveComp:any;

// Injection directe de service (signature)
  constructor(private _service:DivesService) { }

// Etape importante du composant ==> chargement 
//LIFECYCLE du component
  ngOnInit() {
      this.stateDiveComp = this._service.getDives();
      console.log("TabDive : ",this.stateDiveComp);
  }
// fin du subscribe
}
