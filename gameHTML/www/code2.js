gdjs.BattleSceneCode = {};
gdjs.BattleSceneCode.localVariables = [];
gdjs.BattleSceneCode.idToCallbackMap = new Map();
gdjs.BattleSceneCode.GDPlayerHPTextObjects1= [];
gdjs.BattleSceneCode.GDPlayerHPTextObjects2= [];
gdjs.BattleSceneCode.GDPlayerHPTextObjects3= [];
gdjs.BattleSceneCode.GDEnemyHPTextObjects1= [];
gdjs.BattleSceneCode.GDEnemyHPTextObjects2= [];
gdjs.BattleSceneCode.GDEnemyHPTextObjects3= [];
gdjs.BattleSceneCode.GDBattleMessageTextObjects1= [];
gdjs.BattleSceneCode.GDBattleMessageTextObjects2= [];
gdjs.BattleSceneCode.GDBattleMessageTextObjects3= [];
gdjs.BattleSceneCode.GDPlayerCharacterObjects1= [];
gdjs.BattleSceneCode.GDPlayerCharacterObjects2= [];
gdjs.BattleSceneCode.GDPlayerCharacterObjects3= [];
gdjs.BattleSceneCode.GDEnemyCharacterObjects1= [];
gdjs.BattleSceneCode.GDEnemyCharacterObjects2= [];
gdjs.BattleSceneCode.GDEnemyCharacterObjects3= [];
gdjs.BattleSceneCode.GDBattleBackgroundObjects1= [];
gdjs.BattleSceneCode.GDBattleBackgroundObjects2= [];
gdjs.BattleSceneCode.GDBattleBackgroundObjects3= [];
gdjs.BattleSceneCode.GDMoveButton1Objects1= [];
gdjs.BattleSceneCode.GDMoveButton1Objects2= [];
gdjs.BattleSceneCode.GDMoveButton1Objects3= [];
gdjs.BattleSceneCode.GDMoveButton1TextObjects1= [];
gdjs.BattleSceneCode.GDMoveButton1TextObjects2= [];
gdjs.BattleSceneCode.GDMoveButton1TextObjects3= [];
gdjs.BattleSceneCode.GDMoveButton2Objects1= [];
gdjs.BattleSceneCode.GDMoveButton2Objects2= [];
gdjs.BattleSceneCode.GDMoveButton2Objects3= [];
gdjs.BattleSceneCode.GDMoveButton2TextObjects1= [];
gdjs.BattleSceneCode.GDMoveButton2TextObjects2= [];
gdjs.BattleSceneCode.GDMoveButton2TextObjects3= [];
gdjs.BattleSceneCode.GDMoveButton3Objects1= [];
gdjs.BattleSceneCode.GDMoveButton3Objects2= [];
gdjs.BattleSceneCode.GDMoveButton3Objects3= [];
gdjs.BattleSceneCode.GDMoveButton3TextObjects1= [];
gdjs.BattleSceneCode.GDMoveButton3TextObjects2= [];
gdjs.BattleSceneCode.GDMoveButton3TextObjects3= [];
gdjs.BattleSceneCode.GDMoveButton4Objects1= [];
gdjs.BattleSceneCode.GDMoveButton4Objects2= [];
gdjs.BattleSceneCode.GDMoveButton4Objects3= [];
gdjs.BattleSceneCode.GDMoveButton4TextObjects1= [];
gdjs.BattleSceneCode.GDMoveButton4TextObjects2= [];
gdjs.BattleSceneCode.GDMoveButton4TextObjects3= [];
gdjs.BattleSceneCode.GDMoveButton5Objects1= [];
gdjs.BattleSceneCode.GDMoveButton5Objects2= [];
gdjs.BattleSceneCode.GDMoveButton5Objects3= [];
gdjs.BattleSceneCode.GDMoveButton5TextObjects1= [];
gdjs.BattleSceneCode.GDMoveButton5TextObjects2= [];
gdjs.BattleSceneCode.GDMoveButton5TextObjects3= [];


