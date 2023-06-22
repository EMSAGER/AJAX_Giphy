//{Part 1} We’ve provided a starter HTML file, but there’s next to nothing in the body. Start by building a simple form with an input for a search term and a submit button. When the user submits the form, use axios to make a request to GIPHY for information based on that term. After receiving the response, console.log the response data to make sure you’re getting back what you expect.

//Step 1: set up your constants that will be used
const $gifSearch = $("#gif-search");
const $gifBody = $("#gif-playground");
const token = "v4ZBxUtNIYcl6TsrL6tuk70cSWClyx3F";




//Step 2: handle form submission
$(function(){
    // $('#button-search').on('click', function(){
    //         async function 
    //         });
    //redundant to place async function inside jquery when jquery loves ajax
        $('#form').on('submit', async function(e){
            e.preventDefault();
            //create a variable for the $gifSearch
        let searchItem = $gifSearch.val();
        // console.log(searchItem);
            //reset variable
        $gifSearch.val("");
            //use axios & await to GET the website, pass along the {params: q: searchItem, api_key: v4ZBxUtNIYcl6TsrL6tuk70cSWClyx3F}
        const result = await axios.get('https://api.giphy.com/v1/gifs/search', {params: { q : searchItem, api_key: token} });
        // console.log(result.data);
            //add to the $gifBody as an image---create an outside formula
        // addGif(result);
        addGif(result.data);
    }
    )
});

//{Part 2} Now that you’re communicating properly with the API, you should do something more interesting with the response data. Instead of logging it, grab a GIF from the response data and append the GIF to the page. Ensure that if you submit the form multiple times, you’ll get multiple GIFs showing up.
        //to get different results: Math.random() will be needed
//Step 3: append result.data as an image to the $gifBody//create a function
function addGif(searchResult){
    console.log(searchResult.data[0]);
    let numGifs = searchResult.data.length;
    console.log(numGifs);

        //to get different results, plug in Math.floor(Math.random * numGifs {creates constant change and no set pattern}
        let gifIndex = Math.floor(Math.random() * numGifs);
        console.log(gifIndex);
        console.log(searchResult.data[0].url);
       

        //create new elements <div class ="col">
        let $newCol = $("<div>", {class: "col-md-4"});
                ///cant figure out how to do source for image
        let $newGif = $("<img>", {
            src: searchResult.data[gifIndex].url,
            class: "img-fluid",
        });
        $newCol.append($newGif);
        $gifBody.append($newCol);
    
}

//{Part 3}Add a button next to the form which, when clicked, will remove all GIFs from the page.

// $("#button-remove").on("click", function(){
//     $gifBody.empty();
// })
// $(function(){
//     $('#button-search').on('click', function(e){
//         // e.preventDefault();
        
//         let $gifSearch = $('#gif-search').val();
//         console.log($gifSearch);
//     });
// })
// console.log("Let's get this party started!");

// async function gifSearch(search){
//     const token = "v4ZBxUtNIYcl6TsrL6tuk70cSWClyx3F";
//     const res = await axios.post("https://api.giphy.com/v1/gifs/search",{params: {search, token}});
//     console.log(res);
// }

//api key: 