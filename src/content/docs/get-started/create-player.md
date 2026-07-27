---
title: Create Player
description: Create player character.
---

## 0. Open Your Player Character Blueprint

First, open your primary player character Blueprint. For this guide, we will use `BP_ThirdPersonCharater`.

***Player Character Blueprint 이미지***

---

## 1. Add the Titan Climbing Component

In the Components tab, add a **Titan Climbing** component. This component makes the character to climb to the titan character.

![alt text](../../../assets/step2-titan-climbing.png)

You also have to add a **Titan Walking** component. This component makes the character to walk above the titan character.

![alt text](../../../assets/step2-titan-walking.png)

---

## 2. Attach the input

For properly climbing, we need to wire up the input action to the **Titan Climbing** component. Like `ACharacter::Move` node, just execute `UTitanClimbingComponent::SetClimbInput` node as well.

![alt text](../../../assets/step3-climb-input.png)

---
