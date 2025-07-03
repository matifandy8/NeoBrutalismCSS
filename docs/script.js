const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const codeToCopy = button.nextElementSibling;

    const textToCopy = codeToCopy.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand("copy");

    document.body.removeChild(textArea);

    const notification = document.createElement('div');
    notification.textContent = 'Code copied to clipboard!';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #0077b6;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      font-family: 'Public Sans', sans-serif;
      font-size: 14px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('#sidebar');
    const overlay = document.querySelector('.overlay');

    if (mobileNavToggle && sidebar && overlay) {
        const closeSidebar = () => {
            sidebar.classList.remove('visible');
            overlay.classList.remove('visible');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        };

        mobileNavToggle.addEventListener('click', () => {
            const isVisible = sidebar.classList.contains('visible');
            if (isVisible) {
                closeSidebar();
            } else {
                sidebar.classList.add('visible');
                overlay.classList.add('visible');
                mobileNavToggle.setAttribute('aria-expanded', 'true');
            }
        });

        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(closeSidebar, 100);
            });
        });

        overlay.addEventListener('click', closeSidebar);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('visible')) {
                closeSidebar();
            }
        });
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const buttons = document.querySelectorAll('.nb-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('loading')) return;
            
            const originalText = this.textContent;
            this.classList.add('loading');
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = originalText;
                this.style.pointerEvents = '';
            }, 1000);
        });
    });
});
