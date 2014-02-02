function getLocation(url) {
    // initialize
    var str = url || location.href
    var reg = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    var mat = str.math(reg);
    var return_object = {
        "uri": str,
        "scheme": null,
        "authority": null,
        "path": null,
        "query": null,
        "fragment": null
    };

    if (m) {
        return_object.scheme = m[1];
        return_object.authority = m[2];
        return_object.path = m[3];
        return_object.query = m[4];
        return_object.fragment = m[5];
    } else {
        return_object = false;
    }

    return return_object;
}