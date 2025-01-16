define('change-password-nav-menu:controllers/change-password', ['controllers/base'], (Dep) => {
    return class extends Dep {

        actionIndex() {
            this.main('change-password-nav-menu:views/change-password-page', null);
        }
    };
});