define('change-password:handlers/navbar-menu', ['action-handler'], (Dep) => {
    return class extends Dep {

        changePassword() {
            Espo.Ui.notify(' ... ');

            this.view.createView('changePassword', 'views/modals/change-password', {userId: this.view.getUser().id}, view => {
                view.render();
                Espo.Ui.notify(false);
    
                this.view.listenToOnce(view, 'changed', () => {
                    setTimeout(() => {
                        this.view.getBaseController().logout();
                    }, 2000);
                });
            });
        }
    };
});
