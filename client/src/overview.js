import {inject} from 'aurelia-framework';
import {PostService} from 'services/post-service.js';

@inject(PostService)
export class Overview {
  heading = 'Overview';

  constructor(postService) {
    this.postService = postService;
    this.posts = postService.posts;
  }
}
