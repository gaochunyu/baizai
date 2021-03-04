export const frame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

export const cancel = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame;

export const mapAnimation = {
    frameId: null,
    timeoutId: null,

    clearMapAnimation() {
        if (mapAnimation.frameId) cancel(mapAnimation.frameId);
        mapAnimation.frameId = null;
        if (mapAnimation.timeoutId) clearTimeout(mapAnimation.timeoutId);
        mapAnimation.timeoutId = null;
    },

    startMapAnimation(map, routes) {
        mapAnimation.clearMapAnimation();
        if (!map) return;

        const getRouteOption = (route) => {
            const time = parseFloat(route.time) * 1000;
            const zoom = parseFloat(route.zoom);
            const bearing = parseFloat(route.bearing);
            const pitch = parseFloat(route.pitch);
            return {
                center: route.center,
                zoom: zoom,
                bearing: bearing,
                pitch: pitch,
                duration: time,
                callback: route.callback
            };
        };

        let counter = 0;
        const step = routes.length;
        const animate = () => {
            if (counter < step) {
                const option = getRouteOption(routes[counter]);
                map.easeTo({
                    center: option.center,
                    zoom: option.zoom,
                    bearing: option.bearing,
                    pitch: option.pitch,
                    duration: option.duration
                });
                const timeout = option.duration;
                mapAnimation.timeoutId = setTimeout(() => {
                    counter = counter + 1;
                    mapAnimation.frameId = frame(animate);
                    clearTimeout(mapAnimation.timeoutId);
                    mapAnimation.timeoutId = null;
                }, timeout);
                if (option.callback) {
                    option.callback();
                }
            }
        };
        animate();
    }
};