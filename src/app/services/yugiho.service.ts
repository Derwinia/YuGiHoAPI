import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YugihoService {

  constructor(
    private client : HttpClient
  ) { }

  getCards(){
    return this.client.get(``)
  }

  getCardByName(name:string, language : string){
    if(language == "en") return this.client.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
    return this.client.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}&language=${language}`)
    //Dark Magician
  }

}
