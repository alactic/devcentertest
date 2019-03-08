import {Component, OnInit} from '@angular/core';
import giphyApi from 'giphy-api';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {
  private giphy = giphyApi();
  public gifImages = [];

  constructor() {
  }

  ngOnInit() {
    this.getSearch();
  }

  getSearch() {
    const gifImage = [];
    this.giphy.search('rainbow', function (err, res) {
      res.data.forEach(value => {
        gifImage.push(value['images']['original']['url']);
      })
    });
    this.gifImages = gifImage;
  }
}
