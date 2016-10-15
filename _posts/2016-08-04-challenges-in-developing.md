---
layout: post
date: 2016-08-04
title: Challenges while developing Alexa Skills
---

So I decided to write a few Alexa skills for Amazon's Echo. If you haven’t heard of it yet, Echo is a device that uses a voice service that is called Alexa. The cool thing about this service is that it is cloud-based so Alexa keeps getting smarter as more developers code skills for her.

 I figured since I like playing music, coding speech interaction would be super fun. Also, Amazon was offering a free echo through Bloc for those that got 3 skills published, and I couldn't pass that up. Overall, this was a really great experience because it quickly exposed me to AWS Lambda and gave me creative freedom to do whatever I wanted…well, not whatever. More like whatever is publishable.

Anyhow, I should back up a bit for those not familiar with Alexa. So by a “skill” I mean an ability that Alexa has. For instance, Alexa has a skill to play music from Spotify. The way it works is you use the wake word “Alexa” and say something like this:

“Alexa, play The Beatles on Spotify”.

And if you do have a working Spotify account, Alexa will hook you up with The Beatles. Behind the scenes, though, your words are being converted into JSON and are sent as a request to a server (most likely AWS), which contains the business logic to make the song play from Spotify.

My first idea for a skill was simple. I wanted to build a slang dictionary where the user would ask Alexa for the slang definition of a word and Alexa would get the Urban Dictionary definition and read it to the user.

I liked the idea of this skill because to me it was funny, and it required me to work with UrbanDictionary's APIs and use asynchronous programming in order to make it work. The most challenging thing about this project was finding documentation and understanding asynchronous programming.
In the end, this skill was not published because of its nature, but I was able to publish other skills such as platypus fact, Prince trivia game, and a reverse word.
