
var Element = require('./element')

module.exports = PolyLine

function PolyLine(el){
  Element.call(this, el)
}

Element.extend(PolyLine)

PolyLine.prototype.point = function(x, y){
  var points = this.el.getAttribute('points') || ''
  if (points) points += ' '
  this.el.setAttribute('points', points + x + ',' + y)
  return this
}

PolyLine.prototype.width = function(n){
  this.el.setAttribute('stroke-width', n)
  return this
}
