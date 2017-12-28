var angular = require('angular');

var StorageProvider = require('../../providers/storage.js');
var VersionControlSystemsController = require('../../controllers/version_control_systems.js');
var VersionControlSystemsService = require('../../services/version_control_systems.js');

var app = angular.module('DashboardApp', [])
    .provider('storage', StorageProvider)
    .config(function (storageProvider) {
        storageProvider.load(BROWSER);
    })
    .service('versionControlSystemsService', ['storage', VersionControlSystemsService])
    .controller('VersionControlSystemsController', ['versionControlSystemsService', '$scope', '$interval', VersionControlSystemsController]);
