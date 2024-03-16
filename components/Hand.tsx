import Card from './Card'

const Hand = ({
  cards,
  upsideDown,
  clickAdd,
}: {
  upsideDown?: boolean
  cards: Card[]
  clickAdd?: boolean
}) => {
  return (
    <div className={`flex gap-2 absolute ${upsideDown ? 'bottom-0' : 'top-0'}`}>
      {cards.map((card) => (
        <Card
          key={card.name}
          card={card}
          upsideDown={upsideDown}
          hoverMove
          clickAdd={clickAdd}
        />
      ))}
    </div>
  )
}

export default Hand
