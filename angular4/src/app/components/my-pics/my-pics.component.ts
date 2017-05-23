import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-my-pics',
  templateUrl: './my-pics.component.html',
  styleUrls: ['./my-pics.component.css']
})
export class MyPicsComponent implements OnInit, OnDestroy {
  connection: any;
  user: any = [];
  images: any = [];

  myOptions = {
    gutter: 10,
    columnWidth: 2,
    itemSelector: '.grid-item'
  };

  constructor(private api: ApiService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.connection = this.api.Sockets().subscribe(data => {
      this.handleSocet(data);
    });

    this.api.getMyPics().subscribe(
      response => {
        console.log(response);
        const pics = JSON.parse(response['_body']);
        if (pics.length !== 0) {
          this.images = pics[0].images;
          this.user = {
            nick: pics[0].nick,
            picture: pics[0].picture
          };
        }

      },
      error => console.log(error),
    );
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  handleSocet(data) {
    console.log(data);
    if (data.type === 'addPic') {
      if (this.images) {
        this.images.push(data.pic);
        this.user = {
          nick: data.user.nickname,
          picture: data.user.picture
        }
      }
    } else if (data.type === 'deletePic') {
        this.images = this.images.filter(img => {
          if (img._id !== data.pic._id) {
            return img;
          }
        });
      } else if (data.type === 'like') {
        const j = this.images.findIndex(val => {
          if (val._id === data.pic._id) {
            return val;
          }
        });
        this.images[j].likes = data.pic.likes;
      }

  }

  deletePic(i) {
    const pic = this.images[i];
    this.api.deletePic(pic._id).subscribe(
      response => {
        this.images.splice(i, 1);
        this.api.deletePicSocet(pic);
      },
      error => console.log(error),
    );
  }

  like(i) {
    const pic = this.images[i];
    this.api.likePic(pic._id).subscribe(
      response => {
        const likes = JSON.parse(response['_body']);
        pic.likes = likes;
        this.api.changeLike(pic);
      },
      error => console.log(error),
    );
  }

}
