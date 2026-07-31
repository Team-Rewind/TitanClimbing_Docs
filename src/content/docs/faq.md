---
title: FAQ
description: Common setup questions and troubleshooting for Titan Climbing.
---

## Do I need to restart Unreal Engine after installing?

Usually, yes. If the Plugin Manager asks for a restart, restart before continuing.

## Where should I start?

Start with [Get Started](./get-started/) to complete installation and initial setup, then move to the [API](./api/) reference.

## Why can't the character start climbing?

Check that a `TitanClimbableComponent` is present on the target, its **Surface Asset** is assigned for skeletal targets, and the player's **Climbable Trace Channel** matches the target collision responses. The initial surface must also meet the climbing component's facing, distance, and slope requirements.

## When do I need a Titan Surface asset?

Use one for a climbable skeletal mesh. It stores generated surface triangles and optional BVH data used to follow the animated mesh. Create it from the Content Browser's **Titan Surface** asset type, select the same source mesh as the target actor, generate it, then assign it to **Titan Climbable**.

## Why doesn't limb IK place correctly?

Verify that the assigned `Titan Climb Rig Profile` matches the character skeleton. Check limb effector, IK, and probe-origin bone names, then make sure the Animation Blueprint derives from `UTitanClimbAnimInstance` and supplies the configured contact curves.

## Do I need Titan Walking?

Add `UTitanWalkingComponent` when a character must stand or walk on an animated skeletal target. Ordinary climbing uses `UTitanClimbingComponent`; the walking component specifically produces a local collision patch for moving skeletal surfaces.

## Is the plugin networked?

Yes. The climbing component sends climb and jump state to the server and replicates it for remote presentation. Tune the send rate and remote interpolation settings for your game's networking needs.
