eventSystem.factory('Event', ['$resource', function ($resource) {
  return $resource('/api/events/:id', { id: '@_id' }, 
    { 
      update: { method: 'PUT' },
      search: {
        method: 'GET',
        url: '/api/events/search/:keyword',
        params: { keyword: "@keyword" },
        transformResponse: function(events){ 
          events = JSON.parse(events);
          events.forEach(function(event){
            event.to = new Date(event.to);
            event.from = new Date(event.from);
          });
          return events;
        },
        isArray: true
      }
    });
}]);