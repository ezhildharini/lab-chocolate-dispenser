var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count)
{
    if(count>0)
    {
        for(let i=0;i<count;i++)
            chocolates.unshift(color);
    }
    else
        return 'Number cannot be zero/negative'; 
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number)
{
    if(number<=0)
        return 'Number cannot be zero/negative';
    
    else if(number>chocolates.length)
        return 'Insufficient chocolates in the dispenser';

    else if(number>0)
    {
        let removedChocolates=[];
        for(let i=0;i<number;i++)
            removedChocolates[i]=chocolates.shift();

        return removedChocolates;
    }
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{
    if(number<=0)
        return 'Number cannot be zero/negative';
    
    else if(number>chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    
    else if(number>0)
    {
        let removedChocolates=[];
        for(let i=0;i<number;i++)
            removedChocolates[i]=chocolates.pop();

        return removedChocolates;
    }
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color)
{
    if(number<=0)
        return 'Number cannot be zero/negative';
    
    else if(number>chocolates.length)
        return 'Insufficient chocolates in the dispenser';

    else if(number>0)
    {
        let removedChocolates=[];
        for(let i=0;i<number;i++)
            removedChocolates[i]=chocolates.pop(color);

        return removedChocolates;
    }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates)
{
    var colors=["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    let numberOfChocolates=[];
    if(chocolates.length>0)
    {
        for(let i=0;i<colors.length;i++)
        {
            let count=0;
            for(let j=0;j<chocolates.length;j++)
            {
                if(colors[i]==chocolates[j])
                    count++;
            }
            numberOfChocolates[i]=count;
        }
        return numberOfChocolates.filter(Number);
    }
    else
        return numberOfChocolates;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates)
{
    if(chocolates.length==1)
     return chocolates;
}
     

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number,color, finalColor)
{
    if(number<=0)
        return 'Number cannot be zero/negative';

    else if(color==finalColor)
        return "Can't replace the same chocolates";
    
    else if(number>0)
    {
        for(let i=0;i<chocolates.length;i++)
        {
            if(chocolates[i]==color)
                chocolates[i]=finalColor;
        }
        return chocolates;
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color,finalColor)
{
    if(color==finalColor)
        return "Can't replace the same chocolates";

    else
    {
        for(let i=0;i<chocolates.length;i++)
        {
            if(chocolates[i]==color)
                chocolates[i]=finalColor;
        }
    }
    let countOfChangedColor=0;
    chocolates.forEach(color => {
        if(color==finalColor)
            countOfChangedColor++;
        
    });
        return [countOfChangedColor, chocolates];
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
