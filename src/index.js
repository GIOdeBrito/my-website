

import { ModalText } from './modal.js';

window.addEventListener('DOMContentLoaded', function ()
{
    //writeLetters();
    siteIconsAnimation();
    animateProjectImages();

	new ModalText('receba', '50%', '50%');
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
    //let area = document.querySelector("section[class='base-paragragh-area-2'");
    let area = window['programming-technology-icons'];
    let icons = Array.from(area.getElementsByTagName('img'));

    let currentIcon = 0;

    const func_ExpandIcon = () =>
    {
        const iconAnimationTime = 1100;

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
            }, iconAnimationTime);
        }, iconAnimationTime);
    };

    func_ExpandIcon();
}

function animateProjectImages ()
{
    let section = document.querySelector('article[class="projects-section"]');

    Array.from(section.children[0].children).forEach(child =>
    {
        let images = Array.from(child.getElementsByTagName('img'));

        let index = 0;

        const func_AnimateImages = () =>
        {
            if(index >= images.length)
            {
                index = 0;
            }

            images[index].style.opacity = 1;

            setTimeout(() =>
            {
                images[index].style.opacity = 0;
                index++;
                func_AnimateImages();
            }, 3600);
        };

        func_AnimateImages();
    });
}



