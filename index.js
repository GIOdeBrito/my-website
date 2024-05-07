
window.addEventListener('DOMContentLoaded', function ()
{
    //writeLetters();
    siteIconsAnimation();
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

function siteIconsAnimation ()
{
    let area = document.querySelector("section[class='base-paragragh-area-2'");
    let icons = Array.from(area.getElementsByTagName('img'));

    let iconSets = new Map([
        ['linkedin', 'https://www.linkedin.com/in/giordano-de-brito-384808299/'],
    ]);

    icons.forEach(child => 
    {
        let name = child?.['alt'] ?? String();

        child.link = iconSets.get(name);
    });

    let currentIcon = 0;

    const func_ExpandIcon = () =>
    {
        setTimeout(() =>
        {
            if(currentIcon >= icons.length)
            {
                currentIcon = 0;
            }
            
            icons[currentIcon].style.transform = 'scale(1.16)';

            setTimeout(() =>
            {
                icons[currentIcon].style.transform = '';
                currentIcon++;

                func_ExpandIcon();
            }, 1000);
        }, 1000);
    };

    func_ExpandIcon();
}



