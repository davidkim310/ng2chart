import { MangoPage } from './app.po';

describe('mango App', () => {
  let page: MangoPage;

  beforeEach(() => {
    page = new MangoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
