module.exports = function () {
  this.coffee = function (opts) {
    var ro = opts.ro ? opts.ro : undefined
    var needInfo = opts.needInfo ? opts.needInfo : undefined

    return this.filter((data) => {
      try {
        return require('csso').justDoIt(data, ro, needInfo)
      } catch (e) {
        this.notify('plugin_error', {
          plugin: 'csso',
          error: e
        })
      }
    }).notify('plugin_run', {
      plugin: 'coffee'
    })
  }
}
