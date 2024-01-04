---
title: RabbitMQ
heroImage: "../../images/rabbitmq.png"
description: enqueue and dequeue fast around your apps
pubDate: "Jan 05 2023"
updatedDate: "Aug 20 2023"
---

RabbitMQ is a message broker: it accepts and forwards messages.

You can think about it as a post office: when you put the mail that you want posting in a post box, you can be sure that the letter carrier will eventually deliver the mail to your recipient. In this analogy, RabbitMQ is a post box, a post office, and a letter carrier.

## Basics: a queue

What is a `queue`? just a collection of entities maintained in a `sequence`. `Sequence`s can be modified by adding or removing entities to and from the beginning or the end.

So, how do you measure queues? by:
- size: how much messages are waiting
- age: how old is the oldest messages

If you have 1 million messages, is that bad? It depends, if you have an age of 5s, it means you are processing 200.000 msg per second.
And if you have 10 messages, but you have an age of 5 minutes, this means the messages are going very slowly or aren't being consumed at all.

