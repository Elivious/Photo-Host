define([
    '../../BTS/GlobalPlugins'
    ],
    function () {

        $('button.OpenMenu').click(function () {
            console.log('CLICKED');
            $('#NoShow').removeAttr('id');

            $('div.navMenu').addClass('slideInLeft')
        })
});