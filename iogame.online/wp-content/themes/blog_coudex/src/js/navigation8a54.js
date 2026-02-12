/**
 * Menu functionality for both desktop and mobile
 */
document.addEventListener('DOMContentLoaded', function() {
    // ==== Mobile menu toggle ====
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconClosed = document.getElementById('menu-icon-closed');
    const menuIconOpen = document.getElementById('menu-icon-open');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
            menuIconClosed.classList.toggle('hidden');
            menuIconOpen.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden', !expanded);
        });
    }
    
    // ==== Submenu toggles ====
    
    // For mobile menus
    document.querySelectorAll('.mobile-menu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const listItem = this.closest('li');
            const submenu = listItem.querySelector('ul');
            if (!submenu) return;
            
            // Toggle submenu visibility
            submenu.classList.toggle('hidden');
            
            // Rotate arrow icon
            const arrow = this.querySelector('svg');
            if (arrow) {
                arrow.style.transform = submenu.classList.contains('hidden') ? '' : 'rotate(180deg)';
            }
        });
    });
    
    // For desktop menus
    document.querySelectorAll('.desktop-menu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const listItem = this.closest('li');
            const submenu = listItem.querySelector('ul');
            if (!submenu) return;
            
            // Close all other open submenus first
            document.querySelectorAll('.desktop-menu-toggle').forEach(otherToggle => {
                if (otherToggle !== this) {
                    const otherListItem = otherToggle.closest('li');
                    const otherSubmenu = otherListItem.querySelector('ul');
                    if (otherSubmenu && !otherSubmenu.classList.contains('hidden')) {
                        otherSubmenu.classList.add('hidden');
                        const otherArrow = otherToggle.querySelector('svg');
                        if (otherArrow) otherArrow.style.transform = '';
                    }
                }
            });
            
            // Toggle current submenu
            submenu.classList.toggle('hidden');
            
            // Rotate arrow icon
            const arrow = this.querySelector('svg');
            if (arrow) {
                arrow.style.transform = submenu.classList.contains('hidden') ? '' : 'rotate(180deg)';
            }
        });
    });
    
    // Close submenus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-item-has-children')) {
            document.querySelectorAll('.menu-item-has-children ul').forEach(submenu => {
                submenu.classList.add('hidden');
            });
            
            document.querySelectorAll('.desktop-menu-toggle svg, .mobile-menu-toggle svg').forEach(arrow => {
                arrow.style.transform = '';
            });
        }
    });
});