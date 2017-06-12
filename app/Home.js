define([
        'BTS/GlobalPlugins'
    ],
    function () {
        $( document ).ready(function () {

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
            $('body').Menu()
        });
    });