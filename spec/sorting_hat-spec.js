var sorting_hat = function(arr){
    // Checking for proper type of input
    if(!Array.isArray(arr) || !arr.length>0 || !arr.every(person=> typeof person === "string")){
        throw new TypeError;
    }

    var output = []; // the array that gets returned
    var houses = [ "Gryffindor","Hufflepuff","Ravenclaw","Slytherin"];

    // looping through the input array and assigning house
    for(var i = 0; i<arr.length;i++){
        var person = arr[i];
        if(person === "Harry Potter"){
            output.push("Gryffindor");
        }else if(person === "Voldemort"){
            output.push("Slytherin");
        }else{
            var house = houses[Math.floor(Math.random()*houses.length)]; //random house
            output.push(house);
        }
    }

    return output;
}

////////////////////
//// Unit Tests ////
////////////////////

// Unit tests for "sorting_hat" function
    // it should throw an error if argument given is not an array of strings (names) with at least 1 element

    // it should return another array of the same length as the given array
    
    // it should return an array consisting of only strings (names) of Hogwarts Houses ('Gryffindor','Hufflepuff', 'Ravenclaw','Slytherin
    
    // it should assign 'Gryffindor' to 'Harry Potter', if the name appears in the given array

    // it should assign 'Slytherin' to 'Voldemort', if the name appears in the given array

    describe("sorting_hat", function(){
        it("should be a function", function(){
            expect(sorting_hat instanceof Function).toBeTruthy();
        })

        it("should return another array of same length as given array", function(){
            expect(sorting_hat(["Harry Potter"]).length === 1)
            expect(sorting_hat(["Harry Potter"])).toContain("Gryffindor")
        })

        it("should assign Gryffindor to Harry Potter if the name appears in the given array", function(){
            expect(sorting_hat(["Voldemort", "Harry Potter"])[1] === "Gryffindor")
        })

        it("should assign Slytherin to Voldemort if the name appears in the given array", function(){
            expect(sorting_hat(["Harry Potter", "Voldemort"])[1] === "Slytherin")
        })
    })