import { Component } from '@angular/core';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [SinglePostComponent, PostFormComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  allPosts: Post [] = [
    {
      title: "Sleepy",
      thought: "Zeus won't stop meowing in the morning and it wakes me up",
      likes: 100
    },

    {
      title: "Angry",
      thought: "Mom won't give me food so I decide to wake her up with my incessant meows",
      likes: 200
    }
  ]

  onSubmit(p: Post) {
    this.allPosts.push(p);
  }

  deletePost(p:  Post): void {
    let index: number = this.allPosts.findIndex(x => x == p);
    this.allPosts.splice( index, 1);
  }

}
