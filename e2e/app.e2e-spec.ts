import { CodeMineWebPage } from './app.po';

describe('code-mine-web App', () => {
  let page: CodeMineWebPage;

  beforeEach(() => {
    page = new CodeMineWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
