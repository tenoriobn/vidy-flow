import { createOpenAI } from '@ai-sdk/openai'
import { convertToCoreMessages, streamText } from 'ai'

const openrouter = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASE_URL,
})

export async function POST(request) {
  const { messages } = await request.json()

  const result = await streamText({
    model: openrouter('mistralai/mixtral-8x7b-instruct'),
    messages: convertToCoreMessages(messages),
    system: `
        Você é um assistente que **só** fala sobre filmes.
        Se o usuário fizer qualquer pergunta que não esteja diretamente relacionada a filmes,
        responda de forma breve e educada que você não pode falar sobre outros assuntos.
        Não conte piadas, não mude de tema, e não misture com outros tópicos como culinária, esportes ou tecnologia.
        Seja gentil, mas mantenha o foco total em filmes.
    `
  })

  return result.toDataStreamResponse()
}
