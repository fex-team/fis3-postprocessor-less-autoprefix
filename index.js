module.exports = function (content, file, conf) {
    var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
        less = require('less'),
        autoprefixPlugin = new LessPluginAutoPrefix({
             browsers: conf.browsers?conf.browsers:["last 3 versions"]
        });
        var res = '';
        less.render(content, { plugins: [autoprefixPlugin] }).then(function (output) {
            res = output;
        });
        while(res === ''){require('deasync').sleep(100);}
        return res.css;
};

