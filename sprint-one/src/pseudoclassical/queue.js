var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.size = function() {
  return this.end - this.start > 0 ? this.end - this.start : 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.end > 0) {
    var dequeued = this.storage[this.start];
    delete this.storage[this.start++];

    return dequeued;
  }
}

