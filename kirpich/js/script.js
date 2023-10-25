AddElem=function(select){
	let parent=document.querySelector('main');
	let div= document.createElement('div');
	//if (button.id==='brick')
		//parent.appendChild(div).className='brick';
	//else if (button.id==='space')
		//parent.appendChild(div).className='space';
	switch (select.value) {
		case 'red':
			parent.appendChild(div).className='red';
			div.setAttribute('onclick', 'DivChange(this)')
			break;
		case 'blue':
			parent.appendChild(div).className='blue'
			break
		case 'white':
			parent.appendChild(div).className='white';
			break
		default:
			alert('ОШИБКА')
	}
}

RemoveBrick=function(){
	let divArr=document.querySelectorAll('div');
	if (divArr.length!=0)
		divArr[divArr.length-1].remove();
}

Remove=function(button){
	let arrElem=document.querySelectorAll('div');
	if (button.id==='RemoveBrick'){
		if (arrElem.length!=0)
			arrElem[arrElem.length-1].remove();
	}
	else if (button.id==='Remove')
		for (let elem of arrElem){
			elem.remove();
	}
}

