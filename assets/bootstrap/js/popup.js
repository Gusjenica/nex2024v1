const popup = document.querySelector('.popup');
        const x = document.querySelector('.popup-content button')

        window.addEventListener('load', () => {
            popup.classList.add('showPopup'),
            document.getElementById("menu-5-uaMcZ6xteA").style.display = 'none';
            popup.childNodes[1].classList.add('showPopup');
        })
        x.addEventListener('click', () => {
            popup.classList.remove('showPopup'),
            document.getElementById("menu-5-uaMcZ6xteA").style.display = 'flex';
            popup.childNodes[1].classList.remove('showPopup');
        })