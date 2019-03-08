import { Component, OnInit } from '@angular/core';
const giphy = require('giphy-api')();

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {
 public gifImages: any;
  constructor() { }

  ngOnInit() {
    this.getSearch();
  }

  getSearch() {
    giphy.search('rainbow', function (err, res) {
      console.log('result :: ', res.data[0]['images']['original']['url']);
      this.gifImages.push(res.data[0]['images']['original']['url']);
      // Res contains gif data!
      // createImageBitmap(res.data[0]['images']['original']['url']);
    });
  }
}
