import {inject} from 'aurelia-framework';
import {PostService} from 'services/post-service.js';

@inject(PostService)
export class Post {
  constructor(postService) {
    this.postService = postService;
  }

  activate(obj) {
    this.post = this.postService.getPost(obj.id);
  }
}
