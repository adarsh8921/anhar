jQuery(document).ready(function () {
    /**
     * Search form
     */
    let btnDelete = document.getElementById('clear');
    let inputFocus = document.getElementById('inputFocus');
    let magicSearch = document.getElementById('magic-search');

    btnDelete.addEventListener('click', function (e) {
        e.preventDefault();
        inputFocus.value = '';
    });

    document.addEventListener('click', function (e) {
        if (document.getElementById('first').contains(e.target)) {
            inputFocus.classList.add('isFocus');
            magicSearch.classList.add('focus-search');
            inputFocus.focus();
        } else {
            // Clicked outside the box
            inputFocus.classList.remove('isFocus');
            magicSearch.classList.remove('focus-search');
        }
    });

    /**
     * Mobile menu
     */
    let dropdownSwitcher;
    let dropdownMenus = jQuery('.dropdown');
    let prNav = jQuery('#pr-nav');
    let prMenu = jQuery('#primary-menu');
    let mTglIcon = jQuery('#m-tgl-icon');
    let pageBody = jQuery('body');
    let nBC1 = jQuery('#navbarColor01');

    jQuery(window).on('resize', function () {
        mobileScriptsToggle();
        hideMobileMenuResizing();
    });

    function hideMobileMenuResizing() {
        if (window.matchMedia('(min-width: 1025px)').matches) {
            if (prNav.hasClass('open-pr-nav')) {
                jQuery('#mobile-toggle').click();
            }
        }
    }

    function mobileScriptsToggle() {
        dropdownSwitcher = window.matchMedia('(max-width: 1024px)').matches;
    }

    mobileScriptsToggle();

    // Add slideDown animation to Bootstrap dropdown when expanding.
    dropdownMenus.on('show.bs.dropdown', function () {
        if (dropdownSwitcher) {
            jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown(215);
        }
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    dropdownMenus.on('hide.bs.dropdown', function () {
        if (dropdownSwitcher) {
            jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp(215, function () {
                jQuery(this).css('display', '');
            });
        }
    });

    jQuery(document).on('click', '#pr-nav .dropdown-menu', function (e) {
        e.stopPropagation();
    });

    nBC1.on('show.bs.collapse', function () {
        magicFullHeight();
        mTglIcon.toggleClass('open');
    });

    nBC1.on('shown.bs.collapse', function () {
        prNav.toggleClass('open-pr-nav');
        pageBody.css('overflow', 'hidden');
    });

    nBC1.on('hide.bs.collapse', function () {
        mTglIcon.toggleClass('open');
        pageBody.css('overflow', 'auto');
        prNav.toggleClass('open-pr-nav');
    });

    nBC1.on('hidden.bs.collapse', function () {
        prMenu.css('padding-bottom', '0');
    });

    function magicFullHeight() {
        let prNavHeight = nBC1.height();
        let wH = window.innerHeight;
        if (wH > prNavHeight) {
            prMenu.css('padding-bottom', (wH - prNavHeight - 74) + 'px');
        }
    }
});