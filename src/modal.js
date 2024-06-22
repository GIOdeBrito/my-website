

class Modal
{
	#background = null;
	#body = null;

	constructor (x, y, z = 1000)
	{
		this.#createBody(x, y, z);
	}

	#createBody (x, y, z)
	{
		this.#background = document.createElement('div');
		this.#background.classList.add('modal-background');

		this.#background.style = `
			z-index: ${z - 6};
		`;

		this.#background.onclick = () =>
		{
			this.destroy();
		};

		document.body.appendChild(this.#background);

		this.#body = document.createElement('div');
		this.#body.classList.add('modal-body');

		this.#body.style = `
			width: ${x};
			height: ${y};
			z-index: ${z};
		`;

		//this.#createCloseArea();

		document.body.appendChild(this.#body);
	}

	#createCloseArea ()
	{
		let area = document.createElement('div');
		area.classList.add('modal-close-area');
		this.#body.appendChild(area);

		let closeIcon = document.createElement('p');
		closeIcon.innerText = 'X';

		closeIcon.onclick = () =>
		{
			this.destroy();
		};

		area.appendChild(closeIcon);

		let line = document.createElement('hr');
		area.appendChild(line);
	}

	destroy ()
	{
		this.#body.remove();
		this.#background.remove();
	}

	get body ()
	{
		return this.#body;
	}

	get background ()
	{
		return this.#background;
	}
}

class ModalText extends Modal
{
	constructor (content, x, y, z = 1000)
	{
		super(x, y, z);

		this.#createContent(content);
	}

	#createContent (text)
	{
		let paragragh = document.createElement('p');
		paragragh.innerText = text;

		let body = super.body;

		body.appendChild(paragragh);

		let closeButton = document.createElement('button');
		closeButton.innerText = "Close";
		closeButton.onclick = () =>
		{
			super.destroy();
		};

		body.appendChild(closeButton);
	}
}

export {
	Modal,
	ModalText
}



