/**
 * Created by iMax on 20.06.2017.
 */
"use strict";
angular.module('sasApp').directive('filterDevices', function(){
  return {
    restrict: 'EA',
    templateUrl: 'directives/directives-templates/filter-devices.template.html',
    link: function(){
      var linkBtn1 = angular.element(document.querySelector("#change-link-btn1")),
          linkBtn2 = angular.element(document.querySelector("#change-link-btn2"));
      linkBtn1.on("click", function(){
        linkBtn1.addClass('hide-btn-link');
        linkBtn2.removeClass('hide-btn-link');
      });
      linkBtn2.on("click", function(){
        linkBtn2.addClass('hide-btn-link');
        linkBtn1.removeClass('hide-btn-link');
      })
    }
  }
});