/**
 * @module Perspective
 */
/// <reference path="./perspectivePlugin.ts"/>
module Perspective {

  /**
   * redirects the browser to the default page based on the detected profiles
   * @method DefaultPageController
   * @for Perspective
   * @param {*} $scope
   * @param {ng.ILocationService} $location
   * @param {any} localStorage
   * @param {Core.Workspace} workspace
   */
  export function DefaultPageController($scope, $location, localStorage, workspace:Workspace, jolokia) {
    var params = $location.search();
    var url = Perspective.defaultPage($location, workspace, jolokia, localStorage);
    var path = Core.trimLeading(url, "#");
    if (path) {
      path = Core.appendConnectionNameToUrl(path, params);
      console.log("redirecting to default page: " + path + " when had params: " + angular.toJson(params));
      $location.url(path);
    } else {
      console.log("No default page could be chosen!");
    }
  }

  _module.controller("Perspective.DefaultPageController", ["$scope", "$location", "localStorage", "workspace", "jolokia", DefaultPageController]);
}
