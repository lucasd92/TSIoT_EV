const { assert } = require("chai");
const List = require("../src/lista.js")
const expect = require("chai").expect;

describe("lista de pares clave:valor",function(){
    describe("Es una lista vacía", function(){
        var lista = new List()  
        it("hay cero elementos almacenados", function() {
            assert.equal(lista.count(), 0)
        })

        it("No se encuentra clave", function() {
            assert.isNull(lista.find("first"))
        })
    })

    describe("cuando se agrega elemento a lista vacía", function() {
        var lista = new List()
        lista.add("first",5)

        it("hay un elemento almacenado", function(){
            assert.equal(lista.count(), 1)
        })

        it("Se recupera valor almacenado a partir de la clave", function(){
            assert.equal(lista.find("first"), 5)
        })
    })
    // describe("cuando se agrega un elemento duplicado a la lista", function() {
    //     var list = new List()
    //     list.add("primera",5)
    //     list.add("primera",8)
    //     it("No se aumenta el tamaño", function(){
    //         assert.equal(list.count(), 1)
    //     })

    //     it("Se actualiza el valor", function(){
    //         assert.equal(list.find("primera"), 8)
    //     })
        
        
    //     it("Se aumenta el tamaño", function(){
    //         list.add("segunda",3)
    //         assert.equal(list.count(), 2)
    //     })

    //     it("Se actualiza el valor", function(){
    //         list.add("segunda",0)
    //         assert.equal(list.find("segunda"), 0)
    //     })
    // })

})