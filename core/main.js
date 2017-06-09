require.config({
    baseUrl: "/Photo-Host",
    paths: {
        "some": "some/v1.0"
    },
    waitSeconds: 15
});

requirejs([
    "scripts/text",
    "core/router",
    "text!pages/Search-Results.html",
    "text!pages/User-Profile.html",
    "text!pages/User-Images.html"
], function(text, Router, Search, profile, Images){

    Router.on('router-event', function(path){
        console.log("path", path);
        switch(path){
            case 'start':
                $('.content').html(text);
                break;
            case 'Router':
                $('.content').html(Router);
                break;
            case 'search':
                $('.content').html(Search);
                break;
            case 'profile':
                $('.content').html(profile);
                break;
            case 'Images':
                $('.content').html(Images);
                break;
        }

    });
});