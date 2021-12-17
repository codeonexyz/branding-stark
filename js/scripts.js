$(window).on("DOMContentLoaded", () => {

    // Navbar shrink function
    const navbarShrink = () => {
        const navbarCollapsible = $("#main-nav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.removeClass("navbar-shrink");
        } else {
            navbarCollapsible.addClass("navbar-shrink");
        }
    }

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    $(document).on("scroll", navbarShrink);


    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = $("#main-nav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#main-nav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = $('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        $('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(responsiveNavItem => {
        $(responsiveNavItem).on("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    })
});

/*window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});*/