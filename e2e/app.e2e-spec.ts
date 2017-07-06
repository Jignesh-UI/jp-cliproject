import { JpCliprojectPage } from './app.po';

describe('jp-cliproject App', () => {
  let page: JpCliprojectPage;

  beforeEach(() => {
    page = new JpCliprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
