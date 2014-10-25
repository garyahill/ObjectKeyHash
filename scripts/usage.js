/**
 * Created by hillga on 10/25/2014.
 */

//Example Usage:  This a contrived example, but it shows how an instance of the ObjectKeyHash can be used as a data structure
//Make sure the ObjectKeyHash is in scope

//Create a new instance of the hashtable-like object
var myHash = new ObjectKeyHash();

//Create two objects to associate with each other
var objUI = {
    type: 'UI',
    doSomething: function (model) {
        alert(model.name);
    }
};

var objModel = {
    type: 'Model',
    name: "Potato"
};

//Pair the items
myHash.setPair(objUI, objModel); //Pair apple object with fruit object

//Retrieve each object via its associated object
var myModel = myHash.getAssociatedObject(objUI);
var myUI = myHash.getAssociatedObject(objModel);

//log the type for each
console.log(myModel.type); //Logs -> "UI"
console.log(myUI.type);    //Logs -> "Model"
myUI.doSomething(myModel); //Alerts -> "Potato"