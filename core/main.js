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
    "app/Utility/navigation/navigation",
    "app/Utility/gallery/gallery",
    "text!pages/Search-Results.html",
    "text!pages/User-Profile.html",
    "text!pages/User-Images.html",
    "text!pages/Browse-Hub.html",
    "text!pages/New-Hub.html",
    "text!pages/Subscriptions.html",
    "text!index.html",
    "text!pages/Upload.html"
], function(text, Router, Home, navigation, gallery, Search, profile, Images, Browse, New, Sub, Index, Upload){

    Router.on('router-event', function(path){
        console.log("path", path);
        switch(path){
            case 'start':
                $('.explore').html(Index);
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
            case 'Browse':
                $('.explore').html(Browse);
                break;
            case 'New':
                $('.explore').html(New);
                break;
            case 'Subscriptions':
                $('.explore').html(Sub);
                break;
            case 'Upload':
                $('.explore').html(Upload);
                break;
        }

    });
});