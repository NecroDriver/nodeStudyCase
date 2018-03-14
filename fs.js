var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("第一段程序执行结束！");

fs.readFile('input.txt', function(err, data){
	if(err)return console.error(err);
	console.log(data.toString());
});
console.log("第二段程序执行结束！");

// 从流中读取数据
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码为UTF-8
readerStream.setEncoding('UTF8');
// 处理流事件 --> data,end,error

readerStream.on('data',function(chunks){
	data += chunks;
	console.log(data);
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error',function(error){
	console.log(error.stack);
});

console.log("从流中读取数据");

var data1 = '111111111111111111';
// 创建一个可以写入的流，写入到文件output.txt中
var writeStream = fs.createWriteStream('output.txt');
// 使用utf8编码写入数据
writeStream.write(data1,'UTF8');
// 标记文件末尾
writeStream.end();
// 处理流事件 --> data,end,error
writeStream.on('finish',function(){
	console.log('写入完成。');
});
writeStream.on('error',function(err){
	console.log(err.stack);
});

console.log("写入流");
