//要开启eslint
//首先要安装eslint-loader ， 其次是编写一个.eslintrc.(js|json|等满足格式要求的文件)
module.exports = {
    "parser" : "babel-eslint",
    "rules": {
        "no-extra-semi" : [2 , 'always'], //不允许出现不必要的分号
    }
}