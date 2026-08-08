---
title: Titan Climbable Component
description: Register an animated skeletal actor as a climbable Titan.
---

Attach `UTitanClimbableComponent` to the actor that provides an animated climb surface. The component registers with `UTitanClimbableWorldSubsystem`, skins the generated surface to the actor's current skeletal pose, and services the surface queries used by climbers.

## Properties

| Property | Description |
| --- | --- |
| **Surface Asset** | The generated `Titan Surface` asset. Its source mesh must match the skeletal mesh used by this actor. |
| **Debug Surface** | Draws the skinned runtime surface for debugging. |
| **Debug BVH Surface** | Draws the BVH-skinned triangles used by the raycast acceleration structure. |

## Runtime surface queries

These C++ functions provide surface access to the climbing system:

| Function | Description |
| --- | --- |
| `QuerySurface()` | Raycasts against the current skinned Titan surface. |
| `SweepSphereSurface()` / `SweepSphereSurfaceMulti()` | Performs one or multiple sphere sweeps against the surface. |
| `SweepCapsuleSurface()` / `SweepCapsuleSurfaceMulti()` | Performs one or multiple capsule sweeps against the surface. |
| `ResolveAnchor()` | Resolves a stored triangle index and barycentric coordinate into current world position and normal. |
| `ResolveTriangleFrameRotation()` | Resolves a triangle's current frame rotation. |
| `ProcessSkinning()` | Updates the skinned runtime surface data. |

The component automatically chooses BVH-backed queries when the assigned surface asset contains built raycast data; otherwise it uses linear surface traversal.
