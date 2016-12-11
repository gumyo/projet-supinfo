function start(e) {
	e.dataTransfer.effecAllowed = 'move'; 
	e.dataTransfer.setData("Text", e.target.id);
	e.target.style.opacity = '0.4'; 
}

function end(e){
	e.target.style.opacity = ''; 	
	e.dataTransfer.clearData("Data");			
}