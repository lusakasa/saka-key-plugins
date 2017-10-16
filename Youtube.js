;(() => ({
  name: 'Youtube',
  version: '0.1',
  description: 'Keyboard Shortcuts for Youtube',
  browsers: 'all',
  author: 'Sufyan',
  license: 'MIT',
  homepage: 'https://github.com/lusakasa/saka-key-plugins',
  updateUrl:
    'https://raw.githubusercontent.com/lusakasa/saka-key-plugins/master/Youtube.js',
  // user configurable options added to the options page
  options: [
    {
      key: 'speedIncrement',
      type: 'number',
      min: 0.0,
      step: 0.05,
      default: 0.25
    }
  ],
  // commands made available to
  commands: [
    {
      key: 'pausePlay',
      label: 'Pause/Play Video',
      function: () => {
        document.querySelector('.ytp-play-button').click()
      }
    },
    {
      key: 'toggleFullscreen',
      label: 'Toggle Fullscreen',
      function: () => {
        document.querySelector('.ytp-fullscreen-button').click()
      }
    },
    {
      key: 'increaseSpeed',
      label: 'Increase Speed',
      function: (event, api, options) => {
        document.querySelector(
          '.html5-main-video'
        ).playbackRate += speedIncrement
      }
    },
    {
      key: 'decreaseSpeed',
      label: 'Decrease Speed',
      function: (event, { options: speedIncrement }) => {
        const video = document.querySelector('.html5-main-video')
        video.playbackRate = Math.min(video.playbackRate - speedIncrement, 0)
      }
    },
    {
      key: 'like',
      label: 'Like',
      function: () => {
        document
          .querySelector('#top-level-buttons ytd-toggle-button-renderer')
          .click()
      }
    },
    {
      key: 'dislike',
      label: 'Dislike',
      function: () => {
        document
          .querySelector(
            '#top-level-buttons ytd-toggle-button-renderer + ytd-toggle-button-renderer'
          )
          .click()
      }
    }
  ]
}))()
