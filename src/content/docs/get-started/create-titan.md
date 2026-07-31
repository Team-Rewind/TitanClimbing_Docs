---
title: Create Titan
description: Make a skeletal character or actor available as a climbing surface.
---

## 1. Create a climbable target

For this walkthrough, use Unreal Engine's Mannequin as a large climbable target. Start with a **Character** Blueprint class.

![Create Character Blueprint](../../../assets/image-3.png)

Set its mesh to `SKM_Manny_Simple` and apply the required transform settings.

![Set target mesh](../../../assets/image-4.png)

Add a **Titan Climbable** component. It registers the actor with the world surface-query subsystem and provides raycast/sweep access to its surface data.

![Titan Climbable component](../../../assets/image-8.png)

The component's primary setting is its **Surface Asset**. Assign the generated asset after completing the next section.

## 2. Create a Titan Surface asset

In the Content Browser, create a **Titan Surface** asset from the **Miscellaneous** category.

![Create Titan Surface asset](../../../assets/image-10.png)

Set **Source Mesh** to the same skeletal mesh used by the target actor, for example `SKM_Manny_Simple`.

![Set source mesh](../../../assets/image-13.png)

The surface-generation settings let you balance accuracy and runtime cost:

- **Reduction Settings** reduce triangle and vertex count.

Enable **Build Raycast BVH** for efficient runtime raycasts and sphere/capsule sweeps. This is recommended for normal gameplay use.

Click **Generate** in the asset editor toolbar. The viewport displays the generated climb surface: green lines show triangles and red lines show vertex normals.

![Generated surface preview](../../../assets/image-17.png)

Finally, assign this asset to the target's **Titan Climbable** component. The target is now ready for the player to query and climb.
