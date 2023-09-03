import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=daad2fbc9d334aeeae11665fb5644445"
   Header():Observable<any>
   {
    return this._http.get(this.newsApiUrl);
   }

}
