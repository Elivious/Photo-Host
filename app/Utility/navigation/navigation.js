define([
    '../../BTS/GlobalPlugins'
    ],
    function () {
        $('body').Slider();

        $('.OpenMenu').click(function () {
            console.log('CLICKED');
            $('#NoShow').removeAttr('id');

            $('div.navMenu').removeClass('slideOutLeft');

            $('.navMenu').addClass('slideInLeft' + ' animated');
        });

        $('button.CloseMenu').click(function () {
            console.log('CLICKED');

            $('div.navMenu').removeClass('slideInLeft');

            $('div.navMenu').addClass('slideOutLeft' + ' animated');
        });
});