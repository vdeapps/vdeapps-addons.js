/*
 * Copyright vdeapps 2018
 */
class vdeappsAddons {
    
    /**
     * Constructor
     * @param addons list of addons for init [{ addon: new addon(), order: 5 }, {...} ]
     */
    constructor(addons=null) {
        this.vendor = 'vdeapps';
        this.addons = {};
        this.addonsIndex = {};
    
        /**
         * Test if there are addons to parameter
         */
        if (Object.prototype.toString.call(addons) === '[object Array]' ){
            let nbAddon = addons.length;
            
            for (let i=0; i<nbAddon; i++){
                let addon = addons[i];
                
                if (typeof addon.addon == undefined){
                    addon.addon = 'Error';
                    addon.order = 0;
                }
                
                this.add(addon.addon, addon.order);
            }
        }
    }
    
    /**
     * Init all Addons
     */
    init() {
        for (let name in this.addonsIndex) {
            
            console.info("Run init: " + name)
            
            try {
                this[name].init()
            }
            catch (error) {
            
            }
        }
    }
    
    /**
     * Run all ready when document is ready
     */
    onReady() {
        
        for (let name in this.addonsIndex) {
            
            console.info("Run init: " + name)
            
            try {
                this[name].onReady()
            }
            catch (error) {
            
            }
        }
        
    }
    
    onUnload() {
        for (let name in this.addonsIndex) {
            
            console.info("Run init: " + name)
            
            try {
                this[name].onUnload()
            }
            catch (error) {
            
            }
        }
    }
    
    /**
     * Append new vdeappsAddon
     * @param vdeappsAddonClass
     * @param position order of object
     */
    add(vdeappsAddonObject, position = 10) {
        console.info(vdeappsAddonObject);
        
        try {
            if (vdeappsAddonObject.getParentName() === 'vdeappsAddonAbstract') {
                
                console.info("Addon ok")
                let name = vdeappsAddonObject.getName();
                
                // Assign addon
                this[name] = vdeappsAddonObject;
                
                // Ajout de l'addon
                this.addons[name] = true;
                
                // Order of object
                this.addonsIndex[vdeappsHelper.str_pad(position, 3, '0', 'STR_PAD_LEFT') + '-' + name] = name;
            }
        }
        catch (error) {
            throw new Error("vdeappsAddonObject parameter is not from vdeappsAddonAbstract !");
        }
        
        return this;
    }
    
    /**
     * Return an addon
     * @param addonName
     * @returns {*}
     */
    get(addonName) {
        if (typeof this.addons[addonName] != undefined) {
            return this.addons[addonName];
        }
        else {
            throw new Error(addonName + " object not found !");
        }
    }
}

/**
 * Abstract class for vdeappsAddons
 *
 * All new plugins must extends of vdeappsAddonAbstract
 */
class vdeappsAddonAbstract {
    
    constructor() {
        this.name = this.constructor;
        
        if (this.constructor === vdeappsAddonAbstract) {
            throw new Error("Can't instantiate abstract class " + this.constructor + "!");
        }
    }
    
    getParentName() {
        return 'vdeappsAddonAbstract';
    }
    
    setName(addonName) {
        this.name = addonName;
    }
    
    getName() {
        return (this.name)
    }
    
    /**
     * Init vars
     */
    init() {
    }
    
    /**
     * load onready
     */
    onReady() {
    }
    
    /**
     * Run when unload page
     */
    onUnload() {
    }
}
