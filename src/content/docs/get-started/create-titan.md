---
title: Create Climbable Titan
description: Make a skeletal character or actor available as an animated climbing surface.
---

## 1. Create a climbable target

For this walkthrough, use Unreal Engine's Mannequin as a large climbable target. Start with a **Character** Blueprint class.

![Create Character Blueprint](../../../assets/image-3.png)

Set its mesh to `SKM_Manny_Simple` and apply the required transform settings.

![Set target mesh](../../../assets/image-4.png)

Add a **Titan Climbable** component. It registers the actor with the world surface-query subsystem and provides raycast/sweep access to its surface data.

![Titan Climbable component](../../../assets/image-8.png)

The component's primary setting is its **Surface Asset**. Follow [Create Titan Surface](../create-titan-surface/) to generate it from the same skeletal mesh, then assign it here. The target is now ready for the player to query and climb.
