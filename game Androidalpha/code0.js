gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDPlantObjects1= [];
gdjs.Game_32SceneCode.GDPlantObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDBackButtonObjects1= [];
gdjs.Game_32SceneCode.GDBackButtonObjects2= [];
gdjs.Game_32SceneCode.GDBackButtonTextObjects1= [];
gdjs.Game_32SceneCode.GDBackButtonTextObjects2= [];
gdjs.Game_32SceneCode.GDCoinTextObjects1= [];
gdjs.Game_32SceneCode.GDCoinTextObjects2= [];
gdjs.Game_32SceneCode.GDTreeObjects1= [];
gdjs.Game_32SceneCode.GDTreeObjects2= [];
gdjs.Game_32SceneCode.GDRockObjects1= [];
gdjs.Game_32SceneCode.GDRockObjects2= [];
gdjs.Game_32SceneCode.GDChestObjects1= [];
gdjs.Game_32SceneCode.GDChestObjects2= [];
gdjs.Game_32SceneCode.GDGameBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDGameBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1= [];
gdjs.Game_32SceneCode.GDInteractionMessageTextObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32SceneCode.GDWallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1Objects = Hashtable.newFrom({"Plant": gdjs.Game_32SceneCode.GDPlantObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.Game_32SceneCode.GDTreeObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.Game_32SceneCode.GDRockObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDChestObjects1Objects = Hashtable.newFrom({"Chest": gdjs.Game_32SceneCode.GDChestObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Game_32SceneCode.GDPlantObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Game_32SceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBackButtonObjects1[k] = gdjs.Game_32SceneCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBackButtonObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Game_32SceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Game_32SceneCode.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinTextObjects1[i].getBehavior("Text").setText("Coins: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.Game_32SceneCode.GDTreeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTreeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDTreeObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDTreeObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDTreeObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDTreeObjects1[k] = gdjs.Game_32SceneCode.GDTreeObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDTreeObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InteractionMessageText"), gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1);
/* Reuse gdjs.Game_32SceneCode.GDTreeObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1[i].getBehavior("Text").setText("You found 10 coins!");
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTreeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTreeObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDTreeObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.Game_32SceneCode.GDRockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRockObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRockObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRockObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRockObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRockObjects1[k] = gdjs.Game_32SceneCode.GDRockObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRockObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InteractionMessageText"), gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1);
/* Reuse gdjs.Game_32SceneCode.GDRockObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1[i].getBehavior("Text").setText("You found 10 coins!");
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRockObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDRockObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chest"), gdjs.Game_32SceneCode.GDChestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDChestObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDChestObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDChestObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDChestObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDChestObjects1[k] = gdjs.Game_32SceneCode.GDChestObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDChestObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDChestObjects1 */
gdjs.copyArray(runtimeScene.getObjects("InteractionMessageText"), gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1[i].getBehavior("Text").setText("You found 10 coins!");
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDChestObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDChestObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDChestObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDTreeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTreeObjects2.length = 0;
gdjs.Game_32SceneCode.GDRockObjects1.length = 0;
gdjs.Game_32SceneCode.GDRockObjects2.length = 0;
gdjs.Game_32SceneCode.GDChestObjects1.length = 0;
gdjs.Game_32SceneCode.GDChestObjects2.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDInteractionMessageTextObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackButtonTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackButtonTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDTreeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTreeObjects2.length = 0;
gdjs.Game_32SceneCode.GDRockObjects1.length = 0;
gdjs.Game_32SceneCode.GDRockObjects2.length = 0;
gdjs.Game_32SceneCode.GDChestObjects1.length = 0;
gdjs.Game_32SceneCode.GDChestObjects2.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDInteractionMessageTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDInteractionMessageTextObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
