import {Injectable} from "@angular/core";
import {ApiHandlerService} from "../../../services/api-handler.service";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  public artist_url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/'

  constructor(private apiservice: ApiHandlerService) {
  }

  getArtist(id) {
    return this.apiservice.get(this.artist_url + id);
  }
}
