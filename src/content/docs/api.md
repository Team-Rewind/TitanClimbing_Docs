---
title: API
description: Runtime components, data assets, and editor tools in Titan Climbing.
---

## Runtime module

The `TitanClimbing` runtime module contains gameplay components, surface queries, the climbing state machine, animation integration, and networking logic.

### `UTitanClimbingComponent`

Attach this Blueprint-spawnable component to an `ACharacter` to enable climbing.

| Function | Purpose |
| --- | --- |
| `StartClimbing()` | Looks for an eligible surface in front of the character and begins the entering state. |
| `StopClimbing(Reason)` | Stops climbing and restores normal movement. |
| `SetClimbInput(FVector2D)` | Supplies normalized movement input for surface traversal. |
| `Jump()` / `StopJumping()` | Starts or releases a climbing jump. |
| `GetClimbState()` | Returns the current `ETitanClimbState`. |
| `GetCurrentClimbable()` | Returns the surface actor currently used as the climbing anchor. |

The state machine uses `Idle`, `Entering`, `Climb`, `Jump`, `Cling`, `ClimbUp`, and `ClimbExit`. Surface loss, manual cancellation, and setup failures return the component to `Idle`.

### `UTitanClimbableComponent`

Attach this component to an actor that should provide a climbable surface. It registers itself with `UTitanClimbableWorldSubsystem`, keeps the skinned surface pose current, and provides raycast plus sphere/capsule sweep queries.

For skeletal targets, assign a generated `UTitanSurfaceAsset`. Static mesh hits are also represented by the shared surface-hit type.

### `UTitanWalkingComponent`

This optional character component supports walking over moving skeletal surfaces. It builds a temporary collision patch from nearby source triangles, tracks the prior surface frame, and applies the corresponding surface velocity.

### `UTitanClimbAnimInstance`

Base Animation Instance for climbing animation and procedural limb placement. It exposes climb state, blend values, surface information, animation play rate, and rig targets to Animation Blueprints. Configure climb-up and climb-exit montages on the derived Anim Blueprint.

## Data assets and query types

### `UTitanClimbRigProfile`

Data Asset describing the target skeleton and four limb profiles. Each limb profile contains bone names, probe settings, reach limits, fallback sweeps, contact-curve name, and surface offset.

### `UTitanSurfaceAsset`

Generated data asset containing a simplified surface mesh, surface triangles, skinned vertices, bridge definitions, and optional BVH raycast data. Create and edit it through the **Titan Surface** editor asset.

### Surface queries

`FTitanSurfaceQuery`, `FTitanSurfaceSphereSweepQuery`, and `FTitanSurfaceCapsuleSweepQuery` represent runtime queries. `FTitanSurfaceHitResult` identifies hit source, position, normal, triangle/barycentric anchor information, and owning climbable component.

## Networking

`UTitanClimbingComponent` sends climb and jump state to the server, then applies replicated state for remote character presentation. Use **Movement State Send Rate** and **Remote Interpolation Delay** to tune traffic and smoothing.

## Editor module

The `TitanClimbingEditor` module adds the `Titan Surface` asset factory, custom asset editor, generation tools, preview viewport, and bridge editing. Generation can reduce the source mesh, build logical weld groups, flatten normals, and construct BVH raycast data.
