
var join = Function.call.bind([].join)
var Element = require('./element')

module.exports = Path

function Path(el){
  Element.call(this, el)
  el.setAttribute('stroke', 'black')
  el.setAttribute('fill', 'none')
}

Element.extend(Path)

Path.prototype.line = function(x, y){
  return this.d('l', x, y)
}

Path.prototype.move = function(x, y){
  return this.d('m', x, y)
}

Path.prototype.curve = function(x1,y1,x2,y2,x3,y3){
  return arguments.length == 4
    ? this.d('q', x1 + ',' + y1,
                  x2 + ',' + y2)
    : this.d('c', x1 + ',' + y1,
                  x2 + ',' + y2,
                  x3 + ',' + y3)
}

Path.prototype.close = function(){
  return this.d('z')
}

Path.prototype.d = function(){
  var d = this.el.getAttribute('d') || ''
  if (d) d += ' '
  this.el.setAttribute('d', d + join(arguments, ' '))
  return this
}

Path.prototype.width = function(n){
  this.el.setAttribute('stroke-width', n)
  return this
}