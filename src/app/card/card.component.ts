import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() lista: any;
  @Output() cardClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.image = this.image === undefined ? 'def image' : (`https://image.tmdb.org/t/p/w500` + this.image);
    this.title = this.title === undefined ? 'def title' : this.title;
  }
  onDetail() {
    this.cardClicked.emit('kliknuo je na njega');
  }
}
