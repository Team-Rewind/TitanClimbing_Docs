---
title: Titan Climbing Component
description: Player-side climbing settings and Blueprint functions.
---

`UTitanClimbingComponent` is a Blueprint-spawnable component for an `ACharacter`. It owns the climbing state machine, surface anchoring, limb probes, transitions, and replicated climb presentation.

## Blueprint functions

| Function | Description |
| --- | --- |
| `StartClimbing()` | Searches for an eligible surface in front of the character and begins climbing. Returns whether a surface was found. |
| `StopClimbing(Reason)` | Ends climbing. The default reason is `Manual`. |
| `SetClimbInput(FVector2D)` | Sets traversal input; values are clamped to a maximum length of 1. |
| `Jump()` / `StopJumping()` | Presses or releases the climbing jump input. |
| `StartCling()` / `StopCling()` | Starts or stops the cling state. |
| `GetClimbState()` / `IsClimbing()` | Returns the state or whether climbing is active. |
| `GetSurfaceNormal()` | Returns the current smoothed surface normal. |
| `GetCurrentClimbable()` | Returns the current `UTitanClimbableComponent` anchor. |

## General

| Property | Description |
| --- | --- |
| **Climb Rig Profile** | `Titan Climb Rig Profile` used to validate the character skeleton and configure limb probes/IK. |
| **Max Climb Surface Angle From Vertical** | Largest eligible surface angle. `0°` is vertical and `90°` is horizontal. |
| **Walk Transition Surface Angle From Vertical** | Surface angle at which traversal may transition to walking. |
| **Force Walk Transition Surface Angle** | Surface angle at which the character must transition to walking. |
| **Max Anchor Speed For Walk Transition** | Maximum moving-surface speed allowed when entering walking. |
| **Walk Transition Floor Contact Distance** | Maximum capsule-base distance from the floor for a downward climb-to-walk transition. |
| **Walk Transition Input Lock Duration** | Duration for which movement input is ignored after the transition. |
| **Climb Exit Rotation Blend Duration** | Time used to blend capsule pitch and roll back upright on exit. |
| **Minimum Facing Surface Dot** | Minimum alignment between the character forward vector and the direction to the surface. |
| **Grab Probe Distance** | Forward initial-grab distance beyond the capsule radius. |
| **Anchor Probe Offset** | Local-space offset for the initial surface probe. |
| **Surface Probe Start Offset** | Distance that subsequent surface probes begin away from the surface. |
| **Surface Probe Distance** | Length of subsequent surface probes. |
| **Climbable Trace Channel** | Trace channel used when detecting static-mesh climb surfaces. |

## Entering and movement

| Property | Description |
| --- | --- |
| **Entering Duration** | Duration of the transition into the climbing state. |
| **Climb Speed Scale** | Multiplier for base horizontal and vertical climbing speed. |
| **Max Substep Distance** | Maximum movement distance per collision-resolution substep. |
| **Max Substeps Per Frame** | Maximum number of movement substeps evaluated each frame. |
| **Min Movement Up Projection Length** | Minimum usable length of the movement-up vector projected onto the surface. |
| **Corner Search Radius** | Radius used to find a valid surface while traversing a corner. |
| **Max Corner Turn Degrees** | Largest allowed normal-direction change at a corner. |
| **Corner Backtrack Tolerance** | Allowed reverse movement while resolving a corner. |
| **Corner Probe Reach** | Extra probe reach used while looking around corners. |
| **Min Direct Progress Ratio** | Minimum direct progress required for a corner candidate. |
| **Static Corner Wrap Angle Step** | Angular step used while wrapping static-mesh corners. |
| **Static Concave Wall Facing Dot** | Facing threshold used for static concave-corner candidates. |
| **Climb Rotation Speed** | Rate at which the character aligns with the climbing surface. |

## Surface smoothing

| Property | Description |
| --- | --- |
| **Normal Interp Speed** | Interpolation speed for the visual climbing normal. |
| **Max Immediate Pose Normal Change** | Normal-angle change that may be applied immediately to the pose. |
| **Pose Surface Validation Distance** | Distance travelled before a pose-surface update is validated. |
| **Pose Surface Normal Tolerance Degrees** | Maximum normal difference allowed by pose-surface validation. |
| **Min Pose Surface Progress Ratio** | Required fraction of forward progress for a validated pose-surface update. |
| **Pose Normal Smooth Time** | Time used to smooth pose normal changes. |

## Jump and climb up

| Property | Description |
| --- | --- |
| **Jump Distance** | Maximum distance covered by a climbing jump. |
| **Jump Duration** | Duration of the climbing jump. |
| **Jump Path Segment Count** | Number of segments used to evaluate the jump path. |
| **Climb Up Walkable Probe Distance** | Probe distance used to find a walkable surface for climb-up. |
| **Max Climb Up Character Tilt Angle** | Maximum character tilt allowed for a climb-up transition. |
| **Climb Up Grip Height Ratio** | Relative grip-height threshold used to qualify climb-up. |
| **Climb Up Clearance Length Scale** | Multiplier for the clearance check during climb-up. |

## Cling and leg physics

| Property | Description |
| --- | --- |
| **Cling Gravity** | Gravity strength applied while clinging. |
| **Cling Damping** | Damping applied to cling motion. |
| **Anchor Drag Coef** | Drag applied at the climbing anchor. |
| **Arm Length Scale** | Multiplier applied to arm reach while clinging. |
| **Cling Collision** | Enables torso collision checks in the cling state. |
| **Cling Surface Padding** | Surface separation used by cling collision. Available when **Cling Collision** is enabled. |
| **Cling Body Sphere Radius** | Torso collision sphere radius; `0` uses the character capsule radius. |
| **Leg Root Bones** | Root bones used by physical leg animation while clinging. |
| **Cling Leg Blend** | Blend weight for cling leg physics. |
| **Leg Orientation Strength** | Physical-animation orientation strength for the legs. |

## Debug and network

| Property | Description |
| --- | --- |
| **Draw Debug** | Draws climbing query and surface debug information. |
| **Movement State Send Rate** | Frequency, in Hz, at which local climbing movement state is sent in network games. |
| **Remote Interpolation Delay** | Delay used when smoothing replicated remote climbing state. |
