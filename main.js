let target = document.querySelector('#dynamic');

function reandomString()
{
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function resetTyping() 
{
    target.textContent = "";
    dynamic(reandomString());
}

function dynamic(randomArr)
{
    if (randomArr.length > 0)
    {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 80);
    }
    else
    {
        setTimeout(resetTyping, 3000);
    }
}
dynamic(reandomString());

function blink()
{
    target.classList.toggle("active");
}
setInterval(blink, 500);