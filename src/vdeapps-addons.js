/**
 * @copyright vdeapps
 *
 * vdeappsAddons
 * @description Manage vdeapps addons
 * @example var addons = new vdeappsAddons()
 * addons.add( new helper(), 5);  // 5 is Position of loading for init, onReady and onUnload
 * addons.helper.method();  // Call method of helper addon
 */
class vdeappsAddons {
    
    constructor() {
        this.vendor = 'vdeapps';
        this.addons = {};
        this.addonsIndex = {};
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
