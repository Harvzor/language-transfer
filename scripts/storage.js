var storage = function() {
    let tracks = function() {
        let key = 'tracks';

        let get = () => {
            return JSON.parse(localStorage.getItem(key));
        };

        let set = (data) => {
            localStorage.setItem(key, JSON.stringify(data));
        };

        return {
            get: get,
            set: set
        };
    }();

    let settings = function() {
        let key = 'settings';

        let get = () => {
            return JSON.parse(localStorage.getItem(key));
        };

        let set = (data) => {
            // Keep awake won't run unless on a click event, so saving it is pointless.
            data.keepAwake = false;

            localStorage.setItem(key, JSON.stringify(data));
        };

        return {
            get: get,
            set: set
        };
    }();

    return {
        tracks: tracks,
        settings: settings
    };
}();