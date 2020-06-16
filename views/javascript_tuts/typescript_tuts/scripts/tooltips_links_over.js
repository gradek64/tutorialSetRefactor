const linksOver = document.querySelectorAll('.links li a');
const linksOverContainer = document.querySelector('.l-nav');


const tooltip = document.createElement('span');
tooltip.classList.add('tooltiptext');
linksOverContainer.append(tooltip);

const callbackMouseEnter = (i) => (e) =>{
		//make toolip visible
		const currentText = e.target.innerHTML;
		tooltip.style.visibility = 'visible';
		tooltip.style.opacity = 1;
		tooltip.style.top = e.target.getBoundingClientRect().bottom - e.target.getBoundingClientRect().height-10;
		tooltip.style.left = e.target.offsetWidth + 40;
		tooltip.innerHTML = currentText;
};
const callbackMouseLeave = (i) => (e) =>{
		//make toolip visible
		const currentText = e.target.innerHTML;
		tooltip.style.visibility = 'hidden';
		tooltip.style.opacity = 0;
		tooltip.innerHTML = 'currentText';

};
Array.prototype.forEach.call(linksOver, (e,i) => { e.addEventListener('mouseenter', callbackMouseEnter(i)) });
Array.prototype.forEach.call(linksOver, (e,i) => { e.addEventListener('mouseleave', callbackMouseLeave(i)) });
