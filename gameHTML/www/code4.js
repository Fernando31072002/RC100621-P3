gdjs.ShopSceneCode = {};
gdjs.ShopSceneCode.localVariables = [];
gdjs.ShopSceneCode.idToCallbackMap = new Map();
gdjs.ShopSceneCode.GDCoinTextObjects1= [];
gdjs.ShopSceneCode.GDCoinTextObjects2= [];
gdjs.ShopSceneCode.GDBackButtonObjects1= [];
gdjs.ShopSceneCode.GDBackButtonObjects2= [];
gdjs.ShopSceneCode.GDBackButtonTextObjects1= [];
gdjs.ShopSceneCode.GDBackButtonTextObjects2= [];
gdjs.ShopSceneCode.GDShopMessageTextObjects1= [];
gdjs.ShopSceneCode.GDShopMessageTextObjects2= [];
gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1= [];
gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects2= [];
gdjs.ShopSceneCode.GDBuy10CoinsButtonTextObjects1= [];
gdjs.ShopSceneCode.GDBuy10CoinsButtonTextObjects2= [];
gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1= [];
gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects2= [];
gdjs.ShopSceneCode.GDBuy50CoinsButtonTextObjects1= [];
gdjs.ShopSceneCode.GDBuy50CoinsButtonTextObjects2= [];
gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1= [];
gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects2= [];
gdjs.ShopSceneCode.GDBuy100CoinsButtonTextObjects1= [];
gdjs.ShopSceneCode.GDBuy100CoinsButtonTextObjects2= [];
gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1= [];
gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects2= [];
gdjs.ShopSceneCode.GDBuy500CoinsButtonTextObjects1= [];
gdjs.ShopSceneCode.GDBuy500CoinsButtonTextObjects2= [];


gdjs.ShopSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.ShopSceneCode.GDCoinTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShopMessageText"), gdjs.ShopSceneCode.GDShopMessageTextObjects1);
{for(var i = 0, len = gdjs.ShopSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.ShopSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.ShopSceneCode.GDShopMessageTextObjects1.length ;i < len;++i) {
    gdjs.ShopSceneCode.GDShopMessageTextObjects1[i].getBehavior("Text").setText("Welcome to the Shop!");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.ShopSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.ShopSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.ShopSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.ShopSceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopSceneCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopSceneCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopSceneCode.GDBackButtonObjects1[k] = gdjs.ShopSceneCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopSceneCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buy10CoinsButton"), gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1[k] = gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessageText"), gdjs.ShopSceneCode.GDShopMessageTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}
{for(var i = 0, len = gdjs.ShopSceneCode.GDShopMessageTextObjects1.length ;i < len;++i) {
    gdjs.ShopSceneCode.GDShopMessageTextObjects1[i].getBehavior("Text").setText("You received 10 coins!");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buy50CoinsButton"), gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1[k] = gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessageText"), gdjs.ShopSceneCode.GDShopMessageTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}
{for(var i = 0, len = gdjs.ShopSceneCode.GDShopMessageTextObjects1.length ;i < len;++i) {
    gdjs.ShopSceneCode.GDShopMessageTextObjects1[i].getBehavior("Text").setText("You received 50 coins!");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buy100CoinsButton"), gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1[k] = gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessageText"), gdjs.ShopSceneCode.GDShopMessageTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(100);
}
{for(var i = 0, len = gdjs.ShopSceneCode.GDShopMessageTextObjects1.length ;i < len;++i) {
    gdjs.ShopSceneCode.GDShopMessageTextObjects1[i].getBehavior("Text").setText("You received 100 coins!");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Buy500CoinsButton"), gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1.length;i<l;++i) {
    if ( gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1[k] = gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1[i];
        ++k;
    }
}
gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShopMessageText"), gdjs.ShopSceneCode.GDShopMessageTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(500);
}
{for(var i = 0, len = gdjs.ShopSceneCode.GDShopMessageTextObjects1.length ;i < len;++i) {
    gdjs.ShopSceneCode.GDShopMessageTextObjects1[i].getBehavior("Text").setText("You received 500 coins!");
}
}
}

}


};

gdjs.ShopSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopSceneCode.GDCoinTextObjects1.length = 0;
gdjs.ShopSceneCode.GDCoinTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBackButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBackButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDShopMessageTextObjects1.length = 0;
gdjs.ShopSceneCode.GDShopMessageTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonTextObjects2.length = 0;

gdjs.ShopSceneCode.eventsList0(runtimeScene);
gdjs.ShopSceneCode.GDCoinTextObjects1.length = 0;
gdjs.ShopSceneCode.GDCoinTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBackButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBackButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDShopMessageTextObjects1.length = 0;
gdjs.ShopSceneCode.GDShopMessageTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy10CoinsButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy50CoinsButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy100CoinsButtonTextObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonObjects2.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonTextObjects1.length = 0;
gdjs.ShopSceneCode.GDBuy500CoinsButtonTextObjects2.length = 0;


return;

}

gdjs['ShopSceneCode'] = gdjs.ShopSceneCode;
