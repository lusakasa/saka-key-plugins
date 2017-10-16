// Plugin must be an object wrapped inside an IIFE for eval()
;(() => ({
  name: 'Pocket',
  version: '0.1',
  description: 'Integration with Pocket (https://getpocket.com)',
  browsers: 'all',
  author: 'Sufyan',
  license: 'MIT',
  homepage: 'https://github.com/lusakasa/saka-key-plugins',
  updateUrl: 'https://raw.githubusercontent.com/lusakasa/saka-key-plugins/master/Pocket.js',
  //
  storage: {
    
  }
  // user configurable options added to the options page
  options: [
    {
      key: 'blacklist',
      type: 'textarea'
    }
  ],
  // scripts that are executed based on pre-defined conditions, e.g. on every page load/ on request
  scripts: [
    {
      key: 'preparePage',
      label: '',
      // execute when a page loads
      onload: {
        urls: '<all_urls>',
        frames: 'all',
      },
      function: () => {

      }
    },
    {
      key: 'loginToPocket',
      label: '',
      // execute if user presses button from options page
      onbutton: true,
      // execute when requested
      onrequest: true,
      function: () => {

      }
    },
    {
      key: 'pocketSaveRequest',
      label: '',
      // execute only when requested
      onrequest: true,
      function: (url) => {
        fetch('https://getpocket.com/v3/add', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'X-Accept': 'application/json'
          }),
          body: JSON.stringify({
            url,
            consumer_key: 'xxxxxxxx',
            access_token: 'xxxxxxxx'
          })
        })
      }
    }
  ],
  // commands made available to 
  commands: [
    {
      key: 'savePageToPocket',
      label: 'Save Current Page to Pocket',
      function: (event, { script }) => script('pocketSaveRequest', document.location.href)
    },
    {
      key: 'saveLinkToPocket',
      label: 'Save Link to Pocket',
      function: (event, { hintsMode }) => hintsMode('links', 'pocket')
    }
  ],
  // custom filters for determining which elements are hintable
  hintFilters: [
    {
      key: 'links',
      css: 'a, *[role="link"]'
    }
  ],
  // custom hint activation functions
  hintsActivators: [
    {
      key: 'pocket',
      function: (event, target, { script }) => script('pocketSaveRequest', target.href)
    }
  ],
}))()
