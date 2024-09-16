## ClothingTryOn

This is the Repository For Our Frontend. Our source code for doing diffusion is hosted on [HuggingFace Spaces](https://huggingface.co/spaces/amarasep/ClothingTryonModel/tree/main)

![GitHub profile picture](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/976/250/datas/gallery.jpg) 

# FittingRoom: Virtual Try-On with AI

## Inspiration

In this moving world where different fashions and styles are becoming more accessible to more people, it's easy to shop online for things you think are going to look good on you, only for you to buy and try it on, realizing you ended up with a $50 disappointment. People want to dress to impress but oftentimes end up missing the mark as the clothes simply don't fit. With fast fashion on the rise, 74% of consumers have regretted buying online, accumulating nearly 500 million kilograms of waste annually. Our invention hopes to stop the trash from where it originally comes from—the decision to purchase a garment or not.

## What It Does

Using AI, our website will let you try out any outfit you want simply with an image of the clothes you want and a photo of you before you buy it. After selection, it will generate a photo of you in the clothes, replacing the clothes you were currently wearing. If you like the photos, you can create an account to save your photos and revisit them another time. Companies will be able to use our API to implement our program into their own e-commerce website, creating a more personalized shopping experience. These better experiences will increase customer engagement and sales conversion rates, lower shopping cart abandonment rates, and help companies reach their environmental targets by helping customers choose the right clothes.

## How We Built It

For the model itself, we segmented the photo into pieces to create a mask and used generative AI to change the image at a selected segment with an image prompt. To segment the photo, we used Segment-Body to separate the background from the foreground body, removing the face and hands in the process (to avoid applying a style to unclothed features). We then used the IP-Adapter pipeline, which allows us to prompt the image generation with an image (the new clothes) instead of text by inpainting the mask. We applied the image generation to our mask with a few negative and positive prompts to then use the IP-Adapted pipeline for inpainting, which generates a new image on our selected segment of the photo.

```python
final_image = ipadapter_pipeline(
    prompt="photorealistic, natural body, realistic skin, natural skin",
    negative_prompt="ugly, bad quality, bad anatomy, deformed body, deformed hands, deformed feet, deformed face, deformed clothing, deformed skin, bad skin, leggings, tights, stockings",
    image=image,
    mask_image=mask_img,
    ip_adapter_image=ip_image,
    strength=0.99,
    guidance_scale=7.5,
    num_inference_steps=100,
).images[0]
```

To create a visually appealing user experience, mockups were designed, reviewed, and reiterated on Figma. We used React and Tailwind CSS for the front-end. React allowed us to build a dynamic and responsive interface, ensuring that users can easily upload photos, select garments, and view the generated images in real-time. Tailwind CSS enabled us to quickly prototype and implement a minimalist design that is both functional and aesthetically pleasing. This approach allowed for rapid iteration and customization, ensuring the interface is intuitive and aligns with modern web design trends.

We also integrated features such as image uploads, user account management, and API interactions with the backend. The backend was built using Express and MongoDB to efficiently handle server requests and data storage. Postman was used for testing and documenting API endpoints, while Auth0 provided secure user authentication.

## Challenges we ran into

Creating an AI from scratch that can both identify and replace clothes in a convincing manner was time-consuming and difficult to train. To get one that tops any of the ones made by researchers who have spent months working on a model is a challenge that in and of itself and not one which is truly feasible by any team within a 36 hour time frame. However, we still managed to get a working model that with some fine-tuning and more time would be feasible to implement and learnt a lot about making one through this experience.

Better models = More computations and based on our limited budget we weren't able to get a high-end subscription to run the programs limiting our overall quality of machines.

Additionally, with how ubiquitous AI is nowadays it's often easy to forget how complicated softwares can be to implement together. We ran into a major error with deprecated libraries, causing us to have to use an older version of Python in addition to purchasing compute on Google Colab to get the model working in the first place. This issue left us with a new appreciation to how thankless the job of being an upkeeper of used packages

Our challenges were not only virtual limitations, but also physical ones. One of our team members could not access wifi for the whole event, leading to friction with intergrating their work with the rest of the team's. This lead to re-assignment of tasks to different members, causing our team to have to push themselves out of their comfort zones to learn something new.

## Accomplishments that we're proud of

We’re really proud of the design, which successfully achieves a minimalist and modern vibe.

We're happy about getting diffusion to work and actually being able to generate images based on our prompts (at least at the notebook level), this being the first time doing any work with diffusion (or with ML and AI of this type)

## What we learned

Many of us weren't great at design, but through collaboration with other teammates we learnt a lot into what makes good design, especially in the modern age.

## What's next for FittingRoom

Most consumers don't purchase clothes soley by how they look behind a white background, but instead how they look on models. That poses an issue to our program as it's unable to recognize clothes on other people. We plan to solve this by creating an AI to recognzie clothes worn by people in photos and output a image of the plain clothes. If not enough information is provided by a singular photo, users can supplement the rest with context-filling (like in Adobe) or use multiple photos.

Additionally, it's often hard to find similarly like-minded people with the same unique style. FittingRoom will implement a system where you can find people with similar taste in clothing, giving you recommendations based off what others have tried on and enjoyed with similar styles as you (similar to the Spotify recommendation system).
