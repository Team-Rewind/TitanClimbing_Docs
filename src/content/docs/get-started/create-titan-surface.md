---
title: Create Titan Surface
description: Generate surface data for an animated skeletal Titan.
---

## 1. Create the asset

In the Content Browser, create a **Titan Surface** asset from the **Miscellaneous** category.

![Create Titan Surface asset](../../../assets/image-10.png)

Set **Source Mesh** to the same skeletal mesh used by the Titan's **Titan Climbable** component, for example `SKM_Manny_Simple`.

![Set source mesh](../../../assets/image-13.png)

## 2. Configure generation

Use **Reduction Settings** to reduce the generated triangle and vertex count. Lower triangle percentages are cheaper at runtime but provide a less detailed climbing surface.

Use **Logical Weld Settings** to join nearby compatible vertices, and **Normal Flatten Settings** to smooth the generated surface normals. These settings help make traversal across seams and uneven mesh detail more stable.

Enable **Build Raycast BVH** for efficient runtime raycasts and sphere/capsule sweeps. This is recommended for gameplay.

## 3. Generate and assign

Click **Generate** in the asset editor toolbar. The viewport displays the generated climb surface: green lines show triangles and red lines show vertex normals.

![Generated surface preview](../../../assets/image-17.png)

Assign the generated asset to the Titan's **Titan Climbable** component **Surface Asset** property.
