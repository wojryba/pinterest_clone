import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-all-pics',
  templateUrl: './all-pics.component.html',
  styleUrls: ['./all-pics.component.css']
})
export class AllPicsComponent implements OnInit, OnDestroy {
  connection: any;
  images: any;

  myOptions = {
    gutter: 10,
    columnWidth: 2,
    itemSelector: '.grid-item'
  };

  constructor(private api: ApiService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.connection = this.api.Sockets().subscribe( data => {
      this.handleSocet(data);
    });

    this.getPics();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getPics() {
    this.api.getAllPics().subscribe(
      response => {
        this.images = JSON.parse(response['_body']);
      },
      error => console.log(error),
    );
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

  userClick(i) {
    this.api.findUser(this.images[i].creator._id).subscribe(
      response => {
        this.api.userData = JSON.parse(response['_body']);
        if (this.api.userData.user === this.auth.userProfile['user_id']) {
          this.router.navigate(['/myPics']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error => console.log(error)
    );
  }

}
