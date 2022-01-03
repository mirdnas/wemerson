import { Component, OnInit } from '@angular/core';
import veiculotipos from '../../database/veiculotipos.json';
import marcas from '../../database/marcas.json';
import modelos from '../../database/modelos.json';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent implements OnInit {

  statusMegaMenu: boolean = false;
  statusMegaMenuChild: boolean = false;

  tipoVeiculos : Array<any> =  veiculotipos.RECORDS;
  marcas : Array<any> =  marcas.RECORDS;
  modelos : Array<any> =  modelos.RECORDS;

  constructor() { }

  ngOnInit(): void {
    // console.log( `fulano`, this.modelosMarcas(1) )
  }

  showHideMegaMenu(child:boolean=false){
    // if(!child){
    //   this.statusMegaMenu = !this.statusMegaMenu;
    // }else{
    //   this.statusMegaMenuChild = !this.statusMegaMenuChild;
    // }
  }

  modelosMarcas(marcaId: number){
    return this.modelos.filter( modelo => modelo.marcaId == marcaId );
  }

}
