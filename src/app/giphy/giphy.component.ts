import {Component, OnInit} from '@angular/core';
import giphyApi from 'giphy-api';

declare const $;

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {
  private giphy = giphyApi();
  public gifImages = [];
  public inputtedText = {};
  public openGif = false;
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

  onInput(event) {
    this.inputtedText = event.target.value;
  }

  onselectgif(gif) {
    const loader_img = '<div style="display: block; margin: 5px"><img src="' + gif + '" alt="Loading" style="width:60px; height: 60px;" /></div>';
    $('#myPix').append(loader_img);
  }

  send() {
    $('#myPix').append(this.inputtedText);
    $('#myPix').val('');
  }

  addGif() {
    this.openGif = true;
    $('#giflist').animate({display: 'block'}, 300).hide().slideDown(400).stop();
  }

  closeGif(){
    this.openGif = false;
    $('#giflist').animate({display: 'none'}, 300).slideUp(400).stop();
  }
}
