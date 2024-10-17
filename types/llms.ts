import { ModelProvider } from "."

export type LLMID =
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID

// OpenAI Models (UPDATED 5/13/24)
export type OpenAILLMID =
  | "gpt-4o-mini"
  | "gpt-4o"
  | "gpt-4-turbo-preview"
  | "gpt-4-vision-preview"
  | "gpt-4"
  | "gpt-3.5-turbo"

// Google Models
export type GoogleLLMID =
  | "gemini-pro"
  | "gemini-pro-vision"
  | "gemini-1.5-pro-latest"
  | "gemini-1.5-flash"

// Anthropic Models
export type AnthropicLLMID =
  | "claude-2.1"
  | "claude-instant-1.2"
  | "claude-3-haiku-20240307"
  | "claude-3-sonnet-20240229"
  | "claude-3-opus-20240229"
  | "claude-3-5-sonnet-20240620"

// Mistral Models
export type MistralLLMID =
  | "mistral-tiny"
  | "mistral-small-latest"
  | "mistral-medium-latest"
  | "mistral-large-latest"

// Groq Models
export type GroqLLMID =
  | "llama3-8b-8192"
  | "llama3-70b-8192"
  | "mixtral-8x7b-32768"
  | "gemma-7b-it"

// Perplexity Models (UPDATED)
export type PerplexityLLMID =
  | "llama-3.1-sonar-small-128k-online"
  | "llama-3.1-sonar-large-128k-online"
  | "llama-3.1-sonar-huge-128k-online"
  | "llama-3.1-sonar-small-128k-chat"
  | "llama-3.1-sonar-large-128k-chat"
  | "llama-3.1-8b-instruct"
  | "llama-3.1-70b-instruct"

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
