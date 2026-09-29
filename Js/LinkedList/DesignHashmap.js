var MyHashMap = function() {
  this.map = []
};

MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value
};

MyHashMap.prototype.get = function(key) {
  if(this.map[key] === undefined)   return -1
  return this.map[key]
};

MyHashMap.prototype.remove = function(key) {
  delete this.map[key]
};