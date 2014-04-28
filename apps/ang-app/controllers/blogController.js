(function() {
  define(['./module'], function(controllers) {
    return controllers.controller('blogCtrl', [
      '$scope', function($scope) {
        $scope.blogPosts = [
          {
            title: "Sky is the limit",
            lead: "				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,				when an unknown printer took a galley of type and scrambled it to make a type				specimen book.",
            blogDate: "3.4.2014"
          }, {
            title: "Another Cool Stuff",
            lead: "				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,				when an unknown printer took a galley of type and scrambled it to make a type				specimen book.",
            date: "3.4.2014"
          }, {
            title: "Still Stuff",
            lead: "				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,				when an unknown printer took a galley of type and scrambled it to make a type				specimen book.",
            date: "3.4.2014"
          }, {
            title: "Meet Flanders",
            lead: "				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,				when an unknown printer took a galley of type and scrambled it to make a type				specimen book.",
            date: "3.4.2014"
          }, {
            title: "In the Jungle",
            lead: "				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,				when an unknown printer took a galley of type and scrambled it to make a type				specimen book.",
            date: "3.6.2013"
          }
        ];
        $scope.blogSwipeRight = function() {
          return alert('blogController swipe right');
        };
        $scope.blogSwipeLeft = function() {
          return alert('blogController swipe left');
        };
        return $scope.connectWebSocket = function() {
          return alert('connectWebSocket');
        };
      }
    ]);
  });

}).call(this);
