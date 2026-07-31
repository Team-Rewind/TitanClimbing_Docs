---
title: Get Started
description: Set up the Titan Climbing plugin in an Unreal Engine project.
---

## Before you begin

This guide uses the Unreal Engine Third-Person template as a baseline. The plugin contains two modules:

- `TitanClimbing` is the runtime module used by characters and climbable actors.
- `TitanClimbingEditor` provides the **Titan Surface** asset editor and surface generator.

The plugin also enables Unreal's `ControlRig` and `FullBodyIK` plugins. Ensure those dependencies remain enabled.

## 1. Enable the plugin

1. Navigate to **Edit > Plugins** in Unreal Engine.
2. Search for `Titan Climbing` and enable it.
3. Restart the editor if prompted.

![Titan Climbing Plugin](../../../assets/step0-img.png)

## 2. Complete the setup sequence

1. Follow [Create Titan](./create-titan/) to make a target actor climbable and generate its `Titan Surface` asset.
2. Follow [Create Player](./create-player/) to add the player-side components and input bindings.
3. Assign a compatible `Titan Climb Rig Profile` to the player character's **Titan Climbing** component.
4. Use an Animation Blueprint based on `UTitanClimbAnimInstance` when limb IK, climb-up, or climb-exit animation is required.

> The player and climbable actor must use a collision/trace setup compatible with the `Climbable Trace Channel` configured on `UTitanClimbingComponent`.
