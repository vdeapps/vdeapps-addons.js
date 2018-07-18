# vdeappsAddons.js

Manage all vdeapps addons

## example
 
 ```
 var app = new vdeappsAddons()
 
 app.add( new helper(), 5);  // 5 is Position of loading for init, onReady and onUnload
 // class helper must be extends of vdeappsAddonsAbstract.

 app.add( new ..., 10);
 
 app.init(); // Init each addon
 
 // Call all onReady method of each addon.
 // The order of call is set when you add addon.
 $(document).ready(function(){
      app.onReady();
 }); 
 
 
 app.helper.method();  // Call method of helper addon
 ```
 