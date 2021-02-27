import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get(this.baseUrl+"videos");
  }

  addVideo(body){
    return this.http.post(this.baseUrl+"video",body);
  }

  deleteVideo(id){
    return this.http.delete(this.baseUrl+"deleteVideo?_id="+id);
  }


}
