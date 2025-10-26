gdjs.GachaSceneCode = {};
gdjs.GachaSceneCode.localVariables = [];
gdjs.GachaSceneCode.idToCallbackMap = new Map();
gdjs.GachaSceneCode.GDCoinTextObjects1= [];
gdjs.GachaSceneCode.GDCoinTextObjects2= [];
gdjs.GachaSceneCode.GDCoinTextObjects3= [];
gdjs.GachaSceneCode.GDCoinTextObjects4= [];
gdjs.GachaSceneCode.GDGachaSummonButtonObjects1= [];
gdjs.GachaSceneCode.GDGachaSummonButtonObjects2= [];
gdjs.GachaSceneCode.GDGachaSummonButtonObjects3= [];
gdjs.GachaSceneCode.GDGachaSummonButtonObjects4= [];
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects1= [];
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects2= [];
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects3= [];
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects4= [];
gdjs.GachaSceneCode.GDGachaMessageTextObjects1= [];
gdjs.GachaSceneCode.GDGachaMessageTextObjects2= [];
gdjs.GachaSceneCode.GDGachaMessageTextObjects3= [];
gdjs.GachaSceneCode.GDGachaMessageTextObjects4= [];
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1= [];
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects2= [];
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3= [];
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects4= [];
gdjs.GachaSceneCode.GDBackButtonObjects1= [];
gdjs.GachaSceneCode.GDBackButtonObjects2= [];
gdjs.GachaSceneCode.GDBackButtonObjects3= [];
gdjs.GachaSceneCode.GDBackButtonObjects4= [];
gdjs.GachaSceneCode.GDBackButtonTextObjects1= [];
gdjs.GachaSceneCode.GDBackButtonTextObjects2= [];
gdjs.GachaSceneCode.GDBackButtonTextObjects3= [];
gdjs.GachaSceneCode.GDBackButtonTextObjects4= [];
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1= [];
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects2= [];
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects3= [];
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects4= [];
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1= [];
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects2= [];
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects3= [];
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects4= [];
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1= [];
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects2= [];
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects3= [];
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects4= [];
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1= [];
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects2= [];
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects3= [];
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects4= [];
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1= [];
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2= [];
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects3= [];
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects4= [];


gdjs.GachaSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "El Cipitío");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects2, gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects3);

gdjs.copyArray(runtimeScene.getObjects("GachaHeroDescriptionText"), gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3);
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(0).getChild("Description").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "La Siguanaba");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GachaHeroDescriptionText"), gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3);
gdjs.copyArray(gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects2, gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects3);

{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(1).getChild("Description").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "El Cadejo");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects2, gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects3);

gdjs.copyArray(runtimeScene.getObjects("GachaHeroDescriptionText"), gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3);
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(2).getChild("Description").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "El Duende");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects2, gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects3);

gdjs.copyArray(runtimeScene.getObjects("GachaHeroDescriptionText"), gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3);
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(3).getChild("Description").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "La Carreta Chillona");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GachaHeroDescriptionText"), gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects2);
/* Reuse gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2 */
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(4).getChild("Description").getAsString());
}
}
}

}


};gdjs.GachaSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GachaElCadejoSprite"), gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("GachaElCipitioSprite"), gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("GachaElDuendeSprite"), gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("GachaLaCarretaChillonaSprite"), gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("GachaLaSiguanabaSprite"), gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("GachaMessageText"), gdjs.GachaSceneCode.GDGachaMessageTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(2)) - 1)).getChild("Name").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("You got " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "!");
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaMessageTextObjects2.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaMessageTextObjects2[i].getBehavior("Text").setText("SummonMessage");
}
}

{ //Subevents
gdjs.GachaSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GachaElCadejoSprite"), gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaElCipitioSprite"), gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaElDuendeSprite"), gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaHeroDescriptionText"), gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaLaCarretaChillonaSprite"), gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaLaSiguanabaSprite"), gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaMessageText"), gdjs.GachaSceneCode.GDGachaMessageTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Not enough coins!");
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaMessageTextObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaMessageTextObjects1[i].getBehavior("Text").setText("SummonMessage");
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1[i].getBehavior("Text").setText("");
}
}
}

}


};gdjs.GachaSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.GachaSceneCode.GDCoinTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaElCadejoSprite"), gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaElCipitioSprite"), gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaElDuendeSprite"), gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaHeroDescriptionText"), gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaLaCarretaChillonaSprite"), gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaLaSiguanabaSprite"), gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("GachaMessageText"), gdjs.GachaSceneCode.GDGachaMessageTextObjects1);
{for(var i = 0, len = gdjs.GachaSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaMessageTextObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaMessageTextObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.GachaSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.GachaSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.GachaSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GachaSummonButton"), gdjs.GachaSceneCode.GDGachaSummonButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GachaSceneCode.GDGachaSummonButtonObjects1.length;i<l;++i) {
    if ( gdjs.GachaSceneCode.GDGachaSummonButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GachaSceneCode.GDGachaSummonButtonObjects1[k] = gdjs.GachaSceneCode.GDGachaSummonButtonObjects1[i];
        ++k;
    }
}
gdjs.GachaSceneCode.GDGachaSummonButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GachaSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.GachaSceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GachaSceneCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.GachaSceneCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GachaSceneCode.GDBackButtonObjects1[k] = gdjs.GachaSceneCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.GachaSceneCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}
}

}


};

gdjs.GachaSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GachaSceneCode.GDCoinTextObjects1.length = 0;
gdjs.GachaSceneCode.GDCoinTextObjects2.length = 0;
gdjs.GachaSceneCode.GDCoinTextObjects3.length = 0;
gdjs.GachaSceneCode.GDCoinTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects4.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects1.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects2.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects3.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects4.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects3.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects4.length = 0;

gdjs.GachaSceneCode.eventsList2(runtimeScene);
gdjs.GachaSceneCode.GDCoinTextObjects1.length = 0;
gdjs.GachaSceneCode.GDCoinTextObjects2.length = 0;
gdjs.GachaSceneCode.GDCoinTextObjects3.length = 0;
gdjs.GachaSceneCode.GDCoinTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaSummonButtonTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaMessageTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaHeroDescriptionTextObjects4.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects1.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects2.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects3.length = 0;
gdjs.GachaSceneCode.GDBackButtonObjects4.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects3.length = 0;
gdjs.GachaSceneCode.GDBackButtonTextObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaElCipitioSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaLaSiguanabaSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaElCadejoSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaElDuendeSpriteObjects4.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects1.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects2.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects3.length = 0;
gdjs.GachaSceneCode.GDGachaLaCarretaChillonaSpriteObjects4.length = 0;


return;

}

gdjs['GachaSceneCode'] = gdjs.GachaSceneCode;
