function getCookie(c_name) {
  if (document.cookie.length>0) {
    c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1) {
      c_start=c_start + c_name.length+1
      c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
return ""
}

function setCookie(c_name,value,expiredays) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/"
}

function checkCookie() {
  username=getCookie('username')
  if (username === "中文") {
    setChinese();
  } else if (username === "English") {
    setEnglish();
  }
}

function setLanguageB() {
  if ($("#languageB").html() === "中文页") {
    setCookie('username',"中文",365);
    setChinese();
  } else if ($("#languageB").html() === "ENGLISH PAGE") {
    setCookie('username',"English",365);
    setEnglish();
  }
}

function setChinese() {
  $("#title").html("浙江奥新智能科技有限公司");
  $("#nav1").html("关于");
  $("#nav01").html("首页");
  $("#nav2").html("系统");
  $("#nav3").html("产品");
  $("#nav4").html("联系我们");
  $("#languageB").html("ENGLISH PAGE");
  $("#section1Txt1").html("便捷精确的");
  $("#section1Txt2").html("室内定位系统");
  $("#section1Txt3").html("Orion是一项创新技术，它可以通过对象发出的RF信号将低功耗标签或智能设备定位至一米精度内，而不需要用到加速度计，磁力计或其他传感器。");
  $("#section1Txt4").html("联系我们");
  $("#section3Txt1").html("我们的系统");
  $("#section3Txt2").html("奥新智能室内定位系统");
  $("#section01Txt1").html("我们的产品");
  $("#section01Txt2").html("长距离室内定位");
  $("#section01Txt3").html("OSDR S10");
  $("#section01Txt4").html("智能安全帽");
  $("#section01Txt5").html("软件定义无线电");
  $("#section5Txt1").html("联系我们");
  $('#fname').attr('placeholder','姓名');
  $('#lname').attr('placeholder','邮箱');
  $('#emailTxt').attr('placeholder','公司或网址');
  $('#phoneTxt').attr('placeholder','工作');
  $('#comment').attr('placeholder','在这里输入您想说的...');
  $("#email-btn").html("提交");
  $("#emailAside").html("<p>您也可以给我们发一封电子邮件：</p><h4>contact@oriontech.io</h4><p>我们期待您的建议！</p>");
  $("#copyright").html("<h6>浙江奥新智能科技有限公司</h6><p>如果您对我们的工作感兴趣，或者您想了解有关我们技术的更多信息，请随时通过contact@oriontech.io与我们联系。</p>");
  $("#footer1").html("公司");
  $("#footer2").html("关于");
  $("#footer3").html("产品");
  $("#footer4").html("技术");
  $("#footer5").html("联络");
  $("#footer6").html("联系我们");
  $("#footer7").html("Github");
  $("#footer8").html("©2020 奥新智能");

  //System

  $("#system").html("<h6>标签系统</h6><h2>小巧，低功耗的可穿戴标签</h2><h4>使用此技术可以检测任何人或对象的位置信息。我们的小型可穿戴标签可以轻松精确地跟踪任何物体，无论是通过装配线移动的零件还是医疗机构中的患者。</h4>");

  //Product1

  $("#product1").html("<h6>产品介绍</h6><h2>高性能软件定义无线电</h2><h4>OSDR Q10是Orion Innovations衍生的软件定义无线电产品之一，能够通过四个12位完全同步的通道发送和接收任何宽带RF信号。OSDR Q10主要面向高级用户和/或研究组，而OSDR S10更适合简单应用。</h4><h4>点击<a href='https://m.tb.cn/h.e904tOp?sm=08bdf2' class='weblink'>这里</a>购买该产品.</h4>");
  $("#product11").html("<h6>产品介绍</h6><h2>OSDR S10</h2><h4>OSDR S10是一套更具性价比的软件定义无线电解决方案(即将面世)。</h4>");
  $("#product2").html("<h6>产品介绍</h6><h2>高性能定位标签</h2>\
  <h4>我们的标签具有极大的覆盖范围和穿墙能力，因此可以在从大型工厂车间到公寓大楼的各种复杂场景中使用。该标签集成了多种传感器，可以提供摔倒检测，温度/湿度警报和方向等功能，使其能够广泛应用于安全和监控场景。</h4>\
  <div class='parameter0'><h4>[精度(室内)]:</h4></div><div class='parameter1'><h4>2~3m</h4></div>\
  <div class='parameter0'><h4>[精度(室外)]:</h4></div><div class='parameter1'><h4>1m</h4></div>\
  <div class='parameter0'><h4>[电池寿命]:</h4></div><div class='parameter1'><h4>3年</h4></div>\
  <div class='parameter0'><h4>[温度范围]:</h4></div><div class='parameter1'><h4>-20~70℃</h4></div>\
  <div class='parameter0'><h4>[供电方式]:</h4></div><div class='parameter1'><h4>microUSB</h4></div>\
  <h4>室内: 穿过2至3堵墙。 室外: 不穿过墙壁。</h4>");
  $("#product21").html("<h6>产品介绍</h6><h2>基站</h2>\
  <h4>基站具备抗裂和防水的特性，这使其可以部署在室内和室外场景中。 对于室内定位，可以使用提供的5V电源给基站供电。对于室外场景，我们的系统支持极为便捷的解决方案，不需要任何线缆，可实现随时部署，随时切换场地，而且部署完成后几乎不需要后续维护。</h4>\
  <div class='parameter0'><h4>[覆盖范围(室内)]:</h4></div><div class='parameter1'><h4>40m</h4></div>\
  <div class='parameter0'><h4>[覆盖范围(室外)]:</h4></div><div class='parameter1'><h4>250m</h4></div>\
  <div class='parameter0'><h4>[电池寿命]:</h4></div><div class='parameter1'><h4>3年</h4></div>\
  <div class='parameter0'><h4>[温度范围]:</h4></div><div class='parameter1'><h4>-20~70℃</h4></div>\
  <div class='parameter0'><h4>[供电方式]:</h4></div><div class='parameter1'><h4>microUSB</h4></div>\
  <h4>室内: 穿过2至3堵墙。 室外: 不穿过墙壁。</h4>");


}

