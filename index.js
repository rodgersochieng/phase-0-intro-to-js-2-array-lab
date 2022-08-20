const cats =["Milo", "Otis", "Garfield"];
 
function destructivelyAppendCat(tom){
    cats.push(tom);
}
 
 function destructivelyPrependCat(tom){
    cats.unshift(tom)
 }
 function destructivelyRemoveLastCat(){
    cats.pop();
 }

   function destructivelyRemoveFirstCat(){
    cats.shift()
   }
   function appendCat(jerry)
   {return [...cats, jerry]}


   function prependCat(jerry)
   {return [jerry,...cats]}

   function removeLastCat(){
     return cats.slice(0,cats.length -1);
   }

   function removeFirstCat(){
    return cats.slice(1);

   }


