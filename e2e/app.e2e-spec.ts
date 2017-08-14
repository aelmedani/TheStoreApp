import { TheStoreAppPage } from './app.po';

describe('the-store-app App', () => {
  let page: TheStoreAppPage;

  beforeEach(() => {
    page = new TheStoreAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
