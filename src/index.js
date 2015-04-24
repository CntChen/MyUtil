var MyDate = function (date) {
	// 将当前时间减去相应的日子
	function cacularDate(num) {
		if (!num) {
			return new Date();
		}

		if (typeof num !== 'number') {
			if (isNaN(num)) {
				return new Date();
			}else {
				num = parseInt(num);
			}
		}

		var date = new Date();
		date.setTime((new Date()).getTime() - num * 24000 * 3600);
		return new Date(date.toString());
	}

	switch (date.replace(/\d/, '').replace(/\s/g, '')) {
		case 'hoursago':
		case 'hourago':
			this.date = cacularDate(parseInt(date.match(/\d+/)[0]) / 24); // 因此传入参数按日子计算
			break; 
		case 'day': 
		case 'yesterday': 
			this.date = cacularDate(1);
			break;
		case 'daysago':
			this.date = cacularDate(date.match(/\d+/)[0]);
			break;
		case 'weeksago':
			this.date = cacularDate(parseInt(date.match(/\d+/)[0]) * 7);
			break;
		case 'monthsago':
			this.date = cacularDate(parseInt(date.match(/\d+/)[0]) * 30);
			break;
		case 'yearago':
		case 'yearsago':
			this.date = cacularDate(parseInt(date.match(/\d+/)[0]) * 365);
			break;
		default:
			this.date = new Date(date);
			break;
	}
}

MyDate.prototype.toString = function () {
	var date = this.date;
	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

exports.MyDate = MyDate