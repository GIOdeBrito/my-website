
const strings = {
	'full-stack-title': {
		'en': 'Full Stack Web Developer',
		'ptbr': 'Desenvolvedor Full Stack'
	},
	'my-skills-header': {
		'en': 'My Skills',
		'ptbr': 'Pilha Técnica'
	}
};

function setPtBrLang ()
{
	setTranslation('ptbr');
}

function setTranslation (lang = 'en')
{
	document.querySelectorAll('[data-lang-string]').forEach(el => {

		const key = el.getAttribute('data-lang-string');

		if(strings[key] && strings[key][lang])
		{
			el.innerText = strings[key][lang];
		}
	});
}

function initLanguage()
{
	const params = new URLSearchParams(window.location.search);
	const lang = params.get('lang') || 'en';

	setTranslation(lang);
}

//initLanguage();
