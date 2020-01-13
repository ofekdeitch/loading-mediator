import { LoadingManagerPage } from './app.po';

describe('loading-mediator App', () => {
  let page: LoadingManagerPage;

  beforeEach(() => {
    page = new LoadingManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
