define([
    '../../BTS/GlobalPlugins'
    ],
    function () {
        $('body').Slider();

        $('button.OpenMenu').click(function () {
            console.log('CLICKED');
            $('#NoShow').removeAttr('id');

            $('div.navMenu').addClass('slideInLeft');
        });

        $('button.CloseMenu').click(function () {
            console.log('CLICKED');

            $('div.navMenu').removeClass('slideInLeft');

            $('div.navMenu').addClass('slideOutLeft');
        });
});