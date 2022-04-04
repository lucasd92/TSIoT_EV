module.exports = class List {
  elements
  constructor(){
    this.elements = []
  }
    
  count() {
    return this.elements.length
  }
  get_index(key){
    return this.elements.findIndex((element)=> element.key == key ) 
  }
  find(key) {
    var index
    if (this.elements.length == 0)
      return null
    index = this.get_index(key)
    if(index != -1)
      return this.elements[index].value      
  }
  add(key, value, position = "end") {
    var index = this.get_index(key)
    if(index != -1){
      this.elements[index].value = value 
    }
    else{
      if(typeof key === "string")
        this.elements.splice(position === "beginning"?0:this.elements.length, 0, {"key":key,"value":value}) 
    }   
  }
  remove(key){
    var index = this.get_index(key)
    if(index != -1){
      this.elements.splice(index,1)
    }  
  }
  getOrderedKeys(){
    if(this.elements.length > 0){
      var mapped = this.elements.map((el, i) => {return { index: i, value: el.key.toLowerCase() }}) 
      console.log(mapped)
      mapped.sort(function(a, b) {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        return 0;
      });

      return  mapped.map((el) => this.elements[el.index].key )
    }
    return []
  }
}