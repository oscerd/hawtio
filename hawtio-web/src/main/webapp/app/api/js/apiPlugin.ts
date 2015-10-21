/**
 * API plugin for browsing WSDL and WADL
 *
 * @module API
 * @main API
 */
/// <reference path="apiHelpers.ts"/>
module API {
  export var pluginName = 'api';
  export var templatePath = 'app/' + pluginName + '/html/';

  export var _module = angular.module(pluginName, ['bootstrap', 'hawtioCore', 'hawtio-ui']);

  _module.config(["$routeProvider", ($routeProvider) => {
    $routeProvider.
            when('/api/wsdl', {templateUrl: 'app/api/html/wsdl.html'}).
            when('/api/wadl', {templateUrl: 'app/api/html/wadl.html'});
  }]);


  _module.run(["$location", "workspace", "viewRegistry", "layoutFull", "helpRegistry", "ServiceRegistry", ($location:ng.ILocationService, workspace:Workspace, viewRegistry, layoutFull, helpRegistry, ServiceRegistry) => {

    viewRegistry['api'] = layoutFull;
    /*
    helpRegistry.addUserDoc('log', 'app/wsdl/doc/help.md', () => {
      return workspace.treeContainsDomainAndProperties('io.hawt.log', {type: 'LogQuery'});
    });
    */

    workspace.topLevelTabs.push({
      id: 'apis.index',
      content: 'APIs',
      title: 'View the available APIs inside this fabric',
      isValid: (workspace) => Service.hasService(ServiceRegistry, "api-registry"),
      href: () => '#/api/services',
      isActive: (workspace) => workspace.isLinkActive('api/')
    });

  }]);

  hawtioPluginLoader.addModule(pluginName);
}
