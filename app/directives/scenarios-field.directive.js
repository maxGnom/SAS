/**
 * Created by iMax on 21.06.2017.
 */
"use strict";
angular.module('sasApp').directive('scenariosField', function(){
  return {
    restrict: 'EA',
    templateUrl: 'directives/directives-templates/scenarios-field.template.html',
    link: function(){
      var infoBtn = angular.element(document.querySelector("#info-btn")),
          scenariosBtn = angular.element(document.querySelector("#scenarios-btn")),
          infoTabContent = angular.element(document.querySelector("#tab-info")),
          scenariosTabContent = angular.element(document.querySelector("#tab-scenarios"));
      infoBtn.on("click", function(){
        if (infoBtn.hasClass("open")){
          return false
        }
        else {
          infoBtn.addClass("open");
          infoTabContent.addClass("open-content");
          scenariosBtn.removeClass("open");
          scenariosTabContent.removeClass("open-content");
        }
      });
      scenariosBtn.on("click", function(){
        if (scenariosBtn.hasClass("open")){
          return false
        }
        else {
          scenariosBtn.addClass("open");
          scenariosTabContent.addClass("open-content");
          infoBtn.removeClass("open");
          infoTabContent.removeClass("open-content");
        }
      })
    }
  }
});