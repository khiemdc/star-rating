import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'star-rating';

  numberOfStars = 5;
  rating = 3;

  ngOnInit() {
  }

  onRatingChanged(rating) {
    this.rating = rating + 1;
    console.log('thisRating: ', this.rating);
  }

}

