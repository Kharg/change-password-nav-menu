define('change-password:views/admin/settings', ['views/settings/record/edit'], (Dep) => {
    return class extends Dep {

        gridLayoutType = 'record'

        setup() {
            super.setup();

            this.events['click button[data-action="save"]'] = () => {
                this.actionSave();
                this.broadcastUpdate();
            };
            
            this.events['click button[data-action="cancel"]'] = () => {
                this.cancel();
            };
            
            this.events['click button[data-action="resetToDefault"]'] = () => {
                this.confirm(this.translate('confirmation', 'messages'), () => {
                    this.resetToDefault();
                    this.broadcastUpdate();
                });
            };

            this.buttonList = [
                {
                    name: 'save',
                    label: 'Save',
                    style: 'primary',
                    title: 'Ctrl+Enter',
                },
                {
                    name: 'cancel',
                    label: 'Cancel',
                },
                {
                    name: 'resetToDefault',
                    label: 'Restore',
                }
            ];
    
            this.detailLayout = [
                {
                    "rows": [
                        [{"name": "changePasswordMenuItemDisabled"}],
                    ],
                    "style": "warning",
                    "label": "Change Password Extension Settings"
                }
            ];
        }

        afterSave() {
            Dep.prototype.afterSave.call(this);
            window.location.reload();
        }

        resetToDefault() {
            Espo.Ajax
            .putRequest('Settings/1', {
                changePasswordMenuItemDisabled: this.getMetadata().get(['entityDefs', this.scope, 'fields', 'changePasswordMenuItemDisabled', 'default']),
            })
            .then(response => {
                this.model.fetch();
                window.location.reload();
            });
        }

        broadcastUpdate() {
            this.getHelper().broadcastChannel.postMessage('reload');
        }
    };
});