function setEnglish() {
  $("#title").html("Orion Innovations");
  $("#nav1").html("ABOUT");
  $("#nav01").html("HOME");
  $("#nav2").html("SYSTEM");
  $("#nav3").html("PRODUCTS");
  $("#nav4").html("CONTACT");
  $("#languageB").html("中文页");
  $("#section1Txt1").html("Simple and Accurate");
  $("#section1Txt2").html("Indoor Positioning");
  $("#section1Txt3").html("Orion is an innovative technology which can localize low-power tags or smart devices to within a meter using only the RF signals that they emit. No accelerometer, magnetometer, or other sensors are required.");
  $("#section1Txt4").html("Get in touch");
  $("#section3Txt1").html("Our System");
  $("#section3Txt2").html("Orion Indoor Position System");
  $("#section01Txt1").html("Our Products");
  $("#section01Txt2").html("Long-range indoor localization");
  $("#section01Txt3").html("OSDR Q10");
  $("#section01Txt4").html("Antenna");
  $("#section01Txt5").html("Software defined radio");
  $("#section5Txt1").html("Contact Us");
  $('#fname').attr('placeholder','Name');
  $('#lname').attr('placeholder','Email Address');
  $('#emailTxt').attr('placeholder','Company or URL');
  $('#phoneTxt').attr('placeholder','Job Title');
  $('#comment').attr('placeholder','Type your message here...');
  $("#email-btn").html("Submit");
  $("#emailAside").html("<p>You can also shoot us an email at:</p><h4>contact@oriontech.io</h4><p>We look forward to hearing from you!</p>");
  $("#copyright").html("<h6>Orion Innovations</h6><p>If you're interested in our work, or if you'd like to learn more about our technology, contact us anytime at contact@oriontech.io.</p>");
  $("#footer1").html("Company");
  $("#footer2").html("About");
  $("#footer3").html("Product");
  $("#footer4").html("Technology");
  $("#footer5").html("Connect");
  $("#footer6").html("Contact Us");
  $("#footer7").html("Github");
  $("#footer8").html("©2020 Orion Innovations");

  //System

  $("#system").html("<h6>Tag System</h6><h2>Small, low-power wearable tags</h2><h4>Location-enable any person or object with the same technology. Our small, wearable tags make it easy to precisely track any object, whether it be parts moving through an assembly line or patients in a medical care facility.</h4>");

  //Product

  $("#product1").html("<h6>Product Description</h6><h2>High performance software defined radio</h2><h4>The OSDR Q10 is one of Orion Innovations' derivative software defined radio products, capable of transmitting and receiving any wideband RF signal via four 12-bit fully synchronized channels. The OSDR Q10 is intended primarily for advanced users and/or research groups, while the OSDR S10 is more suitable for simple applications.</h4><h4>Click <a href='http://oriontech.io/' class='weblink'>here</a> to buy this product.</h4>");
  $("#product11").html("<h6>Product Description</h6><h2>OSDR S10</h2><h4>OSDR S10 is a more cost-effective solution about software defined radio(Coming soon).</h4>");
  $("#product2").html("<h6>Product Description</h6>\
  <h2>High performance position tag</h2>\
  <h4>Our localization tag has unparalleled range and penetration capabilities,allowing it to be used in a variety of complex scenarios ranging from large factory floors to apartment complexes. For safety and monitoring applications, the tag integrates a variety of sensors allowing for fall detection, temperature/humidity alerts, and directionality.</h4>\
  <div class='parameter0'><h4>[Accuracy(in)]:</h4></div><div class='parameter1'><h4>2~3m</h4></div>\
  <div class='parameter0'><h4>[Accuracy(out)]:</h4></div><div class='parameter1'><h4>1m</h4></div>\
  <div class='parameter0'><h4>[Battery life]:</h4></div><div class='parameter1'><h4>3 years</h4></div>\
  <div class='parameter0'><h4>[Temperature range]:</h4></div><div class='parameter1'><h4>-20~70℃</h4></div>\
  <div class='parameter0'><h4>[Charging method]:</h4></div><div class='parameter1'><h4>microUSB</h4></div>\
  <h4>in: indoor, 2~3 walls penetration. out: outside, no wall.</h4>");
  $("#product21").html("<h6>Product Description</h6><h2>Base station</h2>\
  <h4>Base stations are encased in crack- and water-resistant cases, allowing them to be deployed in both indoor and outdoor scenarios. For indoor localization, the base station can be powered using the provided 5V cable. For outdoor localization scenarios, our system supports a simple drop-and-forget solution, enabling fast setup and little to no maintainence.</h4>\
  <div class='parameter0'><h4>[Coverage(in)]:</h4></div><div class='parameter1'><h4>40m</h4></div>\
  <div class='parameter0'><h4>[Coverage(out)]:</h4></div><div class='parameter1'><h4>250m</h4></div>\
  <div class='parameter0'><h4>[Battery life]:</h4></div><div class='parameter1'><h4>3 years</h4></div>\
  <div class='parameter0'><h4>[Temperature range]:</h4></div><div class='parameter1'><h4>-20~70℃</h4></div>\
  <div class='parameter0'><h4>[Charging method]:</h4></div><div class='parameter1'><h4>microUSB</h4></div>\
  <h4>in: indoor, 2~3 walls penetration. out: outside, no wall.</h4>");
}

window.onload = function() {
  checkCookie();
  $("#languageB").on("click", function () {
    setLanguageB();
  });
}
