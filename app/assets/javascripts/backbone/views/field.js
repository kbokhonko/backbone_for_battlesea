$(function(){
  BattleSea.Views.Field = Backbone.View.extend({

    tagName: "td",
    className: 'field',

    events : {
      "click": "changeStatus"
    },

     initialize: function() {
      this.model.on('change', this.changeStatusFromCo, this);
    },

    changeStatusFromCo: function() {
      if (this.model.get('status') == 'empty'){
        $(this.el).removeClass('red');
      }
    else {
        $(this.el).addClass('red');
      }
    },

    render: function() {
      $(this.$el).html('');
      return this;
    },

    changeStatus: function() {
      if (this.model.get('status') == 'empty'){
        $(this.el).addClass('red');
        this.model.set('status', 'non_empty');
      }
      else{
        $(this.el).removeClass('red');
        this.model.set('status', 'empty');
      }
    }
  });
});