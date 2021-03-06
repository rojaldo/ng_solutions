import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit, OnChanges {

  @Input() date: any;
  result: any;
  id = 'qDuKsiwS5xw';
  resolved = false;
  playerVars = {
    cc_lang_pref: 'en'
  };


  constructor(public service: ApodService) { }

  ngOnInit() {
    this.service.getRequest(this.date).subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.resolved = false;
    this.service.getRequest(this.date).subscribe(
      (data) => this.processResult(data),
      (error) => this.processError(error));
  }

  processResult(data: any) {
    this.result = data;
    this.resolved = true;
  }

  processError(error: any) {
    console.log(error);
  }

  isImage(): boolean {
    return (this.result.media_type === 'image');
  }

  isVideo(): boolean {
    return (this.result.media_type === 'video');
  }

  youtubeParser(url: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : '';
  }
}
