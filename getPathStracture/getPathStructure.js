function getPathStructure(url, get_first, get_last, get_separate) {
    // initialize
    var str = url || location.href;
    var output_first = get_first || 0;
    var output_end = get_last || null;
    var sep = get_separate || ":";
    var reg = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    var mat = str.match(reg);

    var path_array = [];
    var return_object = "";

    var m = str.match(reg);

    if (!m) {
        return false;
    }

    // get path
    path_array = m[3].slice(1).split("/");

    if (m[3] === "/") {
        return null;
    }

    if (path_array.length < get_first) {
        return false;
    }

    // check output size
    if (output_end > path_array.length || output_end === null) {
        output_end = path_array.length;
    }

    for (var i = 0; i < path_array.length; i++) {
        if (i < output_first) {
            continue;
        }
        if (i >= output_first + output_end) {
            break;
        }
        if (return_object !== "") {
            return_object += sep;
        }

        return_object += path_array[i];
    }
    return return_object;
}