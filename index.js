module.exports = function () {
  this.filter("csso", (src, opts) => {
    let ro = opts.ro ? opts.ro : undefined
    let needInfo = opts.needInfo ? opts.needInfo : undefined

    try {
      return require("csso").justDoIt(src, ro, needInfo)
    } catch (e) { throw e }
  })
}
