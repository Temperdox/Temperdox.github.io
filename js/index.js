var selected = {
	Shift : function(elementRemove, elementAdd, divArray, anchorArray, backgroundUrls) {
		$.each(divArray, function(index, value) {
			//console.log(val.id);
			if ( value.id == elementadd.id ){

				//First, remove the selected class from specified HTML element
				$(elementRemove).removeClass('selected');


				//Next, add the 'selected'class to specified HTML element
				$(elementAdd).addClass('selected');


				//Next, change background image with no transition
				$('#genContainer').css('background-image', backgroundUrls[index]);
				$('#genContainer').css('background-size', '100% 100%');
			    $('#genContainer').css('background-repeat', 'no-repeat');

				//Finally, move the tabs
				$(elementRemove).css('left', '')
				/*var str = '#mySidenav ' + element.id;
				var substr = str.substring(0, (str.size-3));

				console.log(prevElement.id + " " + prevElement.className);
				$(prevElement).removeClass('selected');
				$(array2[key]).css('left','-90px');
				console.log(prevElement.id + " " + prevElement.className);
				console.log('------------------------------');
				console.log(element.id + " " + element.className);
				$(element).addClass('selected');
				console.log('#mySidenav #' + element.id + ' > a.className');
				$(array2[key]).css('left','0px');
				console.log(element.id + " " + element.className);
				$('#genContainer').css('background-image', backgrounds[key]);
			    $('#genContainer').css('background-size', '100% 100%');
			    $('#genContainer').css('background-repeat', 'no-repeat');*/
			}
		});
	},

	Preview : function(element, array, backgrounds){
		$.each(array, function(key, val) {
			//console.log(val.id);
			if ( val.id == element.id ){
				console.log("ss");
				console.log(element.id);
				switch (element.id){
				default:
					$str = 'url(media/laura-kranz-358339.jpg)';
				    break;
				case "aboutDiv":
					console.log(" :: ");
					console.log($(element).css('background-image'));
					$str = 'url(media/allef-vinicius-171688.jpg)';
					break;
				case "blogDiv":
					console.log(" :: ");
					console.log($(element).css('background-image'));
					$str = 'url(media/erol-ahmed-114256.jpg)';
					break;
				case "projectDiv":
					$str = 'url(media/pan-xiaozhen-332459.jpg)';
					break;
				case "contactDiv":
					$str = 'url(media/joshua-newton-274491.jpg)';

			}



				/*var str = '#mySidenav ' + element.id;
				var substr = str.substring(0, (str.size-3));

				console.log(prevElement.id + " " + prevElement.className);
				$(prevElement).removeClass('selected');
				$(array2[key]).css('left','-90px');
				console.log(prevElement.id + " " + prevElement.className);
				console.log('------------------------------');
				console.log(element.id + " " + element.className);
				$(element).addClass('selected');
				console.log('#mySidenav #' + element.id + ' > a.className');
				$(array2[key]).css('left','0px');
				console.log(element.id + " " + element.className);
				$('#genContainer').css('background-image', backgrounds[key]);
			    $('#genContainer').css('background-size', '100% 100%');
			    $('#genContainer').css('background-repeat', 'no-repeat');*/
			}
		});
		$('#genContainer').css('background-image', $str);
	    $('#genContainer').css('background-size', '100% 100%');
	    $('#genContainer').css('background-repeat', 'no-repeat');
	}
}



$(document).ready(function() {
	var backgrounds = ['url(media/allef-vinicius-171688.jpg)', 'url(media/erol-ahmed-114256.jpg)', 'url(media/pan-xiaozhen-332459.jpg)', 'url(media/laura-kranz-358339.jpg)'];
	var navDivs = [];
	var test = [];
	var selectedDiv;
	$("a").each(function(i) {
		if ((this.className == "navATab")) {
			test.push(this);
		}
	});
	$("div").each(function(i) {
		if ((this.className == "navTab selected")) {
			//Populates selected div so background image can be reverted
			selectedDiv = this;
		}
		if ((this.className == "navTab") && (!(this.className == "navTab selected"))) {
			//Populates all divs for future iteration
			navDivs.push(this);
		}
		if ((this.className == "navTab") && (!(this.className == "navTab selected"))) {

			//used to deal with mouse events, previews image when hovered, changes when selected

			$(this).mouseover(function () {
	    		$('#genContainer').fadeIn(500);
	        });

			$(this).mouseleave(function () {;
	    		$('#genContainer').fadeIn(500);
			});

			$(this).click(function () {
				//Insert Code Select Tab
			});
		}


	});
	//selected.Shift(selectedDiv,navDivs[2],navDivs,test,backgrounds);
	//selected.Preview(navDivs[0],navDivs,backgrounds);
});