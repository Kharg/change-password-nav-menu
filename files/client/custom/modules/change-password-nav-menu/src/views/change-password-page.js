define('change-password-nav-menu:views/change-password-page', ['views/base'], (Dep) => {
    return class extends Dep {
        template = 'change-password-nav-menu:views/change-password';
        cssName = 'change-password';

        setup() {

            const promise = this.getModelFactory().create('User', user => {
                this.model = user;

                this.createView('currentPassword', 'views/fields/password', {
                    model: user,
                    mode: 'edit',
                    selector: '.field[data-name="currentPassword"]',
                    defs: {
                        name: 'currentPassword',
                        params: {
                            required: true,
                        },
                    },
                });

                this.createView('password', 'views/user/fields/password', {
                    model: user,
                    mode: 'edit',
                    selector: '.field[data-name="password"]',
                    defs: {
                        name: 'password',
                        params: {
                            required: true,
                        },
                    },
                });

                this.createView('passwordConfirm', 'views/fields/password', {
                    model: user,
                    mode: 'edit',
                    selector: '.field[data-name="passwordConfirm"]',
                    defs: {
                        name: 'passwordConfirm',
                        params: {
                            required: true,
                        },
                    },
                });
            });

            this.wait(promise);
        }

        // Event listeners for buttons
        afterRender() {
            this.$el.find('button[data-name="change"]').on('click', () => this.actionChange());
            this.$el.find('button[data-name="cancel"]').on('click', () => this.getRouter().navigate('#', {trigger: true}));
        }

        getFieldView(name) {
            return this.getView(name);
        }

        actionChange() {
            this.getFieldView('currentPassword').fetchToModel();
            this.getFieldView('password').fetchToModel();
            this.getFieldView('passwordConfirm').fetchToModel();

            const notValid =
                this.getFieldView('currentPassword').validate() ||
                this.getFieldView('password').validate() ||
                this.getFieldView('passwordConfirm').validate();

            if (notValid) {
                return;
            }

            this.$el.find('button[data-name="change"]').addClass('disabled');

            Espo.Ajax
                .putRequest('UserSecurity/password', {
                    currentPassword: this.model.get('currentPassword'),
                    password: this.model.get('password'),
                })
                .then(() => {
                    Espo.Ui.success(this.translate('passwordChanged', 'messages', 'User'));
                    this.trigger('changed');
                    this.close();
                })
                .catch(() => {
                    this.$el.find('button[data-name="change"]').removeClass('disabled');
                });
        }
    };
});