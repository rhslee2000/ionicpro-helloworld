import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ENV } from '../../../environments/environment';

@Injectable()
export class VibeService {

	private _baseUrl: string;

  constructor(private http: HttpClient) { 
	  this._baseUrl = ENV.API_URL +  '/vibe';
  }

  postVibe(vibe): Observable<any> {
	  return this.http.post(this._baseUrl, vibe);
  }
}
