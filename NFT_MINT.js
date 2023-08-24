/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.





// So as the first requirement for the Assessment states that we want a variable which can hold a number of NFT's
// so that probably means they are talking about an variable which can hold many values

// and that variable or data structure is Array

// lets create an array which will hold the number of nfts number of nft's

const totalNFT = []; // a array which will store the object thatis "NFT"

// in This below function i have to pass the metadata for my NFT object

function mintNFT(Name, Rarity, Color, Keyword) {
  // creating an object

  const NFT = {
    "name"    : Name,
    "rarity"  : Rarity,
    "color"   : Color,
    "keyword" : Keyword
  };


  // Now i will push this NFT object in our "variable" array  = totalNFT

  totalNFT.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()



//AS THE array is global so i can use that array in this below function.

//  this function is for iterating the object's each key - value pairs and printing them into the console

// for doing this i will have to use a loop and i am going with my personal favorite for loop

function listNFTs() {

    for(let i = 0 ; i < totalNFT.length; i++)
    {
        console.log("NFT : " + (i+1) + "\n");
        console.log("Name : " + totalNFT[i].name);
        console.log("Rarity : " + totalNFT[i].rarity);
        console.log("Color : " + totalNFT[i].color);
        console.log("Keyword : " + totalNFT[i].keyword + "\n\n");
    }

}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
    console.log("The total supply of our NFT collection is : " + totalNFT.length);
}

// call your functions below this line


// so first we will have to call the mintNFt function then the listNFTS cause first we need to push our NFT object in the array


mintNFT("Saad" , "Commom" , "Light Brown" , "CRAZY");       //  FIRST ELEMENT IN THE ARRAY OR THE FIRST OBJECT

mintNFT("Safwan" , "Free" , "Black" , "EXTRO");      //   SECOND ELEMENT IN THE ARRAY OR THE SECOND OBJECT

mintNFT("Zainab" , "Rare" , "Brown" , "INTRO");      //   THIRD ELEMENT IN THE ARRAY OR THE THIRD OBJECT

mintNFT("Areeba" , "Epic" , "Brown" , "OUTRO");      //   FOURTH ELEMENT IN THE ARRAY OR THE FOURTH OBJECT


listNFTs();

getTotalSupply();
