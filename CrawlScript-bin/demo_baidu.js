doc=$("http://www.baidu.com");

doc.each("a",function(e){
	print(e);
	write("log.txt",e.text()+":"+e.attr("href")+"\n");
});
