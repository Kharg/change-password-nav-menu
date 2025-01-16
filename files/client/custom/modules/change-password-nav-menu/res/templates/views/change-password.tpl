<div class="page-header">
    <h3>{{translate 'Change Password' scope='User'}}</h3>
</div>

<div class="row">
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-body">
            <div class="row">
            <div class="cell form-group col-md-12" data-name="currentPassword">
                <label class="control-label" data-name="currentPassword">
                    {{translate 'currentPassword' scope='User' category='fields'}}
                </label>
                <div class="field" data-name="currentPassword">{{{currentPassword}}}</div>
            </div>
        </div>
        <div class="row">
            <div class="cell form-group col-md-12" data-name="password">
                <label class="control-label" data-name="password">
                    {{translate 'newPassword' scope='User' category='fields'}}
                </label>
                <div class="field" data-name="password">{{{password}}}</div>
            </div>
        </div>
        <div class="row">
            <div class="cell form-group col-md-12" data-name="passwordConfirm">
                <label class="control-label" data-name="passwordConfirm">
                    {{translate 'passwordConfirm' scope='User' category='fields'}}
                </label>
                <div class="field" data-name="passwordConfirm">{{{passwordConfirm}}}</div>
            </div>
        </div>
        
        <!-- Buttons Section -->
        <div class="row">
            <div class="col-md-12">
                <button type="button" class="btn btn-danger" data-name="change">
                {{translate 'Change'}}
                </button>
                <button type="button" class="btn btn-default" data-name="cancel">
                    {{translate 'Cancel'}}
                </button>
            </div>
        </div>
            </div>
        </div>

    </div>
</div>