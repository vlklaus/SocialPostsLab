import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  formPost: Post = {} as Post;

  display: boolean = false;

  @Output() Submitted = new EventEmitter<Post>();

  submitPost(): void {
    let newPost: Post = {...this.formPost};
    this.Submitted.emit(newPost);
    this.toggleDisplay();
  }
  
  toggleDisplay(): void {
    this.display = !this.display;
  }
}
