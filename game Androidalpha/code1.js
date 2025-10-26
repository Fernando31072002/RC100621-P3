gdjs.MenuSceneCode = {};
gdjs.MenuSceneCode.localVariables = [];
gdjs.MenuSceneCode.idToCallbackMap = new Map();
gdjs.MenuSceneCode.GDGameTitleObjects1= [];
gdjs.MenuSceneCode.GDGameTitleObjects2= [];
gdjs.MenuSceneCode.GDCoinTextObjects1= [];
gdjs.MenuSceneCode.GDCoinTextObjects2= [];
gdjs.MenuSceneCode.GDSummonHeroButtonObjects1= [];
gdjs.MenuSceneCode.GDSummonHeroButtonObjects2= [];
gdjs.MenuSceneCode.GDSummonHeroButtonTextObjects1= [];
gdjs.MenuSceneCode.GDSummonHeroButtonTextObjects2= [];
gdjs.MenuSceneCode.GDStartBattleButtonObjects1= [];
gdjs.MenuSceneCode.GDStartBattleButtonObjects2= [];
gdjs.MenuSceneCode.GDStartBattleButtonTextObjects1= [];
gdjs.MenuSceneCode.GDStartBattleButtonTextObjects2= [];
gdjs.MenuSceneCode.GDSummonMessageTextObjects1= [];
gdjs.MenuSceneCode.GDSummonMessageTextObjects2= [];
gdjs.MenuSceneCode.GDHeroImageObjects1= [];
gdjs.MenuSceneCode.GDHeroImageObjects2= [];
gdjs.MenuSceneCode.GDHeroDescriptionTextObjects1= [];
gdjs.MenuSceneCode.GDHeroDescriptionTextObjects2= [];
gdjs.MenuSceneCode.GDElCipitioSpriteObjects1= [];
gdjs.MenuSceneCode.GDElCipitioSpriteObjects2= [];
gdjs.MenuSceneCode.GDElCadejoSpriteObjects1= [];
gdjs.MenuSceneCode.GDElCadejoSpriteObjects2= [];
gdjs.MenuSceneCode.GDElDuendeSpriteObjects1= [];
gdjs.MenuSceneCode.GDElDuendeSpriteObjects2= [];
gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects1= [];
gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects2= [];
gdjs.MenuSceneCode.GDMenuBackgroundObjects1= [];
gdjs.MenuSceneCode.GDMenuBackgroundObjects2= [];
gdjs.MenuSceneCode.GDGachaButtonObjects1= [];
gdjs.MenuSceneCode.GDGachaButtonObjects2= [];
gdjs.MenuSceneCode.GDGachaButtonTextObjects1= [];
gdjs.MenuSceneCode.GDGachaButtonTextObjects2= [];
gdjs.MenuSceneCode.GDShopButtonObjects1= [];
gdjs.MenuSceneCode.GDShopButtonObjects2= [];
gdjs.MenuSceneCode.GDShopButtonTextObjects1= [];
gdjs.MenuSceneCode.GDShopButtonTextObjects2= [];
gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects1= [];
gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects2= [];
gdjs.MenuSceneCode.GDOpenWorldButtonObjects1= [];
gdjs.MenuSceneCode.GDOpenWorldButtonObjects2= [];
gdjs.MenuSceneCode.GDOpenWorldButtonTextObjects1= [];
gdjs.MenuSceneCode.GDOpenWorldButtonTextObjects2= [];


