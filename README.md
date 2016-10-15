
## Usage
npm i -g fis3-postprocessor-less-autoprefix

fis.match('/client/**.less', {
    postprocessor: fis.plugin('less-autoprefix')
});


fis.match('/client/**.less', {
    postprocessor: fis.plugin('less-autoprefix',{
        browsers: ["last 20 versions"] 
    })
});

