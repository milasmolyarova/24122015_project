'use strict';

/* Controllers */

var cardcatApp = angular.module('cardcatApp', []);

cardcatApp.controller('CardListCtrl', function($scope) {
  $scope.cards = [
    {
        "patternUrl": "images/patterns/pattern_1.png", 
        "treeUrl": "images/trees/tree_1.png", 
        "giftsUrl": "images/gifts/gifts_1.png"
    },
    {
        "patternUrl": "images/patterns/pattern_2.png", 
        "treeUrl": "images/trees/tree_2.png", 
        "giftsUrl": "images/gifts/gifts_2.png"
    },
    {
        "patternUrl": "images/patterns/pattern_3.png", 
        "treeUrl": "images/trees/tree_3.png", 
        "giftsUrl": "images/gifts/gifts_3.png"
    },
    {
        "patternUrl": "images/patterns/pattern_4.png", 
        "treeUrl": "images/trees/tree_4.png", 
        "giftsUrl": "images/gifts/gifts_4.png"
    },
    {
        "patternUrl": "images/patterns/pattern_5.png", 
        "treeUrl": "images/trees/tree_5.png", 
        "giftsUrl": "images/gifts/gifts_5.png"
    },
    {
        "patternUrl": "images/patterns/pattern_6.png", 
        "treeUrl": "images/trees/tree_6.png", 
        "giftsUrl": "images/gifts/gifts_6.png"
    },
    {
        "patternUrl": "images/patterns/pattern_7.png", 
        "treeUrl": "images/trees/tree_7.png", 
        "giftsUrl": "images/gifts/gifts_7.png"
    },
    {
        "patternUrl": "images/patterns/pattern_8.png", 
        "treeUrl": "images/trees/tree_8.png", 
        "giftsUrl": "images/gifts/gifts_8.png"
    },
    {
        "patternUrl": "images/patterns/pattern_9.png", 
        "treeUrl": "images/trees/tree_9.png", 
        "giftsUrl": "images/gifts/gifts_9.png"
    },
    {
        "patternUrl": "images/patterns/pattern_10.png", 
        "treeUrl": "images/trees/tree_10.png", 
        "giftsUrl": "images/gifts/gifts_10.png"
    }    
];
});
