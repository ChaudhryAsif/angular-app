import { Component } from '@angular/core';
import { PostService } from './service/post.service';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostService]
})

export class AppComponent {
  title = 'prj-app';
public posts: any;
  constructor(private post: PostService) {}

ngOnInit(){
   this.post.getPosts().subscribe(response => {
    this.posts = response;
    //console.log('response', response)
  })
}

}
