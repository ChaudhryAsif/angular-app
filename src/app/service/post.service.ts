import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private client: HttpClient) { }

  getPosts(){
    return this.client.get(this.url);
  }
}
