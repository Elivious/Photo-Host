define([

], function(

){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": 'start',
            "Results": "Search",
            "Profile": 'profile',
            "My-Images": 'Images'
        },

        start: function() {
            router.trigger('router-event', 'start')
        },

        Search: function() {
            router.trigger('router-event', 'search')
        },
        profile: function() {
            router.trigger('router-event', 'profile')
        },
        Images: function() {
            router.trigger('router-event', 'Images')
        }
    });

    router = new AppRouter();

    $("body").on("click","a:not(a[data-bypass])",function(e){
        e.preventDefault();
        if($(e.currentTarget).attr('nav') != "false"){

            var href = $(this).attr("href");

            Backbone.history.navigate(href, true);

            router.navigate(href, true);
        }
    });

    Backbone.history.start({ pushState: true });

    return router;

});
