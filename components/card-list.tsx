import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

const cardList = [
  {
    title: "Card Title",
    description: "Card Description",
    content: "Card Content",
  },
]

export function CardList() {
  return (
    <>
      {cardList.map((card) => (
        <Card>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <CardContent>{card.content}</CardContent>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
