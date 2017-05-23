import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = this.api.userData;
  images = this.api.userData.images;
  connection: any;

  myOptions = {
    gutter: 10,
    columnWidth: 2,
    itemSelector: '.grid-item'
  };

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.connection = this.api.Sockets().subscribe( data => {
      this.handleSocet(data);
    })
  }

  handleSocet(data) {
    if (data.type === 'deletePic') {
      this.images = this.images.filter(img => {
        if (img._id !== data.pic._id) {
          return img;
        }
      });
    } else if (data.type === 'addPic') {
      data.pic.creator = {
        nick: data.user.nickname,
        picture: data.user.picture,
        user_id: data.user.user_id
      };
      this.images.push(data.pic);
    } else if (data.type === 'like') {
      const j = this.images.findIndex(val => {
        if (val._id === data.pic._id) {
          return val;
        }
      });
      this.images[j].likes = data.pic.likes;
    }
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

  onClick() {
    this.router.navigate(['']);
  }
}
