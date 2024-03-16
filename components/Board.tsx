import { type Card as ICard } from '@/interfaces/card'
import Card from './Card'

const Board = ({ cards }: { cards: ICard[] }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 scale-[85%]">
      {cards.map((card) => (
        <Card
          key={card.name}
          card={card}
          upsideDown={false}
          hoverMove={false}
        />
      ))}
    </div>
  )
}

export default Board
