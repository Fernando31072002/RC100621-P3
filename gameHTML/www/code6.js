gdjs.HeroListSceneCode = {};
gdjs.HeroListSceneCode.localVariables = [];
gdjs.HeroListSceneCode.idToCallbackMap = new Map();
gdjs.HeroListSceneCode.GDBackButtonObjects1= [];
gdjs.HeroListSceneCode.GDBackButtonObjects2= [];
gdjs.HeroListSceneCode.GDBackButtonTextObjects1= [];
gdjs.HeroListSceneCode.GDBackButtonTextObjects2= [];
gdjs.HeroListSceneCode.GDCoinTextObjects1= [];
gdjs.HeroListSceneCode.GDCoinTextObjects2= [];
gdjs.HeroListSceneCode.GDHeroSpriteDisplayObjects1= [];
gdjs.HeroListSceneCode.GDHeroSpriteDisplayObjects2= [];
gdjs.HeroListSceneCode.GDHeroNameTextObjects1= [];
gdjs.HeroListSceneCode.GDHeroNameTextObjects2= [];
gdjs.HeroListSceneCode.GDHeroDescriptionTextObjects1= [];
gdjs.HeroListSceneCode.GDHeroDescriptionTextObjects2= [];
gdjs.HeroListSceneCode.GDHeroJokeTextObjects1= [];
gdjs.HeroListSceneCode.GDHeroJokeTextObjects2= [];
gdjs.HeroListSceneCode.GDNextHeroButtonObjects1= [];
gdjs.HeroListSceneCode.GDNextHeroButtonObjects2= [];
gdjs.HeroListSceneCode.GDNextHeroButtonTextObjects1= [];
gdjs.HeroListSceneCode.GDNextHeroButtonTextObjects2= [];
gdjs.HeroListSceneCode.GDPreviousHeroButtonObjects1= [];
gdjs.HeroListSceneCode.GDPreviousHeroButtonObjects2= [];
gdjs.HeroListSceneCode.GDPreviousHeroButtonTextObjects1= [];
gdjs.HeroListSceneCode.GDPreviousHeroButtonTextObjects2= [];


gdjs.HeroListSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.HeroListSceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HeroListSceneCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.HeroListSceneCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.HeroListSceneCode.GDBackButtonObjects1[k] = gdjs.HeroListSceneCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.HeroListSceneCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.HeroListSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.HeroListSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.HeroListSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.HeroListSceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.HeroListSceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.HeroListSceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


};

gdjs.HeroListSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HeroListSceneCode.GDBackButtonObjects1.length = 0;
gdjs.HeroListSceneCode.GDBackButtonObjects2.length = 0;
gdjs.HeroListSceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDCoinTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDCoinTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroSpriteDisplayObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroSpriteDisplayObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroNameTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroNameTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroDescriptionTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroDescriptionTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroJokeTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroJokeTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonObjects1.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonObjects2.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonObjects1.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonObjects2.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonTextObjects2.length = 0;

gdjs.HeroListSceneCode.eventsList0(runtimeScene);
gdjs.HeroListSceneCode.GDBackButtonObjects1.length = 0;
gdjs.HeroListSceneCode.GDBackButtonObjects2.length = 0;
gdjs.HeroListSceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDCoinTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDCoinTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroSpriteDisplayObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroSpriteDisplayObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroNameTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroNameTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroDescriptionTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroDescriptionTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDHeroJokeTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDHeroJokeTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonObjects1.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonObjects2.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDNextHeroButtonTextObjects2.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonObjects1.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonObjects2.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonTextObjects1.length = 0;
gdjs.HeroListSceneCode.GDPreviousHeroButtonTextObjects2.length = 0;


return;

}

gdjs['HeroListSceneCode'] = gdjs.HeroListSceneCode;
