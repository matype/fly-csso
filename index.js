module.exports = function () {
    this.filter('csso', (src, opts) => {
        var ro = opts.ro ? opts.ro : undefined
        var needInfo = opts.needInfo ? opts.needInfo : undefined

        try {
            return require('csso').justDoIt(src, ro, needInfo)
        } catch (e) { throw e }
    })
}
