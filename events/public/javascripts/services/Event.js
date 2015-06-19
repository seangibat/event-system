eventSystem.factory('Event', ['$resource', function ($resource) {
  return $resource('/api/events/:id', { id:'@id' }, 
    { 
      update: { method: 'PATCH' },
      search: {
        method: 'GET',
        url: '/api/events/search/:keyword',
        params: { keyword: "@keyword" },
        isArray: true
      }
    });
}]);