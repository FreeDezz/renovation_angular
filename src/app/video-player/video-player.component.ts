import {Component, Input, OnInit, ViewChild} from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() url: string = '';
  @Input() poster: string = '';
  @ViewChild('videoElement', {static: true}) videoElement;

  get player(): HTMLVideoElement {
    return this.videoElement.nativeElement;
  }

  constructor() {
  }

  ngOnInit(): void {
    const hls = new Hls();
    hls.loadSource(this.url);
    hls.attachMedia(this.player);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      this.player.muted=true;
      this.player.play();
    });
  }
}
