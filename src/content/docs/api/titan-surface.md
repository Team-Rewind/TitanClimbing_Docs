---
title: Titan Surface
description: Generated skeletal-mesh surface data used by climbable Titans.
---

`UTitanSurfaceAsset` stores the simplified, skinnable surface used by a **Titan Climbable** component. Create it from the Content Browser, configure the source mesh and generation settings, then click **Generate** in the Titan Surface editor.

## Surface settings

| Property | Description |
| --- | --- |
| **Source Mesh** | Skeletal mesh used to generate the surface. It must be the same mesh used by the climbable Titan. |
| **Reduction Settings → Num Of Triangles Percentage** | Fraction of the source triangles retained during generation. |
| **Reduction Settings → Welding Threshold** | Distance used when welding nearby vertices during reduction. |
| **Reduction Settings → Lock Edges** | Preserves edges during mesh reduction. |
| **Reduction Settings → Volume Importance** | Importance assigned to preserving volume during reduction. |
| **Logical Weld Settings → Enabled** | Enables logical grouping of nearby compatible vertices. |
| **Logical Weld Settings → Weld Distance** | Maximum distance between vertices in a logical weld group. |
| **Logical Weld Settings → Max Normal Angle Degrees** | Largest normal difference allowed in a logical weld group. |
| **Logical Weld Settings → Require Same Dominant Bone** | Limits logical welding to vertices with the same dominant skeletal bone. |
| **Normal Flatten Settings → Strength** | Amount of normal flattening applied to the generated surface. |
| **Normal Flatten Settings → Max Angle Degrees** | Maximum normal-angle difference included in flattening. |
| **Normal Flatten Settings → Iteration** | Number of normal-flattening passes. |
| **Build Raycast BVH** | Builds the acceleration structure used for efficient raycast and sweep queries. Recommended for gameplay. |

## Generated data

Generation populates the simplified **Triangles** and skinnable **Vertices** data, optional **Raycast Data**, and topology metadata. These fields are generated output and should be regenerated after changing the source mesh or generation settings.

## Bridge data

**Bridge Definitions** are generated/editor-managed paths that connect portions of the surface. Each bridge stores path points anchored to surface triangles, its path type, the source topology hash, and winding direction. Regenerate the bridge overlay after changing the base surface topology.
