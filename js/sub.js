	
	mui('.mui-bar-tab').on('tap', 'a', function(e) {
		$(this).addClass(' mui_color').siblings('a').removeClass('mui_color');		
		
	});
	
	mui('.mui-bar-tab').on('tap', '.pic', function(e) {
//		console.log(111);
		var src = document.getElementById('picmy');
		var srchome = document.getElementById('pichome');
		src.src= 'imgs/ic_mine_n.png';
		srchome.src= 'imgs/ic_home_s.png';
})


	mui('.mui-bar-tab').on('tap', '.picmy', function(e) {
//		console.log(111);
		var srchome = document.getElementById('pichome');
		var src = document.getElementById('picmy');
		srchome.src= 'imgs/ic_home_n.png';
		src.src= 'imgs/ic_mine_s.png';
})