gdjs.MenuSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.MenuSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.MenuSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SummonMessageText"), gdjs.MenuSceneCode.GDSummonMessageTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDSummonMessageTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDSummonMessageTextObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ElCadejoSprite"), gdjs.MenuSceneCode.GDElCadejoSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("ElCipitioSprite"), gdjs.MenuSceneCode.GDElCipitioSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("ElDuendeSprite"), gdjs.MenuSceneCode.GDElDuendeSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("HeroDescriptionText"), gdjs.MenuSceneCode.GDHeroDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaCarretaChillonaSprite"), gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("LaSiguanabaSprite"), gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDElCipitioSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDElCipitioSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuSceneCode.GDElCadejoSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDElCadejoSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuSceneCode.GDElDuendeSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDElDuendeSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuSceneCode.GDHeroDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDHeroDescriptionTextObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SummonHeroButton"), gdjs.MenuSceneCode.GDSummonHeroButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuSceneCode.GDSummonHeroButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuSceneCode.GDSummonHeroButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuSceneCode.GDSummonHeroButtonObjects1[k] = gdjs.MenuSceneCode.GDSummonHeroButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuSceneCode.GDSummonHeroButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HeroListScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartBattleButton"), gdjs.MenuSceneCode.GDStartBattleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuSceneCode.GDStartBattleButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuSceneCode.GDStartBattleButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuSceneCode.GDStartBattleButtonObjects1[k] = gdjs.MenuSceneCode.GDStartBattleButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuSceneCode.GDStartBattleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BattleScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.MenuSceneCode.GDShopButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuSceneCode.GDShopButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuSceneCode.GDShopButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuSceneCode.GDShopButtonObjects1[k] = gdjs.MenuSceneCode.GDShopButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuSceneCode.GDShopButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ShopScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GachaButton"), gdjs.MenuSceneCode.GDGachaButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuSceneCode.GDGachaButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuSceneCode.GDGachaButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuSceneCode.GDGachaButtonObjects1[k] = gdjs.MenuSceneCode.GDGachaButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuSceneCode.GDGachaButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GachaScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.MenuSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.MenuSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpenWorldButton"), gdjs.MenuSceneCode.GDOpenWorldButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuSceneCode.GDOpenWorldButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuSceneCode.GDOpenWorldButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuSceneCode.GDOpenWorldButtonObjects1[k] = gdjs.MenuSceneCode.GDOpenWorldButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuSceneCode.GDOpenWorldButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


};

gdjs.MenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuSceneCode.GDGameTitleObjects1.length = 0;
gdjs.MenuSceneCode.GDGameTitleObjects2.length = 0;
gdjs.MenuSceneCode.GDCoinTextObjects1.length = 0;
gdjs.MenuSceneCode.GDCoinTextObjects2.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDSummonMessageTextObjects1.length = 0;
gdjs.MenuSceneCode.GDSummonMessageTextObjects2.length = 0;
gdjs.MenuSceneCode.GDHeroImageObjects1.length = 0;
gdjs.MenuSceneCode.GDHeroImageObjects2.length = 0;
gdjs.MenuSceneCode.GDHeroDescriptionTextObjects1.length = 0;
gdjs.MenuSceneCode.GDHeroDescriptionTextObjects2.length = 0;
gdjs.MenuSceneCode.GDElCipitioSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDElCipitioSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDElCadejoSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDElCadejoSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDElDuendeSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDElDuendeSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDMenuBackgroundObjects1.length = 0;
gdjs.MenuSceneCode.GDMenuBackgroundObjects2.length = 0;
gdjs.MenuSceneCode.GDGachaButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDGachaButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDGachaButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDGachaButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDShopButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDShopButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDShopButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDShopButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonTextObjects2.length = 0;

gdjs.MenuSceneCode.eventsList0(runtimeScene);
gdjs.MenuSceneCode.GDGameTitleObjects1.length = 0;
gdjs.MenuSceneCode.GDGameTitleObjects2.length = 0;
gdjs.MenuSceneCode.GDCoinTextObjects1.length = 0;
gdjs.MenuSceneCode.GDCoinTextObjects2.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDSummonHeroButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDStartBattleButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDSummonMessageTextObjects1.length = 0;
gdjs.MenuSceneCode.GDSummonMessageTextObjects2.length = 0;
gdjs.MenuSceneCode.GDHeroImageObjects1.length = 0;
gdjs.MenuSceneCode.GDHeroImageObjects2.length = 0;
gdjs.MenuSceneCode.GDHeroDescriptionTextObjects1.length = 0;
gdjs.MenuSceneCode.GDHeroDescriptionTextObjects2.length = 0;
gdjs.MenuSceneCode.GDElCipitioSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDElCipitioSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDElCadejoSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDElCadejoSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDElDuendeSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDElDuendeSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDLaSiguanabaSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDMenuBackgroundObjects1.length = 0;
gdjs.MenuSceneCode.GDMenuBackgroundObjects2.length = 0;
gdjs.MenuSceneCode.GDGachaButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDGachaButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDGachaButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDGachaButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDShopButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDShopButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDShopButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDShopButtonTextObjects2.length = 0;
gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects1.length = 0;
gdjs.MenuSceneCode.GDLaCarretaChillonaSpriteObjects2.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonTextObjects1.length = 0;
gdjs.MenuSceneCode.GDOpenWorldButtonTextObjects2.length = 0;


return;

}

gdjs['MenuSceneCode'] = gdjs.MenuSceneCode;
