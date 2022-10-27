import { Component, OnInit } from '@angular/core';

import { YugihoService } from 'src/app/services/yugiho.service';
import { detailCards,detailCard } from 'src/app/models/yugiho.model'

@Component({
  selector: 'app-yugiho',
  templateUrl: './yugiho.component.html',
  styleUrls: ['./yugiho.component.scss']
})
export class YugihoComponent implements OnInit {

  cardNameInput : string = "Kuriboh"
  cardName : string = ""
  cards! : detailCards
  activeCard! : detailCard
  language : string = "en"

  constructor(private service: YugihoService) { }

  ngOnInit(): void {
    this.getCard(this.cardNameInput, this.language)
  }

  getCard(cardName : string, language : string){
    this.service
      .getCardByName(cardName,language)
      .subscribe(
        {
          next : (response: any) =>
          {
            this.cards = response;
            this.activeCard = this.cards.data[0]
            this.cardName = cardName
          },
          error : () => console.log
        }
      );
  }

  changeLanguage(language:string){
    console.log(this.cardName, language)
    if (language != this.language){
      this.language = language
      this.getCard(this.cardName, language)
    }
  }
}
