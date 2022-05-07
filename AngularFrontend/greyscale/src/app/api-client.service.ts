import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  getGreyscale(video) {
    console.log(video)
    const formData = new FormData(); 
    formData.append("file", video, video.name);  
    return this.http.post("http://localhost:4433/getGreyscale", formData, {responseType: "blob"}).toPromise();
  }

}
