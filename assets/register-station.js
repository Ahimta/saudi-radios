'use strict';

(function (window)
{
  var saudiRadios = window.saudiRadios = window.saudiRadios || {}

  var flashInstalled = (function ()
  {
    try              { return Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'))                  }
    catch(exception) { return ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']) }
  })()

  var registerFlashStation = (function ()
  {
    var stations = []

    return function (elementId, file, title)
    {
      var player = jwplayer(elementId).setup({
        file: file,
        title: title,
        width: '100%',
        height: '100%',
        events: {
          onPlay: function (event)
          {
            stations
              .filter(function (station) { return station.id !== elementId })
              .forEach(function (station) { station.player.stop() })
          }
        }
      })

      stations.push({id: elementId, player: player})
    }
  })()

  var registerHTML5Station = (function ()
  {
    var stations = []

    return function (elementId, file, title)
    {
      try
      {
        player = document.querySelector('audio[data-station-id=' + elementId + ']')

        player.addEventListener('play', function ()
        {
          stations
              .filter(function (station) { return station.id !== elementId })
              .forEach(function (station)
              {
                try { station.player.pause() } catch (ex) {}
              })
        })

        $(player).fadeIn()
      }
      catch (ex) {}

      stations.push({id: elementId, player: player})
    }
  })()

  saudiRadios.registerStation = flashInstalled ? registerFlashStation : registerHTML5Station
})(window)