import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('numberOfStars') private numberOfStars: number;
  @Input('rating') private rating: number;
  @Output() private ratingUpdated = new EventEmitter();

  stars = [];
  starColor = 'buttonSuccess';
  
  constructor() {}

  ngOnInit() {
    this.starsArray();
  }

  onClick(rating: number) {
    console.log('You rated ' + (rating + 1) + ' out of ' + this.numberOfStars);
    this.ratingUpdated.emit(rating);
    return false;
  }

  starsArray() {
    for (let i = 0; i < this.numberOfStars; i++) {
      this.stars.push(i);
    }
  }

  showStar(index: number) {
    // console.log('Index: ', index);
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
