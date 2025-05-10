const demoCardData = {
  title: "Popular Products",
  cards: [
    {
      title: "Wireless Headphones",
      description: "Noise cancelling, over-ear",
      content: "High-quality audio with long battery life.",
      footer: "$199.99",
    },
    {
      title: "Smart Watch",
      description: "Fitness & Health Tracker",
      content: "Track your heart rate, steps, and sleep.",
      footer: "$149.99",
    },
    {
      title: "4K Monitor",
      description: "27-inch, 144Hz",
      content: "Perfect for gaming and productivity.",
      footer: "$329.00",
    },
  ],
};

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardList() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-medium mb-6">{demoCardData.title}</h1>
      {demoCardData.cards.map((myCard) => (
        <Card key={myCard.title}>
          <CardHeader>
            <CardTitle>{myCard.tite}</CardTitle>
            <CardDescription>{myCard.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{myCard.content}</p>
          </CardContent>
          <CardFooter>
            <p>{myCard.footer}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardList;
