export class App {
  configureRouter(config, router) {
    config.title = 'MEAN Test';
    config.map([
      { route: ['', 'overview'], name: 'overview', moduleId: 'overview', nav: true, title: 'Overview' },
      { route: 'post/:id', name: 'viewPost', moduleId: 'post', title: 'View Post' }
    ]);

    this.router = router;
  }
}
