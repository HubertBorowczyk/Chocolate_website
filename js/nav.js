window.onload = function () {
    var navigation = document.querySelector('.header-nav ul');
    var navButton  = document.querySelector('.menu-btn');

    navButton.onclick = function () {
        navButton.classList.toggle('change');
        if (navigation.style.display === 'block') {
            navigation.style.display = 'none';
        } else {
            navigation.style.display = 'block';
        }
    };

    function test_match_media_with_listener() {
        var mq = window.matchMedia('(min-width:1024px)');
        mq.addListener(widthChange);
        widthChange(mq);
        function widthChange(mediaQuery) {
            if (mediaQuery.matches) {
                navButton.style.display = 'none';
                navigation.style.display = 'block';
            } else {
                navigation.style.display = 'none';
                navButton.style.display = 'block';
            }
        }
    }

    test_match_media_with_listener();
};
