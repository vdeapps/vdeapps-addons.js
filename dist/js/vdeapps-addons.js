'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright vdeapps 2018
 */
var vdeappsAddons = function () {

    /**
     * Constructor
     * @param addons list of addons for init [{ addon: new addon(), order: 5 }, {...} ]
     */
    function vdeappsAddons() {
        var addons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, vdeappsAddons);

        this.vendor = 'vdeapps';
        this.addons = {};
        this.addonsIndex = {};

        /**
         * Test if there are addons to parameter
         */
        if (Object.prototype.toString.call(addons) === '[object Array]') {
            var nbAddon = addons.length;

            for (var i = 0; i < nbAddon; i++) {
                var addon = addons[i];

                console.log(addon);

                this.add(addon);
            }
        }
    }

    /**
     * Init all Addons
     */


    _createClass(vdeappsAddons, [{
        key: 'init',
        value: function init() {
            for (var name in this.addonsIndex) {

                console.info("Run init: " + name);

                try {
                    this[name].init();
                } catch (error) {}
            }
        }

        /**
         * Run all ready when document is ready
         */

    }, {
        key: 'onReady',
        value: function onReady() {

            for (var name in this.addonsIndex) {

                console.info("Run init: " + name);

                try {
                    this[name].onReady();
                } catch (error) {}
            }
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            for (var name in this.addonsIndex) {

                console.info("Run init: " + name);

                try {
                    this[name].onUnload();
                } catch (error) {}
            }
        }

        /**
         * Append new vdeappsAddon
         * @param vdeappsAddonClass
         * @param position order of object
         */

    }, {
        key: 'add',
        value: function add(vdeappsAddonObject) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

            console.info(vdeappsAddonObject);

            try {
                if (vdeappsAddonObject.getParentName() === 'vdeappsAddonAbstract') {

                    console.info("Addon ok");
                    var name = vdeappsAddonObject.getName();

                    // Test if already loaded
                    // if (typeof this[name] != undefined) {
                    //     return this;
                    // }

                    // Assign addon
                    this[name] = vdeappsAddonObject;

                    // Ajout de l'addon
                    this.addons[name] = true;

                    // Order of object
                    this.addonsIndex[helper.str_pad(position, 3, '0', 'STR_PAD_LEFT') + '-' + name] = name;
                }
            } catch (error) {
                throw new Error("vdeappsAddonObject parameter is not from vdeappsAddonAbstract !");
            }

            return this;
        }

        /**
         * Return an addon
         * @param addonName
         * @returns {*}
         */

    }, {
        key: 'get',
        value: function get(addonName) {
            if (_typeof(this.addons[addonName]) != undefined) {
                return this.addons[addonName];
            } else {
                throw new Error(addonName + " object not found !");
            }
        }
    }]);

    return vdeappsAddons;
}();

/**
 * Abstract class for vdeappsAddons
 *
 * All new plugins must extends of vdeappsAddonAbstract
 */


var vdeappsAddonAbstract = function () {
    function vdeappsAddonAbstract() {
        _classCallCheck(this, vdeappsAddonAbstract);

        this.name = this.constructor;

        if (this.constructor === vdeappsAddonAbstract) {
            throw new Error("Can't instantiate abstract class " + this.constructor + "!");
        }
    }

    _createClass(vdeappsAddonAbstract, [{
        key: 'getParentName',
        value: function getParentName() {
            return 'vdeappsAddonAbstract';
        }
    }, {
        key: 'setName',
        value: function setName(addonName) {
            this.name = addonName;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }

        /**
         * Init vars
         */

    }, {
        key: 'init',
        value: function init() {}

        /**
         * load onready
         */

    }, {
        key: 'onReady',
        value: function onReady() {}

        /**
         * Run when unload page
         */

    }, {
        key: 'onUnload',
        value: function onUnload() {}
    }]);

    return vdeappsAddonAbstract;
}();