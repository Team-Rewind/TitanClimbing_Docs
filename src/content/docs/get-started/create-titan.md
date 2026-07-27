---
title: Create Titan
description: Create huge titan character to climb up.
---

## 0. Create a Titan Character

On this tutorial, we will just climb up the Mannequins, which Unreal Engine provides. So, let’s start with a **Character** blueprint class.

![alt text](../../../assets/image-3.png)

Then, set its **Mesh** as SKM_Manny_Simple(and apply some simple transform settings).

![alt text](../../../assets/image-4.png)

![alt text](../../../assets/image-5.png)

![alt text](../../../assets/image-6.png)

Additionally, our player character will be close to the titan for climbing. So let’s change some collision preset. (You have to change both, the **Capsule Component** and the **Mesh**.)

![alt text](../../../assets/image-7.png)

Next, add a **Titan Climbable** component. This component will make this character to be the target of **Titan Climbing** component.

![alt text](../../../assets/image-8.png)

This component has very simple property. It just handles a surface asset.

![alt text](../../../assets/image-9.png)

---

## 1. Create a Titan Surface Asset

To create **Titan Surface** asset, right-click the Content Browser. In Miscellaneous tab, you can find the Titan Surface asset that our plugin provides.

![alt text](../../../assets/image-10.png)

![alt text](../../../assets/image-11.png)

In asset editor, you can see the empty viewport and some properties.

![alt text](../../../assets/image.png)

First, let’s set the **Source Mesh**. Our titan mesh was **SKM_Manny_Simple**, so we have to use same mesh in this asset.

![alt text](../../../assets/image-13.png)

Next is some surface generation settings. It is some extra settings so you can check it later. (Link)

![alt text](../../../assets/image-14.png)

The last one is boolean flag for building BVH. Our plugin uses BVH for **super fast** line tracing/shape sweeping. So we recommend to check this flag as true.

![alt text](../../../assets/image-15.png)

And click the Generate button above the tab bar.

![alt text](../../../assets/image-16.png)

Then you can see the surface for climbing! Green lines mean the triangle, and red lines mean the normal of the vertex. You can also turn off the lines for normal by using show flags.

![alt text](../../../assets/image-17.png)

![alt text](../../../assets/image-18.png)

Last, attach the surface asset in the **Titan Climbable** component.

![alt text](../../../assets/image-19.png)
