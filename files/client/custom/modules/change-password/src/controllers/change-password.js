define('change-password:controllers/change-password', ['controllers/base'], (Dep) => {
    return class extends Dep {

        actionIndex() {
            this.main('change-password:views/change-password-page', null);
        }
    };
});