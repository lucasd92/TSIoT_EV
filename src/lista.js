module.exports = class List {
    elements
    constructor(){
        this.elements = []
    }
    
    count() {
        return this.elements.length
    }
    get_index(key){
        return this.elements.map((element,index)=>{
            if(element.key == key){
                console.log("encontré la key")
                console.log(index)
                console.log(key)
                return index
            }
                
        }) 
    }
    find(key) {
        var index
        if (this.elements.length == 0)
            return null
        index = this.get_index(key)
        if(index != null)
            return this.elements[index].value
    }
    add(clave, valor) {
        var index = this.get_index(clave)
        console.log("Acá hay un problema con el valor de retorno")
        console.log(index)
        if(index.length > 0){
           this.elements[index].value = valor 
        }
        else{
           this.elements.push({"key":clave,"value":valor}) 
        }
            
    }
}