gdjs.BattleSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Victory");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("EnemyTurn");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


};gdjs.BattleSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Defeat");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayerChooseMove");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
}

}


};gdjs.BattleSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayerChooseMove");
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleSceneCode.GDMoveButton1Objects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton1TextObjects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton2Objects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton2TextObjects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton3Objects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton3TextObjects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton4Objects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton4TextObjects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton5Objects1 */
/* Reuse gdjs.BattleSceneCode.GDMoveButton5TextObjects1 */
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton1Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton1TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton1TextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton2Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton2TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton2TextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton3Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton3TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton3TextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton4Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton4TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton4TextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton5Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton5TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton5TextObjects1[i].hide();
}
}
}

}


};gdjs.BattleSceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MoveButton1"), gdjs.BattleSceneCode.GDMoveButton1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleSceneCode.GDMoveButton1Objects2.length;i<l;++i) {
    if ( gdjs.BattleSceneCode.GDMoveButton1Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.BattleSceneCode.GDMoveButton1Objects2[k] = gdjs.BattleSceneCode.GDMoveButton1Objects2[i];
        ++k;
    }
}
gdjs.BattleSceneCode.GDMoveButton1Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyCharacter"), gdjs.BattleSceneCode.GDEnemyCharacterObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(10, 25));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("You used Cipitío’s Mischief and dealt " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) + " damage!");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyCharacterObjects2.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyCharacterObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 0, 0.1, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "attack.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayerAttacking");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveButton2"), gdjs.BattleSceneCode.GDMoveButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleSceneCode.GDMoveButton2Objects2.length;i<l;++i) {
    if ( gdjs.BattleSceneCode.GDMoveButton2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.BattleSceneCode.GDMoveButton2Objects2[k] = gdjs.BattleSceneCode.GDMoveButton2Objects2[i];
        ++k;
    }
}
gdjs.BattleSceneCode.GDMoveButton2Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyCharacter"), gdjs.BattleSceneCode.GDEnemyCharacterObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(10, 25));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("You used Siguanaba’s Scream and dealt " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) + " damage!");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyCharacterObjects2.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyCharacterObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 0, 0.1, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "attack.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayerAttacking");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveButton3"), gdjs.BattleSceneCode.GDMoveButton3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleSceneCode.GDMoveButton3Objects2.length;i<l;++i) {
    if ( gdjs.BattleSceneCode.GDMoveButton3Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.BattleSceneCode.GDMoveButton3Objects2[k] = gdjs.BattleSceneCode.GDMoveButton3Objects2[i];
        ++k;
    }
}
gdjs.BattleSceneCode.GDMoveButton3Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyCharacter"), gdjs.BattleSceneCode.GDEnemyCharacterObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(10, 25));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("You used Cadejo’s Bite and dealt " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) + " damage!");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyCharacterObjects2.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyCharacterObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 0, 0.1, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "attack.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayerAttacking");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveButton4"), gdjs.BattleSceneCode.GDMoveButton4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleSceneCode.GDMoveButton4Objects2.length;i<l;++i) {
    if ( gdjs.BattleSceneCode.GDMoveButton4Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.BattleSceneCode.GDMoveButton4Objects2[k] = gdjs.BattleSceneCode.GDMoveButton4Objects2[i];
        ++k;
    }
}
gdjs.BattleSceneCode.GDMoveButton4Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyCharacter"), gdjs.BattleSceneCode.GDEnemyCharacterObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(10, 25));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("You used Tamalazo Ancestral and dealt " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) + " damage!");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyCharacterObjects2.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyCharacterObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 0, 0.1, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "attack.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayerAttacking");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveButton5"), gdjs.BattleSceneCode.GDMoveButton5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleSceneCode.GDMoveButton5Objects1.length;i<l;++i) {
    if ( gdjs.BattleSceneCode.GDMoveButton5Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.BattleSceneCode.GDMoveButton5Objects1[k] = gdjs.BattleSceneCode.GDMoveButton5Objects1[i];
        ++k;
    }
}
gdjs.BattleSceneCode.GDMoveButton5Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyCharacter"), gdjs.BattleSceneCode.GDEnemyCharacterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(10, 25));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("You used Dance of the Torito Pinto and dealt " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) + " damage!");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyCharacterObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyCharacterObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 0, 0.1, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "attack.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayerAttacking");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


};gdjs.BattleSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Victory");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("EnemyTurn");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


};gdjs.BattleSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(100);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(100);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Choose your move!");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayerChooseMove");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MoveButton1"), gdjs.BattleSceneCode.GDMoveButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton1Text"), gdjs.BattleSceneCode.GDMoveButton1TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton2"), gdjs.BattleSceneCode.GDMoveButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton2Text"), gdjs.BattleSceneCode.GDMoveButton2TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton3"), gdjs.BattleSceneCode.GDMoveButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton3Text"), gdjs.BattleSceneCode.GDMoveButton3TextObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton1Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton1TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton1TextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton2Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton2TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton2TextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton3Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton3TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton3TextObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BattleMessageText"), gdjs.BattleSceneCode.GDBattleMessageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyHPText"), gdjs.BattleSceneCode.GDEnemyHPTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHPText"), gdjs.BattleSceneCode.GDPlayerHPTextObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerHPTextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerHPTextObjects1[i].getBehavior("Text").setText("Player HP: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyHPTextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyHPTextObjects1[i].getBehavior("Text").setText("Enemy HP: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDBattleMessageTextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDBattleMessageTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayerTurn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TurnTimer") > 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyCharacter"), gdjs.BattleSceneCode.GDEnemyCharacterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(10, 25));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("You dealt " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) + " damage!");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDEnemyCharacterObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDEnemyCharacterObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 5, 0.1, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "attack.wav", false, 100, 1);
}

{ //Subevents
gdjs.BattleSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "EnemyTurn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TurnTimer") > 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCharacter"), gdjs.BattleSceneCode.GDPlayerCharacterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(5, 20));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).sub(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Enemy dealt " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) + " damage!");
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDPlayerCharacterObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDPlayerCharacterObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 0, 0.1, false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "\"attack.wav\"", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TurnTimer");
}

