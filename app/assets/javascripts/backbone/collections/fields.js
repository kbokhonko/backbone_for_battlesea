$(function(){
  BattleSea.Collections.Fields = Backbone.Collection.extend({

    initialize: function() {
      model: BattleSea.Models.Field;
      console.log("Collection initialize");
    },

    url: function() {
        return "/";
    }
  })
});