import { Angular2ElectronStarterPage } from './app.po';

describe('angular2-electron-starter App', function() {
  let page: Angular2ElectronStarterPage;

  beforeEach(() => {
    page = new Angular2ElectronStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
