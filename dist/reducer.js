Object.defineProperty(exports,"__esModule",{value:true});var _isEmpty=require('lodash/isEmpty');var _isEmpty2=_interopRequireDefault(_isEmpty);var _reactNavigation=require('react-navigation');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var BACK=_reactNavigation.NavigationActions.BACK,INIT=_reactNavigation.NavigationActions.INIT,NAVIGATE=_reactNavigation.NavigationActions.NAVIGATE,SET_PARAMS=_reactNavigation.NavigationActions.SET_PARAMS;var reducer=function reducer(Navigator){return function(history,currState,action){if((0,_isEmpty2.default)(history))return null;switch(action.type){case NAVIGATE:{var state=Navigator.router.getStateForAction(action,currState)||Navigator.router.getStateForAction(action);var _Navigator$router$get=Navigator.router.getPathAndParamsForState(state),path=_Navigator$router$get.path,_Navigator$router$get2=_Navigator$router$get.params,params=_Navigator$router$get2===undefined?{}:_Navigator$router$get2;if(!action.dontPushHistory){history.push({pathname:''+uriPrefix+path});}return state;}case BACK:{history.goBack();break;}}return currState;};};exports.default=reducer;