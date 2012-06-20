/**
 * Created by JetBrains WebStorm.
 * User: bailey
 * Date: 12-6-20
 * Time: 下午6:00
 * To change this template use File | Settings | File Templates.
 * div#header 头部 隐藏
 * div#sidebar 侧边栏 隐藏
 * div#footer 底部 隐藏
 *
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
 *
 */
$('#header,#sidebar,#footer').hide();
$('div.page').css({width:'auto',margin:'0 20px'});
$('#wmd-editor').css({width:'48%',float:'left'});
$('div.resizable-textarea').eq(1).css({width:'48%',float:'right'});
$('#mainbar,#Subject,#wmd-preview').width('100%');
$('#wmd-input').css({width:'100%',height:'320px'});
$('div.resizable').css({width:'100%',height:'320px',marginTop:'50px'});
$('div.grippie').css({marginRight:'0'});
$('fieldset.col22').next('fieldset').andSelf().add('fieldset.col21').css({width:'30%',float:'left',margin:'0 1%'});
$('#btn-publish').closest('p').css({textAlign:'right'});
var close = $("<span title='返回' style='position: absolute;display: block;width: 20px; height: 20px;line-height: 20px; background:#666; color: #fff;text-align:center; right: 20px;top:35px;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;'>X</span>");
close.bind('click',function(){
    $('#header,#sidebar,#footer').show();
    $('div.page,#wmd-editor,div.resizable-textarea,#mainbar,#Subject,#wmd-preview,#wmd-input,div.resizable,').removeAttr('style');
    $('#Subject').width('689px');
    $('div.grippie').css({marginRight:'9px'});
    $('fieldset.col22').next('fieldset').andSelf().add('fieldset.col21').removeAttr('style');
    $('#btn-publish').closest('p').removeAttr('style');
    $(this).remove();
});
$('body').append(close);