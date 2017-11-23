(function() {
  'use strict';

  angular
    .module('hauseVierundzwanzigApp')
    .factory('ArtistService', ArtistService);

  /** @ngInject */
  function ArtistService($http, BANDSINTOWN_API, YOUTUBE_API) {
    var factory = {
      getArtistDetails: getArtistDetails,
      getArtistEvents: getArtistEvents,
      getArtistVideos: getArtistVideos
    };
    return factory;

    function getArtistDetails(name) {
      return $http({
        method: 'GET',
        url: BANDSINTOWN_API.BASE_URL.concat('/artists/', name),
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          app_id: BANDSINTOWN_API.APP_ID
        }
      })
    }

    function getArtistEvents(name) {
      return $http({
        method: 'GET',
        url: BANDSINTOWN_API.BASE_URL.concat('/artists/', name, '/events'),
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          app_id: BANDSINTOWN_API.APP_ID
        }
      })
    }

    function getArtistVideos(name) {

    }
  }
})();
