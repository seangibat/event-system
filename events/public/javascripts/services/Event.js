eventSystem.factory('Event', ['$resource', function ($resource) {

  var transformArrayResponse = function(events){ 
    events = JSON.parse(events);
    events.forEach(transformOneResponse);
    return events;
  };

  var transformOneResponse = function(event){
    event.to = new Date(event.to);
    event.from = new Date(event.from);
    return event;
  };

  return $resource('/api/events/:id', { id: '@_id' }, 
    { 
      update: { method: 'PUT' },
      query: { isArray: true, transformResponse: transformArrayResponse },
      delete: { method: 'DELETE', transformResponse: transformOneResponse },
      search: {
        method: 'GET',
        url: '/api/events/search/:keyword',
        params: { keyword: "@keyword" },
        transformResponse: transformArrayResponse,
        isArray: true
      }
    });
}]);