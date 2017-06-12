require.config({
    baseUrl: "",
    paths: {
        "Photo-Host/app/gallery": "gallery",
        "Photo-Host/app/navigation": "navigation",
        "Photo-Host/app/user": "user",
        "Photo-Host/core": "core",
        "Photo-Host/pages": "pages"
    },
    waitSeconds: 15
});

requirejs([
    "scripts/text",
    "core/router",
    "app/Home",
    "app/Utility/gallery/gallery",
    "text!pages/Search-Results.html",
    "text!pages/User-Profile.html",
    "text!pages/User-Images.html"
], function(text, Router, Home, gallery, Search, profile, Images){

    Router.on('router-event', function(path){
        console.log("path", path);
        switch(path){
            case 'start':
                $('.explore').html(text);
                break;
            case 'Router':
                $('.explore').html(Router);
                break;
            case 'search':
                $('.explore').html(Search);
                break;
            case 'profile':
                $('.explore').html(profile);
                break;
            case 'Images':
                $('.explore').html(Images);
                break;
        }

    });
});