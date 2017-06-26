define([

], function(

){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": 'start',
            "Results": "Search",
            "Profile": 'profile',
            "My-Images": 'Images',
            "Browse": "Browse",
            "New": "New",
            "Subscriptions": "Subscriptions",
            "Upload": "Upload",
            "Inbox": "Inbox"
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
        },
        Browse: function() {
            router.trigger('router-event', 'Browse')
        },
        New: function() {
            router.trigger('router-event', 'New')
        },
        Subscriptions: function() {
            router.trigger('router-event', 'Subscriptions')
        },
        Upload: function() {
            router.trigger('router-event', 'Upload')
        },
        Inbox: function() {
            router.trigger('router-event', 'Inbox')
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
