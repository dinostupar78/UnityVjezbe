import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [
    FormsModule,
    DatePipe,
    CommonModule
  ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {

  posts = [
    { user: "Dino", timestamp: new Date(), comment: "Ovo je prvi komentar", editing: false },
    { user: "Jakov", timestamp: new Date(), comment: "Ovo je drugi komentar", editing: false }
  ];

  adding = false;
  newUser = '';
  newComment = '';
  originalComment = '';


  toggleAdd() {
    this.adding = !this.adding;
  }

  addPost() {
    if (this.newUser.trim() !== '' && this.newComment.trim() !== '') {
      this.posts.push({
        user: this.newUser,
        timestamp: new Date(),
        comment: this.newComment,
        editing: false
      });
      this.newUser = '';
      this.newComment = '';
      this.adding = false;
    }
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }

  editPost(p: any) {
    p.editing = true;
    this.originalComment = p.comment;
  }

  savePost(p: any) {
    p.editing = false;
  }

  cancelEdit(p: any){
    p.comment = this.originalComment;
    p.editing = false;
  }

}
