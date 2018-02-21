const ms2Mn = {}

function convertMs2Mn(ms) {
    const min = Math.floor(ms / 60000)
    const sec = ((ms % 60000 / 1000).toFixed(0))
    return `${min}:${sec}`
}
ms2Mn.install = function (Vue) {
    Vue.filter('ms-to-mm', (val) => {
        return convertMs2Mn(val)
    })
}

export default ms2Mn