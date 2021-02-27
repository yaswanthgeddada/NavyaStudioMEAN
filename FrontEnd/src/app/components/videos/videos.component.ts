import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  videos: any = [];
  videoId: string;
  spinner: boolean = false;
  file: any;
  path: string;
  downloadURL: any;
  check: number;
  videoTitle:string;

  constructor(
    private videoService: VideoService,
    private af: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.getVideos();
  }

  player: YT.Player;
  public id: string = 'qDuKsiwS5xw';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  playById() {
    let id = 'TLziN5waybE';
    this.player.loadVideoById(id);
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  getVideos() {
    this.videoService.getVideos().subscribe((result) => {
      this.videos = result;
      console.log(this.videos);
    });
  }

  uploadThumbnail($event) {
    this.spinner = true;
    this.file = $event.target.files[0];
    let date = new Date().toISOString;
    console.log(this.file);
    this.path = '/videoThumbnails/' + new Date() + this.file.name;

    let s = this.af
      .upload('/videoThumbnails/' + new Date() + this.file.name, this.file)
      .then(() => {
        this.af
          .ref(this.path)
          .getDownloadURL()
          .subscribe((result) => {
            this.downloadURL = result;
            console.log(this.downloadURL);
            this.spinner = false;
            this.check = 1;
          });

        console.log(s);
      })
      .then();
  }

  insertVideo(){
    let date = new Date().toString();
    var body = {
      "name":this.videoTitle,
      "photoUrl":this.downloadURL,
      "url":this.videoId,
      "date":date
    }

    this.videoService.addVideo(body).subscribe(result => {
      console.log(result);
      this.getVideos();
    });
  }

  deleteVideo(_id){
    console.log(_id);
    this.videoService.deleteVideo(_id).subscribe(result => {
      console.log(result);
      this.getVideos();
    })
  }
}
