import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
// States
  nom:string;
  email:string;
  formContact:[];

  constructor() { }  // Constructeur 

  ngOnInit() { }     // Au démarrage (Initilisation)
// Méthodes
  showForm(form){
    console.log(form);
    // return this.formContact;
  }
}
