import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ApiService {
  private socket;
  public userData: any;

  constructor(private authHttp: AuthHttp, private http: Http) { }

  Sockets() {
    const observable = new Observable(observer => {
      this.socket = io('http://localhost:3000/');
      this.socket.on('addPic', (data) => {
        observer.next(data);
      });
      this.socket.on('deletePic', (pic) => {
        observer.next(pic);
      });
      this.socket.on('like', (pic) => {
        observer.next(pic);
      });

      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  addPic(pic, user) {
    this.socket.emit('addPic', pic, user);
  }

  deletePicSocet(pic) {
    this.socket.emit('deletePic', pic);
  }

  changeLike(pic) {
    this.socket.emit('like', pic);
  }

  addImg(imgData, user) {
    const data = JSON.stringify({ imgData, user });
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('http://localhost:3000/api/img', data, options);
  }

  getMyPics() {
    return this.authHttp.get('http://localhost:3000/api/getMyPics');
  }

  getAllPics() {
    return this.http.get('http://localhost:3000/api/getAllPics');
  }

  deletePic(pic) {
    const data = JSON.stringify({ pic });
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('http://localhost:3000/api/deletePic', data, options);
  }

  likePic(pic) {
    const data = JSON.stringify({ pic });
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('http://localhost:3000/api/likePic', data, options);
  }

  findUser(id) {
    const data = JSON.stringify({ id });
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    const options = new RequestOptions({ headers: headers});

    return this.authHttp.post('http://localhost:3000/api/findUser', data, options);
  }
}
