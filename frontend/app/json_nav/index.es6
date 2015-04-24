import 'angular';

var name = 'app.json_nav';
export default name;

angular.module(name, [])
  .controller('MainCtrl', require('./main_ctrl'))
  .factory('jsonEsc', require('./json_esc'))
  .filter('zipper', require('./zipper'))
  .directive('jsonView', require('./json_view'));
