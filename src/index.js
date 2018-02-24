import _ from 'lodash';
import './style.css';
import Packo from './components/my-component/packo-the-webpack-pack.png';
import Data from './components/my-component/data.xml';

function component() {
	let element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add the image to our existing div
	let myImage = new Image();
	myImage.src = Packo;

	element.appendChild(myImage);

	console.log(Data);

	return element;
}

document.body.appendChild(component());