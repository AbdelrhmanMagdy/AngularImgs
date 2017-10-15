import { Component , OnInit} from '@angular/core';
import { MyRequestsService } from '.././my-requests.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  data:any[];
  constructor(private services:MyRequestsService){}
  ngOnInit(){
    this.services.getRequest()
      .subscribe(res=>{
        this.data=res;
      })
  }
}
