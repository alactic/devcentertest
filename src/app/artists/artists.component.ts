import {Component, OnInit} from '@angular/core';
import {ArtistsService} from '../app-services/services/artists.service';

declare const $;

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public id = 0;
  public artistId = 0;
  public loader = false;
  public loadsong = false;
  public loadRelated = false;
  public relatedcontent = [];
  public songcontent: any;
  public content: any;

  constructor(private artistservice: ArtistsService) {
  }

  ngOnInit() {
  }

  getArtist(id) {
    this.loader = true;
    this.relatedcontent = [];
    this.content = {};
    this.artistservice.getArtist(id)
      .subscribe(response => {
        this.loader = false;
        this.content = response;
        this.getRelated(response['id']);
      }, error => {
        this.loader = false;
      });
  }

  getId(event) {
    this.id = event.target.value;
  }

  search() {
    if (this.id === 0) {
      alert('Please select a valid Id');
    }
    this.getArtist(this.id);
  }

  getRelated(id) {
    const param = id + '/related?limit=10';
    this.loadRelated = true;
    this.artistservice.getArtist(param)
      .subscribe(response => {
        this.loadRelated = false;
        this.relatedcontent = response['data'];
        console.log('response related :: ', response);
      }, error => {
        this.loadRelated = false;
        console.log('error :: ', error);
      });
  }

  getArtistSongs(id) {
    this.loadsong = true;
    this.artistId = id;
    const param = id + '/top?limit=10';
    this.artistservice.getArtist(param)
      .subscribe(response => {
        this.loadsong = false;
        this.songcontent = response['data'];
        $('#openSong').modal('show');
      }, error => {
        this.loadsong = false;
        console.log('error :: ', error);
      });
  }
}
