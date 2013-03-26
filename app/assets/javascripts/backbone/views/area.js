$(function(){
  BattleSea.Views.BattleArea = Backbone.View.extend({


    el:'#form',
    holder: '#battle_area1',

    events : {
      "click a#set": "showModel"
    },

    initialize: function() {
      this.collection = new BattleSea.Collections.Fields({
      });
      this.collection.reset();
      for (var y=1; y<=10; y++){
          for (var x=1; x<=10; x++){
            var field = this.collection.create({
              x_co: x,
              y_co: y,
              status: 'empty'
            });
          };
        };

      console.log('View initialize');
      console.log(this.collection);
      this.collection.on('reset', this.reset, this);
    },

    reset: function() {
      $(this.holder).html('');
      console.log('View reset');
      var temp_y = 1;

      this.collection.each(function(field) {
        var battleArea = new BattleSea.Views.Field({
          model: field
        });

        if (battleArea.model.get('y_co') != temp_y) {
          $(this.holder).append('<tr>');
          temp_y = battleArea.model.get('y_co');
        }
        $(this.holder).append(battleArea.render().el);

      }, this);
      return this;
    },

    showModel: function() {
      console.log($('.x_co').val());
      console.log($('.y_co').val());
      this.collection.where({x_co: $('.x_co').val(), y_co: $('.y_co').val(),});
      console.log(this.collection.where({x_co: $('.x_co').val()}))
    }
  })
});