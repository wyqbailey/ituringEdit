/**
 * Created by JetBrains WebStorm.
 * User: bailey
 * Date: 12-6-20
 * Time: 下午6:00
 * To change this template use File | Settings | File Templates.
 * div#header 头部 隐藏
 * div#main>div.row>div.span3 侧边栏 隐藏
 * div#main>div.row>div.span9 编辑区 宽度700px 改为auto
 * div#footer 底部 隐藏
 * div.page 页面宽度940px，改为100% margin:0 auto 改为0 20px
 * #mainbar width 700px 改为100%
 * #Subject 标题输入框 width:689px 改为100%
 * #wmd-input 编辑器 width：680px 改为100% 高度200px，改为300px
 * resizable-textarea 编辑区和预览区的公用样式，宽度auto 改为48%
 * #wmd-editor编辑器 宽度auto 改为48% 左浮动
 * div.resizable 预览框 宽度690px 改为auto
 * #wmd-preview 预览区 宽度640px 改为auto
 * div.grippie 大小调整条 margin-right: 9px; 改为0
 * #btn-publish 发布按钮，居右对齐
 * #MiniBookId 合集  #tag 标签  #BookName 相关图书
 * #char-count 字数统计
 */
$('#header,div#main>div.row>div.span3,#footer').hide();
$('div.page').css({width:'auto',margin:'0 20px'});
$('#wmd-editor').css({width:'48%',float:'left'});
$('div.resizable-textarea').eq(1).css({width:'48%',float:'right'});
$('div#main>div.row>div.span9').css({width:'96%',margin:'0 2%'});
$('#Subject').width('100%');
$('#wmd-input').css({width:'100%',height:'320px'});
$("#char-count").css({right:"10px",top;"5px"});
$('div.resizable').css({width:'100%',height:'320px',marginTop:'50px',padding:"0 10px"});
$('div.grippie').css({width:'100%',marginRight:'0'});
var MiniBookId = $("#MiniBookId").closest("div.span4"),tag = $("#tag").closest("div.span5"),BookName = $("#BookName").closest("div.span4");
tag.after(BookName);
$('fieldset.col22').next('fieldset').andSelf().add('fieldset.col21').css({width:'30%',float:'left',margin:'0 1%'});
$('#btn-publish').closest('div.form-actions').css({textAlign:'right'});
var close = $("<span title='返回' style='position: absolute;display: block;cursor:point;width: 20px; height: 20px;line-height: 20px; background:#666; color: #fff;text-align:center; right: 20px;top:35px;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;'>X</span>");
close.bind('click',function(){
    $('#header,div#main>div.row>div.span3,#footer').show();
    $('div.page,#wmd-editor,#char-count,div.resizable-textarea,#Subject,#wmd-preview,#wmd-input,div.resizable,div#main>div.row>div.span9,div.grippie').removeAttr('style');
    $('#Subject').width('689px');
    $('div.grippie').css({marginRight:'9px'});
	MiniBookId.parent().next().append(BookName);
    $('#btn-publish').closest('div.form-actions').removeAttr('style');
    $(this).remove();
});
$('body').append(close);