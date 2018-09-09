import { VideoStreamingPage } from './app.po';

describe('video-streaming App', function() {
  let page: VideoStreamingPage;

  beforeEach(() => {
    page = new VideoStreamingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
