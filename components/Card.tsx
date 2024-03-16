import { BoardContext } from '@/app/layout'
import { type Card } from '@/interfaces/card'
import { useContext } from 'react'

const Card = ({
  card,
  upsideDown,
  hoverMove,
  clickAdd,
}: {
  card: Card
  upsideDown?: boolean
  hoverMove?: boolean
  clickAdd?: boolean
}) => {
  const { addCard } = useContext(BoardContext)

  return (
    <div
      className={`rounded-2xl bg-slate-200 w-[220px] h-[300px] p-6 flex flex-col items-center relative justify-center gap-4 cursor-pointer overflow-hidden hover:bg-slate-100 transition-all'
      } duration-300 ${
        hoverMove &&
        (upsideDown ? 'hover:-translate-y-6' : 'hover:translate-y-6')
      }`}
      onClick={() => {
        if (clickAdd) addCard(card)
      }}
    >
      <span className="font-semibold top-14 absolute">{card.name}</span>
      <span className="font-semibold left-0 bottom-0 absolute p-6 bg-red-200 clip rounded-tr-2xl">
        {card.attack}
      </span>
      <span className="absolute bottom-32 text-center">{card.description}</span>
      <span className="font-semibold right-0 bottom-0 absolute p-6 bg-yellow-200 rounded-tl-2xl">
        {card.health}
      </span>
    </div>
  )
}

export default Card
