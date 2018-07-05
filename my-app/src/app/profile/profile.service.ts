import {
  Injectable,
  Inject
} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface UserT {
 id: string;
 name: string;
 friends: Array<string>;
}

export interface ProfileT {
  [key: string]: UserT;
}

@Injectable()
export class ProfileService {
  constructor(private http: Http) {}

  getUserData(): Observable<ProfileT> {
    return this.http.get('/assets/data/data.json').map((response: Response) => {
      return response.json();
    })
  }
}
