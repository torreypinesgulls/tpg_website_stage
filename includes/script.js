function isWebGLSupported() {
	//To test, from terminal: open -a "Google Chrome" --args  -disable-webgl
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (
            canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
    } catch (e) {
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function() {

	//Cloud header animation 1
	const kl = document.getElementById("klouds");
	if(kl && isWebGLSupported()) { // this one not currently used
		try {
			//https://github.com/skyrim/klouds/
			var k = klouds.create({
				selector: '#klouds',
				layerCount: 45,
				speed: 1,
				cloudColor1: '#c8dff0',
				cloudColor2: '#ffffff',
				bgColor: '#ddf0fe'
			});

		} catch (error) {

		}
	}

});
