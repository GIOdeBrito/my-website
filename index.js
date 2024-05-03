
window.addEventListener('DOMContentLoaded', function ()
{
    //writeLetters();
});

function writeLetters ()
{
    let parag = document.querySelector('p[class="my-name-style"]');
    let value = parag.innerText;

    parag.innerText = String();
    let i = 0;

    let interval = setInterval(() =>
    {
        if(i >= value.length)
        {
            clearInterval(interval);
            return;
        }

        parag.innerText += value[i];
        i++;
    }, 200);
}

