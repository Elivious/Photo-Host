$.fn.Menu = function () {

    var Song = Backbone.Model.extend();

    var Songs = Backbone.Collection.extend({
        model: Song
    });

    var SongView = Backbone.View.extend({
        tagName: 'span',

        render: function(){
            this.$el.html(this.model.get("title"));

            return this;
        }
    });

    var SongsView = Backbone.View.extend({
        render: function(){
            var self = this;



            self.model.each(function(song){
                var songView = new SongView({ model: song });
                self.$el.append(songView.render().$el);
            });
        }
    });

    var songs = new Songs([
        new Song({ title: "New" }),
        new Song({ title: "Hot" }),
        new Song({ title: "Browse" }),
        new Song({ title: "Post" }),
    ]);

    var songsView = new SongsView({ el: "#navigation", model: songs });
    songsView.render();
};