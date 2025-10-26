gdjs.OTPSceneCode = {};
gdjs.OTPSceneCode.localVariables = [];
gdjs.OTPSceneCode.idToCallbackMap = new Map();
gdjs.OTPSceneCode.GDOTPCodeTextObjects1= [];
gdjs.OTPSceneCode.GDOTPCodeTextObjects2= [];
gdjs.OTPSceneCode.GDOTPCodeTextObjects3= [];
gdjs.OTPSceneCode.GDOTPInputFieldObjects1= [];
gdjs.OTPSceneCode.GDOTPInputFieldObjects2= [];
gdjs.OTPSceneCode.GDOTPInputFieldObjects3= [];
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1= [];
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects2= [];
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects3= [];
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects1= [];
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects2= [];
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects3= [];
gdjs.OTPSceneCode.GDOTPMessageTextObjects1= [];
gdjs.OTPSceneCode.GDOTPMessageTextObjects2= [];
gdjs.OTPSceneCode.GDOTPMessageTextObjects3= [];


gdjs.OTPSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OTPInputField"), gdjs.OTPSceneCode.GDOTPInputFieldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OTPSceneCode.GDOTPInputFieldObjects2.length;i<l;++i) {
    if ( gdjs.OTPSceneCode.GDOTPInputFieldObjects2[i].getBehavior("Text").getText() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.OTPSceneCode.GDOTPInputFieldObjects2[k] = gdjs.OTPSceneCode.GDOTPInputFieldObjects2[i];
        ++k;
    }
}
gdjs.OTPSceneCode.GDOTPInputFieldObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OTPInputField"), gdjs.OTPSceneCode.GDOTPInputFieldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OTPSceneCode.GDOTPInputFieldObjects1.length;i<l;++i) {
    if ( !(gdjs.OTPSceneCode.GDOTPInputFieldObjects1[i].getBehavior("Text").getText() == runtimeScene.getGame().getVariables().getFromIndex(0).getAsString()) ) {
        isConditionTrue_0 = true;
        gdjs.OTPSceneCode.GDOTPInputFieldObjects1[k] = gdjs.OTPSceneCode.GDOTPInputFieldObjects1[i];
        ++k;
    }
}
gdjs.OTPSceneCode.GDOTPInputFieldObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OTPMessageText"), gdjs.OTPSceneCode.GDOTPMessageTextObjects1);
{for(var i = 0, len = gdjs.OTPSceneCode.GDOTPMessageTextObjects1.length ;i < len;++i) {
    gdjs.OTPSceneCode.GDOTPMessageTextObjects1[i].getBehavior("Text").setText("Invalid code, please try again.");
}
}
}

}


};gdjs.OTPSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OTPCodeText"), gdjs.OTPSceneCode.GDOTPCodeTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("OTPInputField"), gdjs.OTPSceneCode.GDOTPInputFieldObjects1);
gdjs.copyArray(runtimeScene.getObjects("OTPMessageText"), gdjs.OTPSceneCode.GDOTPMessageTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString(gdjs.randomInRange(100000, 999999)));
}
{for(var i = 0, len = gdjs.OTPSceneCode.GDOTPCodeTextObjects1.length ;i < len;++i) {
    gdjs.OTPSceneCode.GDOTPCodeTextObjects1[i].getBehavior("Text").setText("OTP: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.OTPSceneCode.GDOTPInputFieldObjects1.length ;i < len;++i) {
    gdjs.OTPSceneCode.GDOTPInputFieldObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.OTPSceneCode.GDOTPMessageTextObjects1.length ;i < len;++i) {
    gdjs.OTPSceneCode.GDOTPMessageTextObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OTPSubmitButton"), gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1[k] = gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.OTPSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.OTPSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OTPSceneCode.GDOTPCodeTextObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPCodeTextObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPCodeTextObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPInputFieldObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPInputFieldObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPInputFieldObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPMessageTextObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPMessageTextObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPMessageTextObjects3.length = 0;

gdjs.OTPSceneCode.eventsList1(runtimeScene);
gdjs.OTPSceneCode.GDOTPCodeTextObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPCodeTextObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPCodeTextObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPInputFieldObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPInputFieldObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPInputFieldObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPSubmitButtonTextObjects3.length = 0;
gdjs.OTPSceneCode.GDOTPMessageTextObjects1.length = 0;
gdjs.OTPSceneCode.GDOTPMessageTextObjects2.length = 0;
gdjs.OTPSceneCode.GDOTPMessageTextObjects3.length = 0;


return;

}

gdjs['OTPSceneCode'] = gdjs.OTPSceneCode;
