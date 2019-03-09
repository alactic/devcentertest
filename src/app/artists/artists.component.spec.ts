import {ArtistsComponent} from "./artists.component";
import {ArtistsService} from "../app-services/services/artists.service";
import {ApiHandlerService} from "../../services/api-handler.service";
import {HttpClient} from "@angular/common/http";


describe('ArtistsComponent', () => {
  let http: HttpClient;
  let component: ArtistsComponent;
  let artistService: ArtistsService;
  let apiService: ApiHandlerService;

  beforeEach(() => {
      apiService = new ApiHandlerService(http);
      artistService = new ArtistsService(apiService);
      component = new ArtistsComponent(artistService);
    }
  )


  it('should retrieve the artist details', () => {
    spyOn(component, 'getArtist').and.returnValue({
      'id': 1,
      name: 'falz',
      link: 'https://www.deezer.com/artist/5570880'
    })
    expect(component.getArtist(12)['name']).toMatch(/falz/);
  });


  it('should retrieve the related artist list', () => {
    spyOn(component, 'getArtist').and.returnValue([
      {'id': 1, name: 'simi1', link: 'https://www.deezer.com/artist/5570880'},
      {'id': 2, name: 'simi2', link: 'https://www.deezer.com/artist/5570880'},
      {'id': 3, name: 'simi3', link: 'https://www.deezer.com/artist/5570880'}
    ])
    expect(component.getArtist(12)).toContain({'id': 3, name: 'simi3', link: 'https://www.deezer.com/artist/5570880'});
  });


  it('should retrieve the related artist top song', () => {
    spyOn(component, 'getArtist').and.returnValue([
      {'id': 1, name: 'simi1', song: 'song1', link: 'https://www.deezer.com/artist/5570880'},
      {'id': 2, name: 'simi2', song: 'song1', link: 'https://www.deezer.com/artist/5570880'},
      {'id': 3, name: 'simi3', song: 'song1', link: 'https://www.deezer.com/artist/5570880'}
    ])
    expect(component.getArtist(12)).toContain({'id': 3, name: 'simi3', song: 'song1', link: 'https://www.deezer.com/artist/5570880'});
  });


  it('should retrieve value as null', () => {
    spyOn(component, 'getArtist').and.returnValue(null)
    expect(component).toBeTruthy();
    expect(component.getArtist(23)).toEqual(null);
  });
});
