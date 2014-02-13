var subStorage = function (name, type) {
    if (typeof type === "undefined") {
        type = sessionStorage;
    }
    return {
        getItem: function (str) {
            var a = type.getItem(name);
            if (a === null || a === "") {
                a = {};
            } else {
                a = JSON.parse(a);
            }
            return a[str];
        },
        setItem: function (str, str2) {
            var a = type.getItem(name);
            if (a === null || a === "") {
                a = {};
            } else {
                a = JSON.parse(a);
            }
            a[str] = str2;
            type.setItem(name, JSON.stringify(a));
        }
    };
};
