import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url;
  format;
  video;
  loading = false;

  constructor(private apiClient: ApiClientService) { 
    
  }

  async ngOnInit() {
    
  }

  selectedFile: any = null;
  
  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    this.video = file;
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  onGetGreyscale = () =>{
    this.loading = true;
    this.apiClient.getGreyscale(this.video).then( (greyvideo: Blob) => {
      console.log("response came")
      if (greyvideo) {
        var reader = new FileReader();
        reader.readAsDataURL(greyvideo);
        if(greyvideo.type.indexOf('video')> -1){
          this.format = 'video';
        }
        reader.onload = (event) => {
          this.loading = false;
          this.url = (<FileReader>event.target).result;
        }
      }
    } )
  }

}
