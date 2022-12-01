import { Injectable } from '@angular/core';
import { Pointdevente } from '../Model/pointdevente';

@Injectable({
  providedIn: 'root'
})
export class PointdeventeService {

  private pointdevente: Pointdevente[]=[
    new Pointdevente ( 'Boutique  la rose', 'magasin1.jpg', '17.rue de tunis.Tunis'),
    new Pointdevente ( 'Boutique les jasmins', '','20.rue des fruits.Sousse'),
    new Pointdevente( 'Boutique élegance', '', '14.rue des journalistes.Sfax'),
    new Pointdevente ( 'Boutique juliette', 'assets4/magasin4.jpg', '70.rue des artisants.Nabeul'),
]

  constructor() { }
  getPointsdevente()
  {
  return  this.pointdevente;
  }

}