{ //Subevents
gdjs.BattleSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Victory");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Victory!");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(20);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "\"victory.wav\"", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Defeat");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Defeat!");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "\"defeat.wav\"", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayerChooseMove");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MoveButton1"), gdjs.BattleSceneCode.GDMoveButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton1Text"), gdjs.BattleSceneCode.GDMoveButton1TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton2"), gdjs.BattleSceneCode.GDMoveButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton2Text"), gdjs.BattleSceneCode.GDMoveButton2TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton3"), gdjs.BattleSceneCode.GDMoveButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton3Text"), gdjs.BattleSceneCode.GDMoveButton3TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton4"), gdjs.BattleSceneCode.GDMoveButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton4Text"), gdjs.BattleSceneCode.GDMoveButton4TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton5"), gdjs.BattleSceneCode.GDMoveButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveButton5Text"), gdjs.BattleSceneCode.GDMoveButton5TextObjects1);
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton1Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton1TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton1TextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton2Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton2TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton2TextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton3Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton3TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton3TextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton4Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton4TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton4TextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton5Objects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BattleSceneCode.GDMoveButton5TextObjects1.length ;i < len;++i) {
    gdjs.BattleSceneCode.GDMoveButton5TextObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.BattleSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayerChooseMove");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayerAttacking");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TurnTimer") > 1.5;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.BattleSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleSceneCode.GDPlayerHPTextObjects1.length = 0;
gdjs.BattleSceneCode.GDPlayerHPTextObjects2.length = 0;
gdjs.BattleSceneCode.GDPlayerHPTextObjects3.length = 0;
gdjs.BattleSceneCode.GDEnemyHPTextObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyHPTextObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyHPTextObjects3.length = 0;
gdjs.BattleSceneCode.GDBattleMessageTextObjects1.length = 0;
gdjs.BattleSceneCode.GDBattleMessageTextObjects2.length = 0;
gdjs.BattleSceneCode.GDBattleMessageTextObjects3.length = 0;
gdjs.BattleSceneCode.GDPlayerCharacterObjects1.length = 0;
gdjs.BattleSceneCode.GDPlayerCharacterObjects2.length = 0;
gdjs.BattleSceneCode.GDPlayerCharacterObjects3.length = 0;
gdjs.BattleSceneCode.GDEnemyCharacterObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyCharacterObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyCharacterObjects3.length = 0;
gdjs.BattleSceneCode.GDBattleBackgroundObjects1.length = 0;
gdjs.BattleSceneCode.GDBattleBackgroundObjects2.length = 0;
gdjs.BattleSceneCode.GDBattleBackgroundObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton1Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton1Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton1Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton1TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton1TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton1TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton2Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton2Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton2Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton2TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton2TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton2TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton3Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton3Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton3Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton3TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton3TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton3TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton4Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton4Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton4Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton4TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton4TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton4TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton5Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton5Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton5Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton5TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton5TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton5TextObjects3.length = 0;

gdjs.BattleSceneCode.eventsList5(runtimeScene);
gdjs.BattleSceneCode.GDPlayerHPTextObjects1.length = 0;
gdjs.BattleSceneCode.GDPlayerHPTextObjects2.length = 0;
gdjs.BattleSceneCode.GDPlayerHPTextObjects3.length = 0;
gdjs.BattleSceneCode.GDEnemyHPTextObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyHPTextObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyHPTextObjects3.length = 0;
gdjs.BattleSceneCode.GDBattleMessageTextObjects1.length = 0;
gdjs.BattleSceneCode.GDBattleMessageTextObjects2.length = 0;
gdjs.BattleSceneCode.GDBattleMessageTextObjects3.length = 0;
gdjs.BattleSceneCode.GDPlayerCharacterObjects1.length = 0;
gdjs.BattleSceneCode.GDPlayerCharacterObjects2.length = 0;
gdjs.BattleSceneCode.GDPlayerCharacterObjects3.length = 0;
gdjs.BattleSceneCode.GDEnemyCharacterObjects1.length = 0;
gdjs.BattleSceneCode.GDEnemyCharacterObjects2.length = 0;
gdjs.BattleSceneCode.GDEnemyCharacterObjects3.length = 0;
gdjs.BattleSceneCode.GDBattleBackgroundObjects1.length = 0;
gdjs.BattleSceneCode.GDBattleBackgroundObjects2.length = 0;
gdjs.BattleSceneCode.GDBattleBackgroundObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton1Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton1Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton1Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton1TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton1TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton1TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton2Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton2Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton2Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton2TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton2TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton2TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton3Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton3Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton3Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton3TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton3TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton3TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton4Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton4Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton4Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton4TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton4TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton4TextObjects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton5Objects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton5Objects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton5Objects3.length = 0;
gdjs.BattleSceneCode.GDMoveButton5TextObjects1.length = 0;
gdjs.BattleSceneCode.GDMoveButton5TextObjects2.length = 0;
gdjs.BattleSceneCode.GDMoveButton5TextObjects3.length = 0;


return;

}

gdjs['BattleSceneCode'] = gdjs.BattleSceneCode;
