---
title: FAQ
description: Skeleton compatibility and Animation Blueprint retargeting.
---

## What if your character skeleton is different?

Create a `Titan Climb Rig Profile` for the character's skeleton, then assign it to the **Titan Climbing** component. The profile maps the hand and foot effector, IK, and probe-origin bones, and defines the contact curves used by the climbing Animation Blueprint.

The supplied climbing Animation Blueprint and animation assets target the plugin's reference skeleton. Retarget the Animation Blueprint and its animations to your character skeleton with Unreal Engine's IK Retargeter, then make the retargeted Animation Blueprint inherit from `UTitanClimbAnimInstance`. Reassign any climb-up and climb-exit montages in that blueprint, and verify the curve names match the rig profile.
