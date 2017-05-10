import { Angular2SandeepPage } from './app.po';

describe('angular2-sandeep App', () => {
  let page: Angular2SandeepPage;

  beforeEach(() => {
    page = new Angular2SandeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
