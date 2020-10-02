import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AnonymousSubject } from 'rxjs/Subject';


@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { }
  getAlbum(id: number): any{
    return this._http.get(this._albumUrl).map(repsonse => repsonse.json())
  }

}
