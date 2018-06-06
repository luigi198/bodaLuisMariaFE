$(document).ready(function () {

	var getWidthPercentage = function () {
		return $(document).width() * 0.6;
	};

	var getHeigthPercentage = function () {
		return $(document).height() * 0.8;
	};

	getWidthPercentage();

	$("#flipbook").turn({
		width: getWidthPercentage(),
		height: getHeigthPercentage()
	  });
});