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

  describe("Cuando se agrega elemento clave:valor a lista vacía", function() {
    var lista = new List()
    lista.add("first",5)

    it("Se recupera cantidad elementos: hay un elemento", function(){
      assert.equal(lista.count(), 1)
    })

    it("Se recupera valor almacenado a partir de la clave", function(){
      assert.equal(lista.find("first"), 5)
    })
  })
  describe("Cuando se agrega un elemento duplicado a la lista", function() {
    var list = new List()
    list.add("primera",5)
    list.add("primera",8)
    it("No se aumenta el tamaño", function(){
      assert.equal(list.count(), 1)
    })

    it("En su lugar, se actualiza el valor", function(){
      assert.equal(list.find("primera"), 8)
    })
    
    
    it("Si el elemento es distinto, se aumenta el tamaño", function(){
      list.add("segunda",3)
      assert.equal(list.count(), 2)
    })
  })
  describe("Cuando se agrega clave que no sea string", function() {
    var list = new List()
    list.add("primera",5)
    list.add(6,5)
    it("No se aumenta el tamaño", function(){
        assert.equal(list.count(), 1)
    })
  })
  describe("Si elimino elemento", function() {
    var list = new List()
    list.add("primera",5)
    list.add("segunda",3)
    list.remove("segunda")
    it("El tamaño se reduce", function(){
        assert.equal(list.count(), 1)
    })
  })
  describe("A partir de la lista", function() {
    var list = new List()
    
    it("Puedo recuperar una lista vacía con claves almacenadas ordenadas", function(){
      assert.sameOrderedMembers(list.getOrderedKeys(),[])
    })

    it("Puedo recuperar una lista con un elemento y claves almacenadas ordenadas", function(){
        list.add("primera",5)
        assert.sameOrderedMembers(list.getOrderedKeys(),["primera"])
    })
    
    it("Con un nuevo elemento al final, la lista sigue ordenada", function(){
      list.add("aaa",5)
      assert.sameOrderedMembers(list.getOrderedKeys(),["aaa","primera"])
    })

    it("Con un nuevo elemento al inicio, la lista sigue ordenada", function(){
      list.add("bbb",5,"beginning")
      assert.sameOrderedMembers(list.getOrderedKeys(),["aaa","bbb","primera"])
    })

  })

})