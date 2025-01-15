define('change-password:controllers/settings', ['controllers/admin'], (Dep) => {
    return class extends Dep {

        defaultAction = 'index'

        checkAccess() {
            if (this.getUser().isAdmin()) {
                return true;
            }

            return false;
        }

        index() {
            const model = this.getSettingsModel();

            model.once('sync', function () {
                model.id = '1';
                this.main('views/settings/edit', {
                    model: model,
                    headerTemplate: 'change-password:views/admin/settings-header',
                    recordView: 'change-password:views/admin/settings'
                });
            }, this);
            model.fetch();
        }
    };
});