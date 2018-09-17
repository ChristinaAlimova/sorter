class Sorter {
  constructor() {
    this.elements = [];
    this.comporatorFunction = function(a,b) {return a-b};
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    indices.sort();
    var copyElements = [];
    for (var i = 0; i < indices.length; i++) {
      var index = indices[i];
      copyElements[i] = this.elements[index];
    }

    
      copyElements.sort(this.comporatorFunction);
     

    for (var i = 0; i < indices.length; i++) {
      var index = indices[i];
    this.elements[index] = copyElements[i]; 
    }
  }

  setComparator(compareFunction) {
    this.comporatorFunction = compareFunction;
  }
}

module.exports = Sorter;