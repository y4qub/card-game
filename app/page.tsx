'use client'

import Board from '@/components/Board'
import Hand from '@/components/Hand'
import { cards } from '@/helpers/cards'
import { useContext } from 'react'
import { BoardContext } from './layout'

export default function Home() {
  const playerCards = [cards[4], cards[3], cards[2]]
  const enemyCards = [cards[1], cards[2], cards[0]]
  const { boardCards } = useContext(BoardContext)

  return (
    <main className="p-24 flex justify-center items-center h-[100vh]">
      <Hand cards={enemyCards} upsideDown clickAdd />
      <Hand cards={playerCards} />
      <Board cards={boardCards} />
    </main>
  )
}
