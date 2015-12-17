export class PostService {
  posts = [];

  // Public functions
  getPosts() {
    return this.posts;
  }

  addPost() {
    let id = this.posts.length;

    if (!this.title || this.title === '') {
      return;
    }

    this.posts.push({ id: id, title: this.title, content: this.content, upvotes: 0, link: '#/post/' + id, comments: []});
    this.title = '';
    this.content = '';
  }

  upvote(obj) {
    ++obj.upvotes;
  }

  downvote(obj) {
    --obj.upvotes;

    if (obj.upvotes < 0) {
      obj.upvotes = 0;
    }
  }

  getPost(id) {
    let idx = this.posts.findIndex((post) => post.id === Number(id));
    return this.posts[idx];
  }

  addComment(post) {
    if (!this.content || this.content === '') {
      return;
    }

    post.comments.push({ id: post.comments.length, author: 'name', upvotes: 0, content: this.content });
    this.content = '';
  }
}
