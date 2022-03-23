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
  add(key, value) {
    var index = this.get_index(key)
    if(index != -1){
      this.elements[index].value = value 
    }
    else{
      if(typeof key === "string")
        this.elements.push({"key":key,"value":value}) 
    }   
  }
  remove(key){
    var index = this.get_index(key)
    if(index != -1){
      this.elements.splice(index,1)
    }  
  }
}