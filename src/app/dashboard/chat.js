'use client'
import { useEffect } from 'react'
import io from 'socket.io-client'

export default function Chat() {
  useEffect(() => {
    const socket = io()
    
    socket.on('connect', () => {
      console.log('Connected to WebSocket')
    })

    socket.on('message', (msg) => {
      console.log('Received message:', msg)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div>
      <h1>WebSocket Dashboard</h1>
    </div>
  )
}
