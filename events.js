// 引入events模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectionHandler = function connected(){
	console.log("连接成功！");
	
	// 触发data_received事件
	eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectionHandler);

// 使用匿名函数绑定 data_received事件
eventEmitter.on('data_received', function(){
	console.log("数据接收成功！");
});

// 触发connection事件
eventEmitter.emit('connection');

console.log("第一段程序执行完毕！");

eventEmitter.on('some_events',function(){
	console.log("触发了一些事件！");
});
setTimeout(function(){
	eventEmitter.emit('some_events');
},1000)

