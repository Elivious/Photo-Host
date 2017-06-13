$.fn.Menu = function () {

    var NavModel = Backbone.Model.extend({});

    var NavCollection = Backbone.Collection.extend({
        model: NavModel
    });

    var NavView = Backbone.View.extend({
        tagName: 'span',

        render: function () {
            this.$el.html(this.model.get("spot"));

            return this;
        }
    });

    var Navsview = Backbone.View.extend({
        render: function () {
            var self = this;

            self.model.each(function (nav) {
                var navview = new NavView({model: nav});
                self.$el.append(navview.render().$el);
            });
        }
    });

    var navs = new NavCollection([
        new NavModel({spot: "<span id='links'></span>"}),
        new NavModel({spot: "<div id='navigation'></div>"})
    ]);

    var navsView = new Navsview({el: ".nav", model: navs});
    navsView.render();

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
        new Song({ title: "<a href='Profile'>Profile</a>    " }),
        new Song({ title: "<a href='Results'>Search</a>   " }),
        new Song({ title: "<a href='My-Images'>My Images</a></a>    " })
    ]);

    var songsView = new SongsView({ el: "#navigation", model: songs });
    songsView.render();
};

$.fn.Slider = function () {
    var SliderModel = Backbone.Model.extend({});

    var SliderCollection = Backbone.Collection.extend({
        model: SliderModel
    });

    var SliderView = Backbone.View.extend({
        tagName: 'span',

        render: function () {
            this.$el.html(this.model.get("spot"));

            return this;
        }
    });

    var SliderViews = Backbone.View.extend({
        render: function () {
            var self = this;

            self.model.each(function (nav) {
                var navview = new SliderView({model: nav});
                self.$el.append(navview.render().$el);
            });
        }
    });

    var Sliders = new SliderCollection([
        new SliderModel({spot: "HELLO"}),
        new SliderModel({spot: "HI"})
    ]);

    var slidersView = new SliderViews({el: ".navMenu", model: Sliders});
    slidersView.render();
};