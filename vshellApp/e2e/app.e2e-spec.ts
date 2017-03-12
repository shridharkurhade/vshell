import { VshellAppPage } from './app.po';

describe('vshell-app App', () => {
  let page: VshellAppPage;

  beforeEach(() => {
    page = new VshellAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
