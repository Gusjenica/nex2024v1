const carousel = {
    carouselSlider: document.querySelector(".navigation__scroller"),
    slides: [...document.querySelectorAll(".nav-item")],
    activeSlide: document.querySelector(".navigation__scroller")
        .firstElementChild,
    prevButton: document.querySelector(".carousel__btn.prev"),
    nextButton: document.querySelector(".carousel__btn.next"),

    updateButtonStates() {
        this.prevButton.disabled = !this.activeSlide?.previousElementSibling;
        this.nextButton.disabled = !this.activeSlide?.nextElementSibling;
    },

    updateUI() {
        this.slides.forEach((item) => item.classList.remove("false"));
        if (this.activeSlide) {
            this.activeSlide.classList.add("false");
            this.scrollToActiveSlide();
            this.updateButtonStates();
        }
    },

    scrollToActiveSlide() {
        const {
            offsetLeft,
            offsetTop,
            offsetWidth,
            offsetHeight
        } = this.activeSlide;
        const { clientWidth, clientHeight } = this.carouselSlider;

        this.carouselSlider.scrollTo({
            left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
            top: offsetTop - clientHeight / 2 + offsetHeight / 2,
            behavior: "smooth"
        });
    },

   handleKeydown(e) {
        const actions = {
            Home: () => this.carouselSlider.firstElementChild,
            End: () => this.carouselSlider.lastElementChild,
            ArrowLeft: () => this.activeSlide?.previousElementSibling,
            ArrowRight: () => this.activeSlide?.nextElementSibling
        };

        const newActiveSlide = actions[e.key]?.();
        if (newActiveSlide) {
            this.activeSlide = newActiveSlide;
            this.updateUI();
        }
    },

    handleButtonClick(e) {
        let newActiveSlide;
        if (
            e.target.closest(".prev") &&
            this.activeSlide?.previousElementSibling
        ) {
            newActiveSlide = this.activeSlide.previousElementSibling;
        } else if (
            e.target.closest(".next") &&
            this.activeSlide?.nextElementSibling
        ) {
            newActiveSlide = this.activeSlide.nextElementSibling;
        }

        if (newActiveSlide) {
            this.activeSlide = newActiveSlide;
            this.updateUI();
        }
    },

    handleNavigationClick(e) {
        const clickedItem = e.target.closest(".nav-item");
        if (clickedItem) {
            this.activeSlide = clickedItem;
            this.updateUI();
        }
    },

    init() {
        document.addEventListener("keydown", (e) => this.handleKeydown(e));
        this.prevButton.addEventListener("click", (e) =>
            this.handleButtonClick(e)
        );
        this.nextButton.addEventListener("click", (e) =>
            this.handleButtonClick(e)
        );
        this.carouselSlider.addEventListener("click", (e) =>
            this.handleNavigationClick(e)
        );

        this.updateUI();
    }
};

carousel.init();