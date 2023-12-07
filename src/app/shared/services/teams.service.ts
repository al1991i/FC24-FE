import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  getTeamUrl(name:String) {
    switch(name) {
      case 'RMD':return '/assets/images/realmadrid.png'; 
      case 'FCB':return '/assets/images/barcelona.png'; 
      case 'MAC':return '/assets/images/Manchester_City_FC.png'; 
      case 'MAU':return '/assets/images/manchesterunited.png'; 
      case 'FCBY':return '/assets/images/bayern.png'; 
      case 'PSG':return '/assets/images/psg.png'; 
      case 'LEV':return '/assets/images/leverpool.png'; 
      case 'JUV':return '/assets/images/juventus.png'; 
      case 'INT':return '/assets/images/inter.png'; 
      case 'ACM':return '/assets/images/acmilan.png'; 
      case 'ARS':return '/assets/images/arsenal.png'; 
      case 'CHE':return '/assets/images/chealse.png'; 
      case 'TOT':return '/assets/images/totenham.png'; 
      case 'BOT':return '/assets/images/BOT.png'; 
      default: return '';
    }
  }
}
