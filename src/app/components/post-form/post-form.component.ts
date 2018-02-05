import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter;

  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please, add post');
    } else {
      // New event emitter
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      })
    }
  }
}
