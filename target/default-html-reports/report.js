$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ChallengingDom_Dom.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open \"Challenging DOM\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "new_project.step_definitions.ChallengingDom_Dom_StepDefs.user_open_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on the The Internet page",
  "keyword": "Then "
});
formatter.match({
  "location": "new_project.step_definitions.GeniricStepDefs.validationOfPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click on blue button",
  "keyword": "Given "
});
formatter.match({
  "location": "new_project.step_definitions.ChallengingDom_Dom_StepDefs.user_click_on_blue_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Apples-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4a9:5f8e:93e1:ae52%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 13.1.3, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 19H15, safari:platformVersion: 10.15.7, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: 0D940AEB-90A2-4A97-B7D7-FB12D83119DB\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027button\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat new_project.step_definitions.ChallengingDom_Dom_StepDefs.user_click_on_blue_button(ChallengingDom_Dom_StepDefs.java:26)\n\tat ✽.user click on blue button(file:///Users/apple/IdeaProjects/new_project/src/test/resources/features/ChallengingDom_Dom.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "the answer at the bottom should be change",
  "keyword": "Given "
});
formatter.match({
  "location": "new_project.step_definitions.ChallengingDom_Dom_StepDefs.the_answer_at_the_bottom_should_be_change()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the button wording should be change accordingly",
  "keyword": "When "
});
formatter.match({
  "location": "new_project.step_definitions.ChallengingDom_Dom_StepDefs.the_button_wording_should_be_change_accordingly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Apples-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:4a9:5f8e:93e1:ae52%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 13.1.3, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 19H15, safari:platformVersion: 10.15.7, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: 0D940AEB-90A2-4A97-B7D7-FB12D83119DB\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat new_project.step_definitions.Hooks.tearDown(Hooks.java:25)\n",
  "status": "failed"
});
});