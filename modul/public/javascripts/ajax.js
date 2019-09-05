define(["jquery"], function ($) {
    return {
        post: function (url, data) {
            return $.post({
                url: url,
                data: JSON.stringify(data),
                contentType: "application/JSON"
            });
        },
        get: function (url, data) {
            return $.get(url, data);
        }
    };
});